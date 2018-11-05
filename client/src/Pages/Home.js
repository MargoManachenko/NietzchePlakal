import React from 'react';
import {Translate} from 'react-localize-redux';
import Base from '../Components/Base';
import darkBacgr1x from '../public/dark-background.jpg';
import darkBacgr2x from '../public/dark-background@2x.jpg';
import darkBacgr3x from '../public/dark-background@3x.jpg';
import lightBacgr1x from '../public/light-background.jpg';
import lightBacgr2x from '../public/light-background@2x.jpg';
import lightBacgr3x from '../public/light-background@3x.jpg';

class Home extends React.Component {
    render() {
        return (
            <Base>
                <div className="main main-content">
                    <img src={darkBacgr1x} srcSet={`${darkBacgr2x} 2x, ${darkBacgr3x} 3x`}
                         className="background dark"/>
                    <img src={lightBacgr1x} srcSet={`${lightBacgr2x} 2x, ${lightBacgr3x} 3x`}
                         className="background light"/>
                    <div className="logo-block">
                        <h1>Nietzsche Plakal</h1>
                        <h2 className="logo"><Translate id="content.main.small-headline">
                            MUSIC BAND
                        </Translate></h2>
                    </div>
                </div>
            </Base>
        )
    };
}

export default Home;