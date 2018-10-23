import React from 'react';
import Base from '../Components/Base';

class Home extends React.Component{
    render(){
        return(
            <Base>
                <div className="main main-content">
                    <div className="logo-block">
                        <h1>Nietzsche Plakal</h1>
                        <h2 className="logo">MUSIC BAND</h2>
                    </div>
                </div>
            </Base>
        )
    };
}

export default Home;