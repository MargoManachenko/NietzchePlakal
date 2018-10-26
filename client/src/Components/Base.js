import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
// import bacgr1x from '../background.jpg';
// import bacgr2x from '../background@2x.jpg';
// import bacgr3x from '../background@3x.jpg';
import '../style.css';

const path = process.env.PUBLIC_URL;
class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        };

        this.ChangeTheme = this.ChangeTheme.bind(this);
    };

    componentDidMount() {
        let LocalStorageTheme = localStorage.getItem('theme');
        let theme = LocalStorageTheme === null ? 'light' : LocalStorageTheme;
        this.setState({
                theme: theme
            }
        );
    }

    ChangeTheme(event){
        let newTheme = event.target.name;
        if(newTheme !== this.state.theme){
            this.setState({
                theme: newTheme
            });
            localStorage.setItem('theme',newTheme);
        }
    }

    render() {
        return (
            <div className={"wrapper " + this.state.theme}>
                <Sidebar/>
                <div className="content">
                    {/*<img src={bacgr1x} srcSet={`${bacgr2x}2x, ${bacgr3x} 3x`}*/}
                         {/*className="background"/>*/}
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