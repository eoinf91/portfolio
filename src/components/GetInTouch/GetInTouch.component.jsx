import * as React from "react";
// import { Link } from 'gatsby';

import './GetInTouch.styles.scss';

const GetInTouch = () => (
    <div className="get-in-touch">
        <h1>
            Get in touch.
        </h1>
        <p className="large">
            Are you looking for a UX designer / Product Designer to join your team or just want to find out more about me?
        </p>
        <div className="links-container">
            {/* <Link to="/" className="cta">
                About me
            </Link> */}
            <a href="mailto:me@eoinfeely.com" className="cta filled">
                Contact me
            </a>
        </div>
    </div>
);

export default GetInTouch;