import React from 'react';
import {Route, Link} from 'react-router-dom';
import {withLocalize, Translate} from "react-localize-redux";
import {Transition} from 'react-transition-group';
import globalTranslations from '../translations/global.json'
// import './temp.css';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.props.addTranslation(globalTranslations);
    }

    render() {
        const activeClass = (route) => {
            return window.location.pathname === route ? "active" : null
        };

        return (
            <header>
                <ul className="header-menu">
                    <li className={activeClass("/")}><Link to="/"><Translate id="base.menu.home">HOME</Translate></Link>
                    </li>
                    <li className={activeClass("/about")}><Link to="/about"><Translate
                        id="base.menu.about">ABOUT</Translate></Link></li>
                    <li className={activeClass("/contact")}><Link to="/contact"><Translate id="base.menu.contact">CONTACT</Translate></Link>
                    </li>
                    <li className={activeClass("/gallery")}><Link to="/gallery"><Translate id="base.menu.gallery">GALLERY</Translate></Link>
                    </li>
                    <li className={activeClass("/music")}><Link to="/music"><Translate
                        id="base.menu.music">MUSIC</Translate></Link></li>
                    <li className={activeClass("/video")}><Link to="/video"><Translate
                        id="base.menu.video">VIDEO</Translate></Link></li>
                </ul>


                <ul className="news">
                    <Transition timeout={100} in={true} appear>
                        {(status => (
                            <li className={status}>
                                <Route path="/event/:eventId">
                                    <div className="news-item">
                                        <span className="date"><Translate
                                            id="base.news.news-item1.date">21 MAY</Translate></span>
                                        <span className="event"><Translate id="base.news.news-item1.event">MUSIC DAY KHARKIV</Translate></span>
                                    </div>
                                </Route>
                            </li>
                        ))}
                    </Transition>
                    <Transition timeout={100} in={true} appear>
                        {(status => (
                            <li className={status}>
                                <Route path="/event/:eventId">
                                    <div className="news-item">
                                <span className="date"><Translate
                                    id="base.news.news-item2.date">5 MAY</Translate></span>
                                        <span className="event"><Translate
                                            id="base.news.news-item2.event">HILLEL KHARKIV</Translate></span>
                                    </div>
                                </Route>
                            </li>
                        ))}
                    </Transition>
                    <Transition timeout={100} in={true} appear>
                        {(status => (
                            <li className={status}>
                                <Route path="/event/:eventId">
                                    <div className="news-item">
                                <span className="date"><Translate
                                    id="base.news.news-item3.date">26 APRIL</Translate></span>
                                        <span className="event"><Translate
                                            id="base.news.news-item3.event">BONGO BAR KHARKIV</Translate></span>
                                    </div>
                                </Route>
                            </li>
                        ))}
                    </Transition>
                </ul>
            </header>
        )
    }
}

export default withLocalize(Header);