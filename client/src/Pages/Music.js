import React from 'react';
import Base from '../Components/Base';
import AudioTracksBox from '../Components/AudioTracksBox'

const Music = () => (
    <Base>
        <div className="main music-content">
            <h1>Music</h1>
            <div className="songs-center">
                <AudioTracksBox/>
            </div>

        </div>
    </Base>
);

export default Music;