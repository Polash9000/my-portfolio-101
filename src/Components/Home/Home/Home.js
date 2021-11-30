import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Projects from '../../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;