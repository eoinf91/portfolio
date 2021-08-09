import React from 'react';
import { Link } from 'gatsby';

// Styles
import './CaseStudy.styles.scss';

const CaseStudyBTN = ({ projectTitle, projectSubtitle, projectSlug, projectImage }) => (
    <Link to="/" className="case-study-button">
        <div className="case-study-content">
            <h4>
                UX Case Study
            </h4>
            <div className="case-study-copy">
                <h3>
                    {projectTitle}
                </h3>
                <p>
                    {projectSubtitle}
                </p>
                <Link to={projectSlug} className="cta">
                    Read more
                </Link>
            </div>
        </div>
        <div className="case-study-feature">
            <div 
                className="background"
                style={{
                    backgroundImage: `url(${projectImage})`, 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
        </div>
    </Link>
)

export default CaseStudyBTN;