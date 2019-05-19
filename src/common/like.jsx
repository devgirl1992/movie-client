import React, {Component} from 'react';

class Like extends Component {
    render() {
        return(
            (!this.props.liked) ?
                <i
                    onClick={this.props.onClick}
                    className="far fa-heart"></i>
                :
                <i
                    onClick={this.props.onClick}
                    className="fas fa-heart"></i>
        )
    }
}

export default Like;

