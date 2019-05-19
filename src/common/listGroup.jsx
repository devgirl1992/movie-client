import React from 'react';

const ListGroup = (props) => {
    const { genres, nameProperty, idProperty, onGenreSelect, selectedGenre } = props;

    return (
        <div>
            <ul className="list-group">
                { genres.map(genre => (
                    <li  key={genre[idProperty]}
                         onClick={() => onGenreSelect(genre)}
                         className={ genre === selectedGenre? "list-group-item active" : "list-group-item"}>
                        { genre[nameProperty] }
                    </li>
                ))}
            </ul>
        </div>
    );
};

ListGroup.defaultProps = {
    nameProperty: "name",
    idProperty: "_id"
}

export default ListGroup;