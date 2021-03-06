import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {LocalizeProvider} from 'react-localize-redux';
import Main from './Components/Main';
import './style.css';
import './styles/_slick-theme.css';
import './styles/_slick.css';
import './fonts.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <LocalizeProvider>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </LocalizeProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
