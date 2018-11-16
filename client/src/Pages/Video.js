import React from 'react';
import {Translate} from 'react-localize-redux';
import {Transition} from 'react-transition-group';
import YoutubeEmbedVideo from "youtube-embed-video";
import Base from '../Components/Base';

const Video = () => (
    <Base>
        <Transition timeout={100} in={true} appear>
            {(status => (
                <div className={"main video-content " + status}>
                    <h1 className={status}><Translate id="content.video.headline">Video</Translate></h1>
                    <div className={"video-block " + status}>
                        <div className="video">
                            <YoutubeEmbedVideo videoId="ppUidARmZ6I" suggestions={false}/>
                            <p>Bongo event bar 20.04.2018</p>
                        </div>
                        <div className="video">
                            <YoutubeEmbedVideo videoId="7uO_4SH9MIc" suggestions={false}/>
                            <p>Live in Hillel 19.05.2018</p>
                        </div>
                        <div className="video">
                            <YoutubeEmbedVideo videoId="NdD_utmOhZg" suggestions={false}/>
                            <p>KHATOB 11.05.2018</p>
                        </div>
                        <div className="video">

                        </div>
                        <div className="video">

                        </div>
                        <div className="video">
                            <YoutubeEmbedVideo videoId="7S3MCUNihpI" suggestions={false}/>
                            <p>Bejt Dan 17.06.2018</p>
                        </div>
                        <div className="video">
                            <YoutubeEmbedVideo videoId="7S3MCUNihpI" suggestions={false}/>
                            <p>Music Day Kharkiv 21.05.2018</p>
                        </div>
                        <div className="video">
                            <YoutubeEmbedVideo videoId="7S3MCUNihpI" suggestions={false}/>
                            <p>Steklyashka street performance
                                28.06.2018</p>
                        </div>
                    </div>
                </div>
            ))}
        </Transition>
    </Base>
);

export default Video;