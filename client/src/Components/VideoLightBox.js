import React from 'react';
import {Transition} from 'react-transition-group';

const VideoLightBox = (props) => (
    <Transition timeout={100} in={props.show} appear>
        {(status => (
            <div className={"video-lightbox " + status} id="video-lightbox" >
                <div className="video-container">
                    <iframe  src={"http://www.youtube.com/embed/" + props.videoId + "?enablejsapi=1"} frameBorder="0"/>
                </div>
            </div>
        ))}
    </Transition>
);

export default VideoLightBox;