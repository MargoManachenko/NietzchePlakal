import React from 'react';
import {Translate} from 'react-localize-redux';
import {Transition} from 'react-transition-group';
import VideoIframe from '../Components/VideoIframe';
import Base from '../Components/Base';
import VideoLightBox from '../Components/VideoLightBox';

class Video extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullSizeVideo: false,
            currentVideo: {},
            videoGallery: null
        };
        this.ToggleFullSizeVideo = this.ToggleFullSizeVideo.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentWillMount() {
        const videoGallery = [
            {
                videoId: "_Tkh1x-ypMQ",
                description: "Bongo event bar 20.04.2018"
            },
            {
                videoId: "7uO_4SH9MIc",
                description: "Live in Hillel 19.05.2018"
            },
            {
                videoId: "NdD_utmOhZg",
                description: "KHATOB 11.05.2018"
            },
            {
                videoId: "_Tkh1x-ypMQ",
                description: "Bejt Dan 17.06.2018"
            },
            {
                videoId: "_Tkh1x-ypMQ",
                description: "Bongo event bar 20.04.2018"
            },
            {
                videoId: "7S3MCUNihpI",
                description: "Music Day Kharkiv 21.05.2018"
            }
        ];

        this.setState({
            videoGallery: videoGallery
        });
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick(e) {
        e.preventDefault();
        if (e.target.id === 'video-lightbox') {
            let videoIframe = document.getElementsByClassName("video-container")[0].getElementsByTagName("iframe")[0];
            videoIframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            this.setState({
                fullSizeVideo: !this.state.fullSizeVideo
            });
        }
    }

    ToggleFullSizeVideo(e) {
        e.preventDefault();
        let number = e.target.id;

        let currentVideo = this.state.videoGallery[number - +1];
        this.setState({
            fullSizeVideo: !this.state.fullSizeVideo,
            currentVideo: currentVideo
        });
    }

    render() {
        return (
            <Base>
                <Transition timeout={100} in={true} appear>
                    {(status => (
                        <div className={"main video-content " + status}>
                            <h1 className={status}><Translate id="content.video.headline">Video</Translate></h1>
                            <VideoLightBox
                                show={this.state.fullSizeVideo}
                                videoId={this.state.currentVideo.videoId}
                            />
                            <div className={"video-block " + status}>
                                {/*{this.state.videoGallery.map((video, index) => (*/}
                                {/*<VideoIframe*/}
                                {/*videoId={video.videoId}*/}
                                {/*description={video.description}*/}
                                {/*ToggleFullSizeVideo={this.ToggleFullSizeVideo}*/}
                                {/*key={index + 1}*/}
                                {/*id={index + 1}*/}
                                {/*/>*/}
                                {/*))}*/}

                                {this.state.videoGallery.map((video, index) => (
                                    <VideoIframe
                                        videoId={video.videoId}
                                        description={video.description}
                                        ToggleFullSizeVideo={this.ToggleFullSizeVideo}
                                        key={index + 1}
                                        id={index + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </Transition>
            </Base>
        )
    }
}


export default Video;