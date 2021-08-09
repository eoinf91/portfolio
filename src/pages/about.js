import * as React from "react"
import Nav from '../components/Nav/Nav.component';
import Status from '../components/Status/Status.component';
import GetInTouch from "../components/GetInTouch/GetInTouch.component";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "./about.styles.scss";

// markup
const AboutPage = () => {
    return (
        <main className="page about">
            <Nav />
            <Status />
            <div className="intro">
                <h1>
                    About Eoin.
                </h1>
                <div className="image" />
                <div className="content">
                    <p className="large upper green mb-10">
                        Professionally
                    </p>
                    <p className="med mb-10">
                        My professional journey began in 2013 when I graduated with a BA in Creative Digital Media and landed an internship with OLIVER Ireland. Taking on an internship role, it gave me the opportunity to gain the vital experience of working as part of a team and allowed me to grow to become a key team member for the on-site team at Bank of Ireland, AXA Insurance and Kerry Taste &amp; Nutrition.
                    </p>
                    <p className="med mb-10">
                        From this experience, I decided to take up an opportunity to freelance and take some time to travel around South America, Europe and parts of Africa. This journey allowed me to create memories while also focusing on growing both professionally and personally.
                    </p>
                    <p className="med">
                        Finally, I’m currently working as part of the Hogarth team based on-site with Facebook Gaming as the lead web designer where I get to bring my passion for curating experiences for users while also bringing innovation to our website.
                    </p>
                </div>
                <div className="content">
                    <p className="large upper green mb-10">
                        Outside of work
                    </p>
                    <p className="med">
                        I’m a lover of exploring new places and will always want to take an opportunity to visit new villages, towns or countries when I get the chance. I’m also a lover of baking and would regularly challenge myself to bake some interesting treats from breads to cakes. My final biggest passion is sport! I’ve played a large variety of sports but I always find myself reverting back to playing Cricket as my main hobby and would find a team no matter where I am in the world!
                    </p>
                </div>
            </div>
            <GetInTouch />
            <div className="page-border" />
            </main>
    )
  }
  
  export default AboutPage
  