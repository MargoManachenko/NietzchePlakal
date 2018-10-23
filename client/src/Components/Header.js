import React from 'react';
import {Route, Link} from 'react-router-dom';
import {withLocalize, Translate} from "react-localize-redux";
import globalTranslations from '../translations/global.json'

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.props.addTranslation(globalTranslations);

    }

    render() {
        return (
            <header>
                <ul className="header-menu">
                    <li className="active"><Link to="/"><Translate id="base.menu.home">HOME</Translate></Link></li>
                    <li><Link to="/about"><Translate id="base.menu.about">ABOUT</Translate></Link></li>
                    <li><Link to="/contact"><Translate id="base.menu.contact">CONTACT</Translate></Link></li>
                    <li><Link to="/gallery"><Translate id="base.menu.gallery">GALLERY</Translate></Link></li>
                    <li><Link to="/music"><Translate id="base.menu.music">MUSIC</Translate></Link></li>
                    <li><Link to="/video"><Translate id="base.menu.video">VIDEO</Translate></Link></li>
                </ul>
                <ul className="news">
                    <li>
                        <Route path="/event/:eventId">
                            <div className="news-item">
                                <span className="date">21 MAY</span>
                                <span className="event">MUSIC DAY KHARKIV</span>
                            </div>
                        </Route>
                    </li>
                    <li>
                        <Route path="/event/:eventId">
                            <div className="news-item">
                                <span className="date">5 MAY </span>
                                <span className="event">HILLEL KHARKIV</span>
                            </div>
                        </Route>
                    </li>
                    <li>
                        <Route path="/event/:eventId">
                            <div className="news-item">
                                <span className="date">26 APRIL</span>
                                <span className="event">BONGO BAR KHARKIV</span>
                            </div>
                        </Route>
                    </li>
                </ul>
            </header>
        )
    }
}

export default withLocalize(Header);