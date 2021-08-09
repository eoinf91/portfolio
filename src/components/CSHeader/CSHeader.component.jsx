import React from 'react';
import { Link } from 'gatsby';

import './CSHeader.styles.scss';

const CSHeader = ({ 
    pageTitle, 
    pageSubtitle, 
    pageCTA, 
    prototypeURL, 
    featuredImage, 
    bgColor 
}) => (
    <div class="cs-header" style={{ backgroundColor: `${bgColor}`, backgroundImage: `url(${featuredImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
        <div class="cs-header-content">
            <h1>
                { pageTitle }
            </h1>
            <p className="large">
                { pageSubtitle }
            </p>
            <Link to={ prototypeURL } class="cta" target="_blank">
                { pageCTA }
            </Link>
        </div>
    </div>
)

export default CSHeader;