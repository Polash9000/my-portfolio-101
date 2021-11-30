import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;