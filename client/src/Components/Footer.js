import React from 'react';
import {Link} from 'react-router-dom';
import {withLocalize, setActiveLanguage} from 'react-localize-redux';
import LanguageToggle from  './LanguageToggle';

const Footer = (props) => (
    <footer>
        <LanguageToggle/>

        <div className="theme-block">
            <div className="theme">
                <a className={props.currentTheme === "dark" ? "active" : ""} name="dark"
                   onClick={props.onClick}>dark</a>
                <span className={props.currentTheme === "dark" ? "line active" : "line"}></span>
                <span className={props.currentTheme === "light" ? "line active" : "line"}></span>
                <a className={props.currentTheme === "light" ? "active" : ""} name="light"
                   onClick={props.onClick}>light</a>
            </div>
        </div>
        <div>
            <Link to="" className="question">why did we choose this name?</Link>
        </div>
    </footer>
);

export default withLocalize(Footer);

