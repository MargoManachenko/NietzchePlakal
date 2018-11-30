import React from 'react';
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {withLocalize, Translate} from "react-localize-redux";
import {Transition} from 'react-transition-group';
import globalTranslations from '../translations/global.json';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            enteringStyle: null,
            currentStyle: null,
            loadingAnimation: true
        };

        this.props.addTranslation(globalTranslations);
        this.ChangePoint = this.ChangePoint.bind(this);
    }


    componentDidMount() {
        let prevPointFromWindow = window.prevPoint;
        let enteringStyle = {};
        if (prevPointFromWindow) {
            enteringStyle = prevPointFromWindow;
        }
        else {
            enteringStyle = this.GetEnteringStyle();
        }
        let loadingAnimationFromWindow = window.loadingAnimation;
        let loading = loadingAnimationFromWindow === undefined ? true : loadingAnimationFromWindow;

        this.ChangePoint();

        this.setState({
                enteringStyle: enteringStyle,
                loadingAnimation: loading
            }, () => {
                if (this.state.loading === true) {
                    window.loadingAnimation = false;
                }
            }
        );

        setTimeout(() => {
            this.setState({loadingAnimation: false});
            window.loadingAnimation = false
        }, 3000);
    }

    GetEnteringStyle() {
        const firstLink = document.getElementsByTagName("li")[0];
        const height = firstLink.getBoundingClientRect().height;
        const top = firstLink.getBoundingClientRect().top;

        let enteringStyle = {
            "marginLeft": "-0.5em",
            "left": "-10em",
            "top": top + "px",
            "height": height + "px"
        };
        console.log(enteringStyle);
        return enteringStyle;
    }


    ChangePoint() {
        setTimeout(()=>{
            const activeLink = document.getElementsByClassName("active")[0];
            const height = activeLink.getBoundingClientRect().height;
            const left = activeLink.getBoundingClientRect().left;
            const top = activeLink.getBoundingClientRect().top;

            let currentStyle = {
                "marginLeft": "-0.5em",
                "left": left + "px",
                "top": top + "px",
                "height": height + "px"
            };

            window.prevPoint = currentStyle;

            this.setState({
                currentStyle: currentStyle
            }, () => console.log('current style ', this.state.currentStyle));
        } , 100)
    }

    render() {
        const activeClass = (route) => {
            return window.location.pathname === route ? "active " : null;
        };

        return (
            <header>
                <Transition timeout={100} in={true} appear>
                    {(status => (
                        <ul className="header-menu">
                            <li className={activeClass("/") ? activeClass("/") + status : null}
                                onClick={this.ChangePoint}><Link to="/" id="0"><Translate
                                id="base.menu.home">HOME</Translate></Link>
                            </li>
                            <li className={activeClass("/about") ? activeClass("/about") + status : null}
                                onClick={this.ChangePoint}><Link id="1"
                                                                 to="/about"><Translate
                                id="base.menu.about">ABOUT</Translate></Link></li>
                            <li className={activeClass("/contact") ? activeClass("/contact") + status : null}
                                onClick={this.ChangePoint}><Link id="2"
                                                                 to="/contact"><Translate
                                id="base.menu.contact">CONTACT</Translate></Link>
                            </li>
                            <li className={activeClass("/gallery") ? activeClass("/gallery") + status : null}
                                onClick={this.ChangePoint}><Link id="3"
                                                                 to="/gallery"><Translate
                                id="base.menu.gallery">GALLERY</Translate></Link>
                            </li>
                            <li className={activeClass("/music") ? activeClass("/music") + status : null}
                                onClick={this.ChangePoint}><Link id="4"
                                                                 to="/music"><Translate
                                id="base.menu.music">MUSIC</Translate></Link></li>
                            <li className={activeClass("/video") ? activeClass("/video") + status : null}
                                onClick={this.ChangePoint}><Link id="5"
                                                                 to="/video"><Translate
                                id="base.menu.video">VIDEO</Translate></Link></li>
                            <span className={"underline " + status}
                                  style={status === "entering" ? this.state.enteringStyle : this.state.currentStyle}/>
                        </ul>

                    ))}
                </Transition>
                <Transition timeout={100} in={this.state.loadingAnimation} appear>
                    {(status => (
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
                    ))}
                </Transition>
            </header>
        )
    }
}

export default withRouter(withLocalize(Header));