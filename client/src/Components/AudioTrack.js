import React from 'react';
import style from './audioStyle.css';

class AudioTrack extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startTime: null,
            endTime: null,
            totalTime: null,
            currentTime: null,
            play: false
        };

        this.calculateTotalValue = this.calculateTotalValue.bind(this);
        this.calculateCurrentValue = this.calculateCurrentValue.bind(this);
        this.initProgressBar = this.initProgressBar.bind(this);
        // this.initPlayers = this.initPlayers.bind(this);
        this.togglePlay = this.togglePlay.bind(this);

    }

    calculateTotalValue(length) {
        let minutes = Math.floor(length / 60),
            seconds_int = length - minutes * 60,
            seconds_str = seconds_int.toString(),
            seconds = seconds_str.substr(0, 2),
            time = minutes + ':' + seconds;

        return time;
    }

    calculateCurrentValue(currentTime) {
        var current_hour = parseInt(currentTime / 3600) % 24,
            current_minute = parseInt(currentTime / 60) % 60,
            current_seconds_long = currentTime % 60,
            current_seconds = current_seconds_long.toFixed(),
            current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

        return current_time;
    }

    initProgressBar() {
        let player = document.getElementById('player');
        let length = player.duration;
        let current_time = player.currentTime;

        // calculate total length of value
        let totalLength = this.calculateTotalValue(length);
        // jQuery(".end-time").html(totalLength);
        this.setState({
            endTime: totalLength
        });

        // calculate current value time
        let currentTime = this.calculateCurrentValue(current_time);
        // jQuery(".start-time").html(currentTime);
        this.setState({
            startTime: currentTime
        });

        let progressbar = document.getElementById('seekObj');
        progressbar.value = (player.currentTime / player.duration);
        progressbar.addEventListener("click", seek);

        if (player.currentTime === player.duration) {
            // $('#play-btn').removeClass('pause');
            this.setState({
                play: true
            })
        }

        function seek(evt) {
            let percent = evt.offsetX / this.offsetWidth;
            player.currentTime = percent * player.duration;
            progressbar.value = percent / 100;
        }
    };

    togglePlay() {
        let player = document.getElementById('player');
        if (this.state.play) {
            player.pause();
            this.setState({play: false})

        } else {
            player.play();
            this.setState({play: true})
        }
    }

    render() {
        return (
            <div className="audio-player">
                <div id="play-btn" className={this.state.play ? 'play' : 'pause'} onClick={this.togglePlay}/>
                <div className="audio-wrapper" id="player-container">
                    <audio id="player" onTimeUpdate={this.initProgressBar}>
                        <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mp3"/>
                    </audio>
                </div>
                <div className="player-controls scrubber">
                    <p>Oslo
                        <small>by</small>
                        Holy Esque
                    </p>
                    <span id="seekObjContainer">
			  <progress id="seekObj" value="0" max="1"></progress>
			</span>
                    <br/>
                    <small className="start-time">{this.state.startTime}</small>
                    <small className="end-time">{this.state.endTime}</small>

                </div>
                <div className="album-image"
                     style={{backgroundImage: `url('https://artwork-cdn.7static.com/static/img/sleeveart/00/051/614/0005161476_350.jpg')`}}></div>
            </div>
        )
    }

}

export default AudioTrack;

