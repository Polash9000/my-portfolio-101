import React from 'react';
import './Projects.css'
import Drone1 from './../../Images/Projects/Drone1.jpg';
import Drone2 from './../../Images/Projects/Drone2.jpg';
import Drone3 from './../../Images/Projects/Drone3.jpg';
import Tour1 from './../../Images/Projects/Tour1.jpg';
import Tour2 from './../../Images/Projects/Tour2.jpg';
import Tour3 from './../../Images/Projects/Tour3.jpg';
import Therapy1 from './../../Images/Projects/Therapy1.jpg';
import Therapy2 from './../../Images/Projects/Therapy2.jpg';
import Therapy3 from './../../Images/Projects/Therapy3.jpg';
import DoctorTeam1 from './../../Images/Projects/Doctor-team1.jpg';
import DoctorTeam2 from './../../Images/Projects/Doctor-team2.jpg';
import DoctorTeam3 from './../../Images/Projects/Doctor-team3.jpg';
import Language1 from './../../Images/Projects/Language1.jpg';
import Language2 from './../../Images/Projects/Language2.jpg';
import Language3 from './../../Images/Projects/Language3.jpg';
import Project from '../Project/Project';


const myProjects = [
    {
        id: 1,
        name: 'Drone Center',
        description: 'Developed an application with order options for drone lovers and showed various drones. Here authenticated admin panel is available & the admin can see orders in the admin dashboard. Also, add a new service which will be visible in the services & can make a new admin. Integrated firebase authentication with password sign-in.',
        technology: 'React.js, React Router, React-Bootstrap, MongoDB, React Router Hash Link, Firebase Authentication, Firebase Hosting, Heroku, MUI',
        website: 'https://drone-ec06d.web.app/',
        sourceCode: 'https://github.com/Polash9000/drones-center-website-client-side',
        img1: Drone1,
        img2: Drone2,
        img3: Drone3,
    },
    {
        id: 2,
        name: 'Tour Bot',
        description: '•	Developed an application with booking options for travel lovers and showed various tourist spots. Integrated firebase authentication with Google sign-in. Authenticated users can choose a place.',
        technology: 'React.js, React Router, React-Bootstrap, MongoDB, React Router Hash Link, Firebase Authentication, Firebase Hosting, Heroku, MUI',
        website: 'https://tourism-site-c0fa4.web.app/',
        sourceCode: 'https://github.com/Polash9000/tourism-website-client-side',
        img1: Tour1,
        img2: Tour2,
        img3: Tour3,
    },
    {
        id: 3,
        name: 'PR Therapy',
        description: 'Developed an application with order options for drone lovers and showed various drones. Here authenticated admin panel is available & the admin can see orders in the admin dashboard. Also, add a new service which will be visible in the services & can make a new admin. Integrated firebase authentication with password sign-in.',
        technology: 'React.js, React Router, React-Bootstrap, MongoDB, React Router Hash Link, Firebase Authentication, Firebase Hosting, Heroku, MUI',
        website: 'https://pr-therapy.web.app/',
        sourceCode: 'https://github.com/Polash9000/pr-therapy-center-website',
        img1: Therapy1,
        img2: Therapy2,
        img3: Therapy3,
    },
    {
        id: 4,
        name: 'Medical Team',
        description: 'This site will help us to get medical services. This site has included world-class famous doctors. This site is a Medical-related site. It helps you to get services.',
        technology: 'HTML, CSS, Bootstrap, Javascript, react js, netlify.',
        website: 'https://medical-team.netlify.app/',
        sourceCode: 'https://github.com/Polash9000/medical-team-website',
        img1: DoctorTeam1,
        img2: DoctorTeam2,
        img3: DoctorTeam3,
    },
    {
        id: 5,
        name: 'Language Fish',
        description: 'Developed an application with order options for drone lovers and showed various drones. Here authenticated admin panel is available & the admin can see orders in the admin dashboard. Also, add a new service which will be visible in the services & can make a new admin. Integrated firebase authentication with password sign-in.',
        technology: 'React, JSX, Bootstrap, React Router, Netlify.',
        website: 'https://language-fish-school.netlify.app/',
        sourceCode: 'https://language-fish-school.netlify.app/',
        img1: Language1,
        img2: Language2,
        img3: Language3,
    },
]

const Projects = () => {
    return (
        <div id="projects" className="container">
            <h3>My Projects</h3>
            <div class="container project-container">

                {
                    myProjects.map(myProject => <Project
                        key={myProject.id}
                        myProject={myProject}
                    ></Project>)
                }

            </div>
        </div>
    );
};

export default Projects;