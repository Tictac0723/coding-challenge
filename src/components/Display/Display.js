import React, { Component } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Display.css';

class Display extends Component {
    render() {
        const films = this.props.films;

        return(
            <div className='Display'>
                {
                    films.map((f) => {
                        console.log(f);
                        return (
                            <div key={f.url}>
                                <h1 className='filmTitle'>{f.title}</h1>
                                <MovieInfo movieInfo={f} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Display;