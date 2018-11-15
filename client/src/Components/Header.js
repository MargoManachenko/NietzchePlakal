import React from 'react';
import {Route, Link} from 'react-router-dom';
import {withLocalize, Translate} from "react-localize-redux";
import {Transition} from 'react-transition-group';
import globalTranslations from '../translations/global.json'

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.props.addTranslation(globalTranslations);
    }

    render() {
        const activeClass = (route) => {
            return window.location.pathname === route ? "active " : null
        };

        return (
            <Transition timeout={100} in={true} appear>
                {(status => (
                    <header>
                        <ul className="header-menu">
                            <li className={activeClass("/") ? activeClass("/") + status : null}><Link to="/"><Translate
                                id="base.menu.home">HOME</Translate></Link>
                            </li>
                            <li className={activeClass("/about") ? activeClass("/about") + status : null}><Link to="/about"><Translate
                                id="base.menu.about">ABOUT</Translate></Link></li>
                            <li className={activeClass("/contact") ? activeClass("/contact") + status : null}><Link to="/contact"><Translate
                                id="base.menu.contact">CONTACT</Translate></Link>
                            </li>
                            <li className={activeClass("/gallery") ? activeClass("/gallery") + status : null}><Link to="/gallery"><Translate
                                id="base.menu.gallery">GALLERY</Translate></Link>
                            </li>
                            <li className={activeClass("/music") ? activeClass("/music") + status : null}><Link to="/music"><Translate
                                id="base.menu.music">MUSIC</Translate></Link></li>
                            <li className={activeClass("/video") ? activeClass("/video") + status : null}><Link to="/video"><Translate
                                id="base.menu.video">VIDEO</Translate></Link></li>
                        </ul>
                        <ul className="news">
                            <li className={status}>
                                <Route path="/event/:eventId">
                                    <div className="news-item">
                                        <span className="date"><Translate
                                            id="base.news.news-item1.date">21 MAY</Translate></span>
                                        <span className="event"><Translate id="base.news.news-item1.event">MUSIC DAY KHARKIV</Translate></span>
                                    </div>
                                </Route>
                            </li>
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
                        </ul>
                    </header>
                ))}
            </Transition>
        )
    }
}

export default withLocalize(Header);