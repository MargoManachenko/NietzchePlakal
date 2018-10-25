import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import '../style.css';

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