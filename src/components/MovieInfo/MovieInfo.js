import React, { Component } from 'react';
import './MovieInfo.css';
import axios from 'axios';

class MovieInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            characters: [],
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({show: !this.state.show})
    }

    close() {
        this.setState({show: !this.state.show})
    }


    render() {

        const info = this.props.movieInfo;
        if(!this.state.show){
            return <p className='btn btn-info' onClick={this.open}>Show Details</p>
        } else {
            return(
                <div>
                    <p className='btn btn-info' onClick={this.close}>No Details</p>
                    <ul>
                        <li>
                            Release Year: {info.release_date}
                        </li>
                        <li>
                            Characters:
                            <ul>
                                <li>
                                {info.characters}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        }
        return(
            <div></div>
        )
    }
}

export default MovieInfo;