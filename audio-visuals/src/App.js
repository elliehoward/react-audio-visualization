import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)

        this.createVisualization = this.createVisualization.bind(this)
    }

    componentDidMount(){
        this.createVisualization()
    }

    createVisualization(){
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = this.refs.analyzerCanvas;
        let ctx = canvas.getContext('2d');
        let audio = this.refs.audio;
        audio.crossOrigin = "anonymous";
        let audioSrc = context.createMediaElementSource(audio);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);

        function renderFrame(){
            let freqData = new Uint8Array(analyser.frequencyBinCount)
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            console.log(freqData)
            ctx.fillStyle = '#9933ff';
            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 2;
                let bar_height = -(freqData[i] / 2);
                ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
        };
        renderFrame()
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
