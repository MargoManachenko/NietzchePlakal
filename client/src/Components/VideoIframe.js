import React from 'react';

const VideoIframe = (props) => (
    <div className="video" onClick={props.ToggleFullSizeVideo}>
        <div className="overlay" onClick={props.ToggleFullSizeVideo} id={props.id}>
            <iframe  src={"https://www.youtube.com/embed/" + props.videoId} frameBorder="0" />
        </div>
        <p>{props.description}</p>
    </div>
);

export default VideoIframe;