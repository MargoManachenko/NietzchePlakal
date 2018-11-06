import React from 'react';
import {Translate, withLocalize} from 'react-localize-redux';
import volumeIcon from '../public/volume.svg';
import volumeMuteIcon from '../public/volume-mute.svg';

class AudioTrack extends React.Component {

    constructor(props) {
        super(props);

        this.seekRef = React.createRef();
        this.playerRef = React.createRef();

        this.state = {
            player: null,
            progressbar: null,
            volume: 5,
            previousVolume: 5,
            totalTime: null,
            currentTime: null,
            timeLeft: '',
            play: false,
            mute: false,
            showProgressbar: false,
            trackName: props.trackName,
            cover1x: props.cover1x,
            cover2x: props.cover2x,
            cover3x: props.cover3x,
            number: props.number
        };

        this.calculateCurrentValue = this.calculateCurrentValue.bind(this);
        this.initProgressBar = this.initProgressBar.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.turnOff = this.turnOff.bind(this);
        this.volumeChange = this.volumeChange.bind(this);
        this.changeMute = this.changeMute.bind(this);
        this.seek = this.seek.bind(this);
    }

    componentDidMount() {
        let audio = this.playerRef.current;
        let duration = 0;
        audio.onloadedmetadata = () => {
            duration = this.getDurationFormatted(audio.duration);
            this.setState({
                player: this.playerRef.current,
                progressbar: this.seekRef.current,
                totalTime: duration
            });
        };
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    getDurationFormatted(secondsTotal) {
        let minutes = Math.floor(secondsTotal / 60);
        let seconds_int = secondsTotal - minutes * 60;
        let seconds_str = seconds_int.toString();
        let seconds = seconds_int < 10 ? '0' + seconds_str.substr(0, 1) : seconds_str.substr(0, 2);
        return minutes + ':' + seconds;
    }

    calculateCurrentValue(currentTime, totalTime) {
        let timeLeft = totalTime - currentTime;
        let minutes = Math.floor(timeLeft / 60);
        let seconds_int = timeLeft - minutes * 60;
        let seconds_str = seconds_int.toString();
        let seconds = seconds_int < 10 ? '0' + seconds_str.substr(0, 1) : seconds_str.substr(0, 2);
        return minutes + ':' + seconds;
    }

    initProgressBar() {
        let totalTime = this.state.player.duration;
        let currentTime = this.state.player.currentTime;

        let timeLeft = this.calculateCurrentValue(currentTime, totalTime);

        this.setState({
            showProgressbar: true,
            timeLeft: timeLeft
        });

        this.state.progressbar.value = (this.state.player.currentTime / this.state.player.duration);
        this.state.progressbar.addEventListener("click", this.seek);

        if (this.state.player.currentTime === this.state.player.duration) {
            this.setState({
                play: true
            })
        }
    };

    seek(evt) {
        let percent = evt.offsetX / this.state.progressbar.offsetWidth;
        let newPlayer = this.state.player;
        let newProgressbar = this.state.progressbar;
        newPlayer.currentTime = percent * this.state.player.duration;
        newProgressbar.value = percent / 100;
        this.setState({
            player: newPlayer,
            progressbar: newProgressbar
        });
    }

    togglePlay() {
        this.props.togglePlaying();
        if (this.state.play) {
            this.state.player.pause();
            this.setState({
                play: false
            })

        } else {

            this.state.player.play();
            this.setState({
                play: true
            });

        }
    }

    turnOff() {
        this.state.player.pause();
        this.setState({
            play: false
        })
    }

    volumeChange(e) {
        let newVolume = e.target.value;
        let newPlayer = this.state.player;
        let muteUpdate;
        newPlayer.volume = newVolume / 10;
        muteUpdate = newVolume === '0';
        this.setState({
            player: newPlayer,
            volume: newVolume,
            mute: muteUpdate
        })
    }

    changeMute() {
        let newPlayer = this.state.player;
        let muteUpdate = !this.state.mute;
        let previousVolume = this.state.volume;
        let volumeUpdate;
        if (muteUpdate) {
            newPlayer.volume = 0;
            volumeUpdate = 0;
        }
        else {
            newPlayer.volume = 0.5;
            volumeUpdate = this.state.previousVolume;
        }
        this.setState({
            player: newPlayer,
            mute: muteUpdate,
            volume: volumeUpdate,
            previousVolume: previousVolume
        })
    }

    render() {
        const activeControllerStyle = {visibility: "visible"};
        const inactiveControllerStyle = {visibility: "hidden"};

        const activeVolumeController = {visibility: "visible"};
        const inactiveVolumeController = {visibility: "hidden"};

        const showTotalTime = {display: "inline"};
        const hideTotalTime = {display: "none"};


        return (
            <div className="song">
                <div className="audio-player">
                    <div className="cover" onClick={this.togglePlay}>
                        <img src={this.state.cover1x} srcSet={`${this.state.cover2x} 2x, ${this.state.cover3x} 3x`}
                             className="album-image"/>
                        <div id="play-btn" className={this.state.play ? 'pause' : 'play'}/>
                    </div>

                    <div className="audio-wrapper">
                        <audio ref={this.playerRef} onTimeUpdate={this.initProgressBar}>
                            <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mp3"/>
                        </audio>
                    </div>
                    <div className="player-controls">
                        <div className="track-info">
                            <p className="track-name">{this.props.number} <Translate
                                id={this.props.idTranslate}> {this.props.trackName}</Translate>
                            </p>
                            <div className="time">
                                <p className="left-time">{this.state.timeLeft}</p>
                                <p className="total-time"
                                   style={this.state.timeLeft === "" ? showTotalTime : hideTotalTime}>{this.state.totalTime}</p>
                            </div>
                        </div>

                        <progress ref={this.seekRef} value="0" max="1"
                                  style={this.state.showProgressbar ? activeControllerStyle : inactiveControllerStyle}/>

                    </div>
                    <div className="volume-controller"
                         style={this.state.play ? activeVolumeController : inactiveVolumeController}>
                        <img src={this.state.mute ? volumeMuteIcon : volumeIcon} alt="" className="volumeIcon"
                             onClick={this.changeMute}/>
                        <input type="range" min="0" max="10" value={this.state.volume} onChange={this.volumeChange}
                               className="volumeRange"/>
                    </div>
                </div>
            </div>

        )
    }

}

export default withLocalize(AudioTrack);

