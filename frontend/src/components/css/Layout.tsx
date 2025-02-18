// src/components/Layout.tsx

import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket, faTable, faUser, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

interface LayoutProps {
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="layout">
            {/* Sidebar */}
            <aside className="d-flex" id="wrapper" style={{ minHeight: "100vh" }}>
                <hr />
                <div className={`border-end bg-white ${isOpen ? "" : "d-none"}`} id="sidebar-wrapper">
                    <ul className="nav nav-pills flex-column">
                        <li className='nav-item'>
                            <Link to="/borrowitem" className={`nav-link ${location.pathname === '/borrowitem' ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={faTable} style={{ color: '#fefcff', paddingRight: 10 }} />ข้อมูลอุปกรณ์</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/approval" className={`nav-link ${location.pathname === '/approval' ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#fefcff', paddingRight: 10 }} />คำขอยืมอุปกรณ์</Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Page content wrapper */}
            <div id="page-content-wrapper" style={{ flexGrow: 1 }}>
                {/* Top navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" onClick={toggleSidebar}>Toggle Menu</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </nav>

                {/* Main Content */}
                <div className="content">
                    
                    <main className="content-main mt-2">{children}</main>
                </div>
            </div>
        </div>


    );
};

export default Layout;
