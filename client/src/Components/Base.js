import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import logoAnimated from '../public/logo-animation.gif.mp4';
import '../style.css';

const path = process.env.PUBLIC_URL;

class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: '',
            loading: true,
        };

        this.preloaderRef = React.createRef();
        this.ChangeTheme = this.ChangeTheme.bind(this);
    };

    componentDidMount() {

        let LocalStorageTheme = localStorage.getItem('theme');
        let theme = LocalStorageTheme === null ? 'light' : LocalStorageTheme;

        let loadingFromWindow = window.loading;
        let loading = loadingFromWindow === undefined ? true : loadingFromWindow;

        this.setState({
                theme: theme,
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

    ChangeTheme(event) {
        let newTheme = event.target.name;
        if (newTheme !== this.state.theme) {
            this.setState({
                theme: newTheme,
                loading: true
            });
            localStorage.setItem('theme', newTheme);

            setTimeout(() => this.setState({loading: false}), 9000);
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
            <div className={"wrapper " + this.state.theme}>
                <Sidebar/>
                <div className="content">
                    <Header/>
                    {this.props.children}
                    <Footer
                        onClick={this.ChangeTheme}
                        currentTheme={this.state.theme}
                    />
                </div>
            </div>
        )
    };
}

export default Base;