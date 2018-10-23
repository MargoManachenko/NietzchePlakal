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
                                <span className="date"><Translate id="base.news.news-item1.date">21 MAY</Translate></span>
                                <span className="event"><Translate id="base.news.news-item1.event">MUSIC DAY KHARKIV</Translate></span>
                            </div>
                        </Route>
                    </li>
                    <li>
                        <Route path="/event/:eventId">
                            <div className="news-item">
                                <span className="date"><Translate id="base.news.news-item2.date">5 MAY</Translate></span>
                                <span className="event"><Translate id="base.news.news-item2.date">HILLEL KHARKIV</Translate></span>
                            </div>
                        </Route>
                    </li>
                    <li>
                        <Route path="/event/:eventId">
                            <div className="news-item">
                                <span className="date"><Translate id="base.news.news-item3.date">26 APRIL</Translate></span>
                                <span className="event"><Translate id="base.news.news-item3.date">BONGO BAR KHARKIV</Translate></span>
                            </div>
                        </Route>
                    </li>
                </ul>
            </header>
        )
    }
}

export default withLocalize(Header);