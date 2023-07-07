import './index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

const app = (
    <div>
        <header>
        <h1>Olivia Reed&nbsp;- Web Designer</h1>
        <p>I am a web design student with knowledge in HTML5, CSS, Wordpress, and the Adobe Creative Cloud Suite. I also have a light, but growing knowledge of several other coding languages such as the MERN stack, MongoDB, Express.js, React.js, and Node.js, and JavaScript. I love web design, and getting to create fully-functional, usable, responsive, and beautiful websites for clients is my true passion.</p>
        <p>Find Me On <a href="https://www.linkedin.com/in/oliviagreed/">LinkedIn</a>!</p>
        <p>View My Work On <a href="https://github.com/Ogreed">GitHub</a>!</p>
        <img src={ require('./images/oliviaDigitalArtSketch.png') } alt="" />
        </header>

        <div class="main">
            <div class="projects">
                <h2>My Projects</h2>
                <img src={ require('./images/pleasureIslandWebsiteImg.jpg') } alt="website redesign for pleasure island" />
                <p>I redesigned this website for the Pleasure Island Chamber of Commerice as a class project. I employed the use of Bootstrap, CSS, HTML5, and I redesign their logo.</p>
                <img src={ require('./images/recipeManager.png') } alt="react recipe manager website" />
                <p>I used React to create this recipe Manager app as a class project.</p>
                <img src={ require('./images/tyrrellCountyWebsiteImg.jpg') } alt="website redesign done for tyrrell county" />
                <p>I redesigned this website for Tyrrell County as a class project. I employed the use of Bootstrap, CSS, HTML5, and I redesign their logo.</p>
            </div>

            <div class="skills">
                <h3>Skills</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>WordPress</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Adobe XD</li>
                    <li>Adobe Photoshop</li>
                    <li>Figma</li>
                </ul>
            </div>

            <div class="experience">
                <h4>My Experience</h4>
                <p>I have gained vital hands on experience while earning my associates degree at Wake Tech and having the oppurtunity to have worked on several in depth web and graphic design class projects, I have also done a few freelance graphic design projects, and I am now currently a web design intern, learning even more about web design on-the-job!</p>
            </div>
        </div>

        <footer>
            <h5>Olivia Reed - Web Designer</h5>
            <p>Find Me On <a href="https://www.linkedin.com/in/oliviagreed/">LinkedIn</a>!</p>
            <p>View My Work On <a href="https://github.com/Ogreed">GitHub</a>!</p>
        </footer>
    </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render (app);

export default app;