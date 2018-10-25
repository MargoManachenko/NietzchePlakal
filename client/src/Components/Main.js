import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {withLocalize} from 'react-localize-redux';
import {renderToStaticMarkup} from "react-dom/server";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Video from '../Pages/Video';
import Music from '../Pages/Music';
import Gallery from '../Pages/Gallery';
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
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/video" component={Video}/>
                </Switch>
            </main>
        )
    }
}

export default withLocalize(Main);