import React, {Component} from 'react';
import Like from "../common/like";
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import { paginate } from "../utils/paginate";
import {getMovies} from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
    state = {
        allMovies: [],
        genres:[],
        pageSize: 4,
        currentPage: 1
    };

    componentDidMount() {
        this.setState({ allMovies: getMovies(), genres: getGenres() })
    }

    handleDelete = movie => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleLike = (movie) => {
        console.log(movie.title)
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre })
    };

    render() {
        const {length: moviesCount} = this.state.allMovies;
        const {pageSize, currentPage, allMovies} = this.state

        if (moviesCount === 0)
            return <p>There are No Movie in DataBase </p>

        const movies = paginate(allMovies, currentPage, pageSize)

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        genres={this.state.genres}
                        selectedGenre={this.state.selectedGenre}
                        onGenreSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
                    <p>{moviesCount} movies are in DataBase</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>

                        <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>

                                <td><Like
                                    liked={movie.liked}
                                    onClick={() => this.handleLike(movie)}/></td>

                                <td>
                                    <button onClick={() => this.handleDelete(movie)}>Delete</button>
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <Pagination
                         moviesCount={moviesCount}
                         currentPage={currentPage}
                         pageSize= {pageSize}
                         onPageChange = {this.handlePageChange}

                />

            </div>
        );
    }
}

export default Movies;