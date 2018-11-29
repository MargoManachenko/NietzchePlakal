import React from 'react';
import YoutubeEmbedVideo from "youtube-embed-video";
import {Transition} from 'react-transition-group';

const VideoLightBox = (props) => (
    <Transition timeout={100} in={props.show} appear>
        {(status => (
            <div className={"video-lightbox " + status} id="video-lightbox" >
                <div className="video-container">
                    <YoutubeEmbedVideo videoId={props.videoId} suggestions={false}/>
                </div>
            </div>
        ))}
    </Transition>
);

export default VideoLightBox;