import React from 'react';
import YoutubeEmbedVideo from "youtube-embed-video";

const VideoIframe = (props) => (
    <div className="video" onClick={props.ToggleFullSizeVideo}>
        <div className="overlay" onClick={props.ToggleFullSizeVideo} id={props.key}>
            <YoutubeEmbedVideo videoId={props.videoId} suggestions={false}/>
        </div>
        <p>{props.description}</p>
    </div>
);

export default VideoIframe;