import React, { Component } from 'react';
import './MovieInfo.css';
import Characters from '../Characters/Characters';

class MovieInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            characters: this.props.movieInfo.characters

        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ show: !this.state.show })
    }

    close() {
        this.setState({ show: !this.state.show })
    }


    render() {

        const info = this.props.movieInfo;
        if (!this.state.show) {
            return (
                <div className='movieInfo'>
                    <p className='btn btn-danger btn-info' onClick={this.open}>Show Details</p>
                </div>
            )
        } else {
            return (
                <div className='movieInfo'>
                    <hr />
                    <p className='btn btn-danger btn-info btn-close' onClick={this.close}>No Details</p>
                    <br />
                    Release Year: {info.release_date}
                    <br />
                    <Characters characterURLs= {info.characters} />

                </div>
            )
        }
    }
}

export default MovieInfo;