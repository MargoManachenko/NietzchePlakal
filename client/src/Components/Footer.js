import React from 'react';
import {Link} from 'react-router-dom';
import {withLocalize, Translate} from 'react-localize-redux';
import LanguageToggle from  './LanguageToggle';

const Footer = (props) => (
    <footer>
        <LanguageToggle ChangeLang={props.ChangeLang}/>
        <div className="theme-block">
            <div className="theme">
                <a className={props.currentTheme === "dark" ? "active" : ""} name="dark"
                   onClick={props.ChangeTheme}><Translate id="base.footer.theme-dark">dark</Translate></a>
                <span className={props.currentTheme === "dark" ? "line active" : "line"}></span>
                <span className={props.currentTheme === "light" ? "line active" : "line"}></span>
                <a className={props.currentTheme === "light" ? "active" : ""} name="light"
                   onClick={props.ChangeTheme}><Translate id="base.footer.theme-light">light</Translate></a>
            </div>
        </div>
        <div className="question-block">
            <a href="" className="question"><Translate id="base.footer.naming">why did we choose this name?</Translate></a>
        </div>
    </footer>
);

export default withLocalize(Footer);

