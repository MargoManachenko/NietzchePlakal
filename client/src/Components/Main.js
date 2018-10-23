import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {withLocalize} from 'react-localize-redux';
import {LocalizeProvider} from 'react-localize-redux';
import LanguageToggle from  './LanguageToggle';
import {renderToStaticMarkup} from "react-dom/server";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import globalTranslations from '../translations/global.json';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                {name: "EN", code: "en"},
                {name: "RU", code: "ru"},
                {name: "UA", code: "ua"}
            ],
            translation: globalTranslations,
            options: {renderToStaticMarkup}
        });


    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </main>
        )
    }
}

export default withLocalize(Main);