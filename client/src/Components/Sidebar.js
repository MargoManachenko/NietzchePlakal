import React from 'react';
import { Link} from 'react-router-dom';

const Sidebar = () => (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/" className="logo">NIETZSCHE<br/>PLAKAL</Link>
            </div>
            <div className="sidebar-menu">
                <Link to="/" className="menu">MENU</Link>
            </div>
            <div className="social-media"></div>
        </div>
);

export default Sidebar;
