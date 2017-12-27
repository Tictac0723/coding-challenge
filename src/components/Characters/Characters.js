import React, { Component } from 'react';
import axios from 'axios';

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }

        this.getCharacters = this.getCharacterURLs.bind(this);
    }

    getCharacterURLs() {
        const charRequests = [];

        for (var i = 0; i < this.props.characterURLs.length; i++) {
            charRequests.push(axios.get(this.props.characterURLs[i]))
        }

        axios.all(charRequests).then(axios.spread((...res) => {
                this.setState({ characters: res });
        }))

    }


    componentDidMount() {
        this.getCharacterURLs();
    }


    render() {
        const characters = this.state.characters;
        console.log(characters.length);
        return (
            <div className='Characters'>
                <p>Characters:</p>
                <ul>
                    {
                        characters.map((c) => {
                            console.log(c);
                            return (
                                <div key={c.data.name}><a href={c.data.url}>{c.data.name}</a></div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Characters;