import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Blogs from '../../Blogs/Blogs';
import Projects from '../../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div id="home" className="bg-secondary">
            <Header></Header>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Blogs></Blogs>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;