import React from 'react';
import {Translate} from 'react-localize-redux';
import Base from '../Components/Base';
import AudioTracksBox from '../Components/AudioTracksBox'

const Music = () => (
    <Base>
        <div className="main music-content">
            <h1><Translate id="content.music.headline">Music</Translate></h1>
            <div className="songs-center">
                <AudioTracksBox/>
            </div>
        </div>
    </Base>
);

export default Music;