import React from 'react';
import {Translate} from 'react-localize-redux';
import {Transition} from 'react-transition-group';
import Base from '../Components/Base';
import AudioTracksBox from '../Components/AudioTracksBox'

const Music = () => (
    <Base>
        <Transition timeout={100} in={true} appear>
            {(status => (
                <div className={"main music-content " + status}>
                    <h1 className={status}><Translate id="content.music.headline">Music</Translate></h1>
                    <div className={"songs-center " + status}>
                        <AudioTracksBox/>
                    </div>
                </div>
            ))}
        </Transition>
    </Base>
);

export default Music;