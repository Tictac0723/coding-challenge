import React, { Component } from 'react';
import axios from 'axios';

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: false
        }

        this.getCharacters = this.getCharacterURLs.bind(this);
    }

    getCharacterURLs() {
        const charRequests = [];
        this.setState({loading: true});

        for (var i = 0; i < this.props.characterURLs.length; i++) {
            charRequests.push(axios.get(this.props.characterURLs[i]))
        }

        axios.all(charRequests).then(axios.spread((...res) => {
                this.setState({ characters: res, loading: false });
        }))

    }


    componentDidMount() {
        this.getCharacterURLs();
    }


    render() {
        const characters = this.state.characters;
        console.log(characters.length);
        if (this.state.loading) {
            return (
                <div className='Characters'>
                     <p>Characters:</p>
                <img src='loader.gif' alt='loading'/>
                </div>
            )
        } else {
            return (
                <div className='Characters'>
                    <p>Characters:</p>
                        {
                            characters.map((c) => {
                                console.log(c);
                                return (
                                    <div key={c.data.name}><a href={c.data.url}>{c.data.name}</a></div>
                                )
                            })
                        }
                        
                </div>
            )
        }
    }
}

export default Characters;