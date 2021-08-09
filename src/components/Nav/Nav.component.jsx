import React from 'react';
import { Link } from 'gatsby';

// Styles
import './Nav.styles.scss';

const Nav = () => (
    <nav className="nav">
        <Link to="/" className="name">
            Eoin Feely
        </Link>
        <div className="links">
            <Link to="/">
                My work
            </Link>
            <Link to="https://drive.google.com/file/d/1z2QzmGq1_9Sb_QSpvxXK-JZa7RgNiFqy/view?usp=sharing" target="_blank">
                My resume
            </Link>
            {/* <Link to="/">
                About
            </Link> */}
            <a href="mailto:me@eoinfeely.com">
                Contact
            </a>
        </div>
    </nav>
)

export default Nav;