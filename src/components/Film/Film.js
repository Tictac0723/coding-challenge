import React, { Component } from 'react';
import Display from '../Display/Display';
import './Film.css';
import axios from 'axios';

class Film extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: []
        }

        this.getFilms = this.getFilms.bind(this);
        // this.getCharacter = this.getCharacter.bind(this);
    }
    getFilms(){
        return axios.get('https://swapi.co/api/films').then((res) => {
            console.log(res.data.results);
            this.setState({films: res.data.results})
        })
    }

    // getCharacter(){
    //     return axios.get('https://swapi.co/api/people').then((res) => {
    //         console.log(res.data.results);
    //         this.setState({characters: res.data.results})
    //     })
    // }

    componentDidMount() {
        this.getFilms();
    }

    // componentDidMount() {
    //     this.getCharacter();
    // }


    render() {
        const {films} = this.state;
        return(
            <div className='Film'>
                <Display films={films} />

            </div>
        )
    }
}

export default Film;
