import React, { Component } from 'react';
import './App.css';

class App extends Component {

    createVisualization(){

    }

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
                            //this is the link to my song url feel free to use it or replace it with your own
                            src={"https://p.scdn.co/mp3-preview/e4a8f30ca62b4d2a129cc4df76de66f43e12fa3f?cid=null"}
                            >
                            </audio>
                        </div>
                            <canvas
                                ref="analyzerCanvas"
                                id="analyzer"
                                >
                                </canvas>
                    </div>
                </div>
            );
        }
    }

    export default App;
