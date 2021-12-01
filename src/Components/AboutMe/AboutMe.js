import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import profile from './../../Images/Profile/profile.png'

const AboutMe = () => {
    return (
        <div id="aboutMe" class="container mt-4 card mb-3 bg-secondary">
            <h4 class="card-title">About me</h4>
            <div class="row g-0 mt-3">
                <div class="col-md-6 p-5">
                    <div class="card-body">
                        <h6 class="card-title">Hello I'm</h6>
                        <h4 class="card-title">Abu Bakkar Siddique</h4>
                        <p class="card-text">I'm a Frontend Web Developer. My honesty, hard work, patience, and sufficient confidence are helping to gain any objective and face any challenge. I have experience creating front-end website components and full-stack website components. I am experienced using Front end, back-end, and server-side language and technologies and using Databases to make any responsive, user-friendly website. I confidently handle and organize any project.</p>
                        <br />
                        <a href="https://www.linkedin.com/in/abu-bakkar-siddique-007752181/" target="blank"><FaLinkedin style={{ width: '50px', height: '40px' }} /></a>
                        <a href="https://github.com/Polash9000" target="blank"><FaGithubSquare style={{ width: '50px', height: '40px' }} /></a>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={profile} width="400px" class="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;