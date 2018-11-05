import React from 'react';
import {withLocalize} from 'react-localize-redux';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import logoAnimated from '../public/logo-animation.gif.mp4';
import '../style.css';

class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: '',
            lang: '',
            loading: true
        };

        this.preloaderRef = React.createRef();
        this.ChangeTheme = this.ChangeTheme.bind(this);
        this.ChangeLang = this.ChangeLang.bind(this);
    };

    componentDidMount() {
        let LocalStorageTheme = localStorage.getItem('theme');
        let theme = LocalStorageTheme === null ? 'light' : LocalStorageTheme;

        let langFromWindow  = window.lang;
        let lang = langFromWindow === undefined  ? 'en' : langFromWindow;

        let loadingFromWindow = window.loading;
        let loading = loadingFromWindow === undefined ? true : loadingFromWindow;

        this.setState({
                theme: theme,
                lang: lang,
                loading: loading
            }, () => {
                if (this.state.loading === true) {
                    window.loading = false;
                }
            }
        );

        this.preloaderRef.current.playbackRate = 3.0;
        setTimeout(() => this.setState({loading: false}), 3000);
    }

    ChangeLang(langCode) {
        console.log(langCode);
        window.lang = langCode;
        this.setState({
            lang: langCode
        })
    }

    ChangeTheme(event) {
        let newTheme = event.target.name;
        if (newTheme !== this.state.theme) {
            this.setState({
                theme: newTheme
            });
            localStorage.setItem('theme', newTheme);
        }
    }

    render() {
        if (this.state.loading === true) {
            return (<div className="wrapper preloading">
                <video className="preloader" ref={this.preloaderRef} muted  autoPlay>
                    <source src={logoAnimated}/>
                </video>
            </div>)
        }
        return (
            <div className={"wrapper " + this.state.theme + " " + this.state.lang}>
                <Sidebar/>
                <div className="content">
                    <Header/>
                    {this.props.children}
                    <Footer
                        ChangeTheme={this.ChangeTheme}
                        ChangeLang={this.ChangeLang}
                        currentTheme={this.state.theme}
                    />
                </div>
            </div>
        )
    };
}

export default withLocalize(Base);