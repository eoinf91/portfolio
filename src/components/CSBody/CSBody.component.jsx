import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import './CSBody.styles.scss';

const CSBody = ({ 
    pageTitle,
    pageCTA,
    prototypeURL,
    projectOverview,
    designTeam,
    duration,
    myRole01,
    myRole02,
    myRole03,
    myRole04,
    theProcess,
    uxResearch01,
    uxResearch02,
    iaImage,
    userFlows,
    wireframesImg01,
    wireframesImg02,
    wireframesImg03,
    wireframesImg04,
    wireframesImg05,
    finalDesign,
    clientFeedback,
    fontsUsed01,
    fontsUsed02,
    fontsUsed03,
    fontsUsed04,
    colorsUsed01,
    colorsUsed02,
    colorsUsed03,
    colorsUsed04,
    colorsUsed05,
 }) => (
    <div className="cs-body">
        <div className="cs-body-content">
            <div className="content">
                <h3>
                    Project overview
                </h3>
                <p className="med">
                    {projectOverview}
                </p>
            </div>
        </div>

        { myRole01 ? 
            <div className="cs-body-content">
                <div className="content">
                    <h3>
                        Introduction
                    </h3>
                    <div className="two-col">
                        <div className="col-small">
                            <div className="col-small-content mb-10">
                                <p className="med upper green">
                                    Client
                                </p>
                                <p className="med">
                                    {pageTitle}
                                </p>
                            </div>
                            <div class="col-small-content mb-10">
                                <p className="med upper green">
                                    Design Team
                                </p>
                                <p className="med">
                                    {designTeam}
                                </p>
                            </div>
                            <div class="col-small-content mb-10">
                                <p className="med upper green">
                                    Duration
                                </p>
                                <p className="med">
                                    {duration}
                                </p>
                            </div>
                        </div>
                        <div className="col-large">
                            <div className="col-large-content">
                                <p className=" med upper green">
                                    My role
                                </p>
                                <p className="med">
                                    <ul>
                                        <li>
                                            {myRole01}
                                        </li>
                                        <li>
                                            {myRole02}
                                        </li>
                                        <li>
                                            {myRole03}
                                        </li>
                                        <li>
                                            {myRole04}
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : null }

        {/* <div className="cs-body-content">
            <h3>
                The process
            </h3>
            <GatsbyImage image={theProcess} alt="TEST" />
        </div> */}

        { uxResearch01 ? 
            <div className="cs-body-content">
                <div className="section">
                    <h3>UX research</h3>
                    <p className="med mb-10">
                        {uxResearch01}
                    </p>
                    <p className="med">
                        {uxResearch02}
                    </p>
                </div>

                { iaImage ?
                    <div className="section mt-50">
                        <h3>
                            Information Architecture
                        </h3>
                        <GatsbyImage image={iaImage} alt="image" />
                        
                    </div>
                : null }

                { userFlows ? 
                    <div className="section">
                        <h3>
                            User flows
                        </h3>
                        <GatsbyImage image={userFlows} alt="image" />
                    </div>
                : null }

            </div>
        : null }

        { wireframesImg01 ? 
            <div className="cs-body-content">
                <div className="content">
                    <h3>
                        Wireframes
                    </h3>
                    <div className="three-col">
                        <div className="col image">
                            <GatsbyImage image={wireframesImg01} alt="TEST" />
                        </div>
                        <div className="col image">
                            <GatsbyImage image={wireframesImg02} alt="TEST" />
                        </div>
                        <div className="col image">
                            <GatsbyImage image={wireframesImg03} alt="TEST" />
                        </div>
                        <div className="col image">
                            <GatsbyImage image={wireframesImg04} alt="TEST" />
                        </div>
                        <div className="col image">
                            <GatsbyImage image={wireframesImg05} alt="TEST" />
                        </div>
                    </div>
                </div>
            </div>
        : null }

        {/* <div className="cs-body-content">
            <div className="content">
                <h3>
                    Client feedback
                </h3>
                <p className="med mb-10">
                    Due to client budgets, we were unable to conduct a full UX strategy on the project. Instead, I used my alternative solution to create a strong user centric experience by fully understanding the business goals and putting myself in the shoes of the user. Although this is not the best practice for any UX project, when the budget is tight, it is a good alternative.
                </p>
            </div>
        </div> */}

        { finalDesign ? 
            <div className="cs-body-content">
                <div className="content">
                    <h3>
                        Final design
                    </h3>
                    <GatsbyImage image={finalDesign} alt="TEST" className="final-image" />
                    <Link to={prototypeURL} className="cta" target="_blank">
                        {pageCTA}
                    </Link>

                    <div className="section mt-50">
                        <h3>
                            UI Library
                        </h3>
                        <div className="two-col mb-10">
                            <div className="col">
                                <p className="bold">
                                    Fonts used
                                </p>
                            </div>
                            <div className="col ta-right">
                                <p>
                                    {fontsUsed01}
                                </p>
                                <p>
                                    {fontsUsed02}
                                </p>
                                <p>
                                    {fontsUsed03}
                                </p>
                                {fontsUsed04 ?
                                    <p>
                                        {fontsUsed04}
                                    </p>
                                : null}
                            </div>
                        </div>
                        <div className="two-col mt-50">
                            <div className="col">
                                <p className="bold">
                                    Colours used
                                </p>
                            </div>
                            <div className="col ui-colours">
                                <div className="colour-block">
                                    <div 
                                        className="colour" 
                                        style={{ 
                                            backgroundColor: `${colorsUsed01}` 
                                        }} 
                                    />
                                    <p className="hex">
                                        {colorsUsed01}
                                    </p>
                                </div>
                                <div className="colour-block">
                                    <div 
                                        className="colour" 
                                        style={{ 
                                            backgroundColor: `${colorsUsed02}` 
                                        }} 
                                    />
                                    <p className="hex">
                                        {colorsUsed02}
                                    </p>
                                </div>
                                <div className="colour-block">
                                    <div 
                                        className="colour" 
                                        style={{ 
                                            backgroundColor: `${colorsUsed03}` 
                                        }} 
                                    />
                                    <p className="hex">
                                        {colorsUsed03}
                                    </p>
                                </div>
                                <div className="colour-block">
                                    <div 
                                        className="colour" 
                                        style={{ 
                                            backgroundColor: `${colorsUsed04}` 
                                        }} 
                                    />
                                    <p className="hex">
                                        {colorsUsed04}
                                    </p>
                                </div>
                                <div className="colour-block">
                                    <div 
                                        className="colour" 
                                        style={{ 
                                            backgroundColor: `${colorsUsed05}` 
                                        }} 
                                    />
                                    <p className="hex">
                                        {colorsUsed05}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : null }

    </div>
);

export default CSBody;