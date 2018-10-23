import React from 'react';
import { Link} from 'react-router-dom';
import {Translate} from 'react-localize-redux'

const Sidebar = () => (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/" className="logo">NIETZSCHE<br/>PLAKAL</Link>
            </div>
            <div className="sidebar-menu">
                <Link to="/" className="menu"><Translate id="base.sidebar.sidebar-menu">MENU</Translate></Link>
            </div>
            <div className="social-media"></div>
        </div>
);

export default Sidebar;
