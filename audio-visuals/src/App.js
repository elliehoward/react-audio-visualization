import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Sublime - 40oz to Freedom</h2>
                <div id="mp3_player">
                    <div id="audio_box">
                        <audio
                            ref="audio"
                            autoPlay={true}
                            controls={true}
                            src={"https://p.scdn.co/mp3-preview/e4a8f30ca62b4d2a129cc4df76de66f43e12fa3f?cid=null"}
                            >
                            </audio>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default App;
