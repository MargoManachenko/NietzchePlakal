import React from 'react';
import {Link} from 'react-router-dom';
import {Translate} from 'react-localize-redux';
import {Transition} from 'react-transition-group';

import darkBurger from '../public/darkBurger.svg';
import darkFacebookIcon from '../public/darkFacebook.svg';
import darkYouTubeIcon from '../public/darkYouTube.svg';
import darkTelegramIcon from '../public/darkTelegram.svg';
import darkInstagram from '../public/darkInstagram.svg';

import lightBurger from '../public/lightBurger.svg';
import lightFacebookIcon from '../public/lightFacebook.svg';
import lightYouTubeIcon from '../public/lightYouTube.svg';
import lightTelegramIcon from '../public/lightTelegram.svg';
import lightInstagram from '../public/lightInstagram.svg';

import burgerLine1 from '../public/line1.svg';
import burgerLine2 from '../public/line2.svg';
import burgerLine3 from '../public/line3.svg';

const Sidebar = () => (
    <div className="sidebar">

        <Transition timeout={100} in={true} appear>
            {(status => (
                <div className={window.loadingAnimation === undefined ? "sidebar-logo " + status : "sidebar-logo"}>
                    <Link to="/" className="logo">NIETZSCHE<br/>PLAKAL</Link>
                </div>
            ))}
        </Transition>
        <Transition timeout={100} in={true} appear>
            {(status => (
                <div className="sidebar-menu">
                    <Link to="/" className="menu"><Translate id="base.sidebar.sidebar-menu">MENU</Translate></Link>
                    <div className={"burger-box " + status}>
                        {/*<img src={burgerLine1} alt=""/>*/}
                        {/*<img src={burgerLine2} alt=""/>*/}
                        {/*<img src={burgerLine3} alt=""/>*/}
                        <div className="line1"/>
                        <div className="line2"/>
                        <div className="line3"/>
                    </div>
                    {/*<img src={lightBurger} className="lightBurger" alt=""/>*/}
                    {/*<img src={darkBurger} className="darkBurger" alt=""/>*/}
                </div>
            ))}
        </Transition>
        <div className="social-media dark">
            <div className="icons-block">
                <Link to="https://www.facebook.com/groups/229537741151285/"><img src={darkFacebookIcon}
                                                                                 title="Facebook"/></Link>
                <Link to="https://www.instagram.com/nietzsche_plakal/"><img src={darkInstagram}
                                                                            title="Instagram"/></Link>
                <Link to="https://www.youtube.com/channel/UClJ-aB1hQGjeAX6mNzGFLqQ"><img src={darkYouTubeIcon}
                                                                                         title="YouTube"/></Link>
                <Link to="/"><img src={darkTelegramIcon} title="Telegram"/></Link>
            </div>
        </div>
        <div className="social-media light">
            <div className="icons-block">
                <Link to="https://www.facebook.com/groups/229537741151285/"><img src={lightFacebookIcon}
                                                                                 title="Facebook"/></Link>
                <Link to="https://www.instagram.com/nietzsche_plakal/"><img src={lightInstagram}
                                                                            title="Instagram"/></Link>
                <Link to="https://www.youtube.com/channel/UClJ-aB1hQGjeAX6mNzGFLqQ"><img src={lightYouTubeIcon}
                                                                                         title="YouTube"/></Link>
                <Link to="/"><img src={lightTelegramIcon} title="Telegram"/></Link>
            </div>
        </div>
    </div>
);

export default Sidebar;
