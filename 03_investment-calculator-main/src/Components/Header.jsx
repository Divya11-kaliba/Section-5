import React from 'react';
import logo from '../assets/investment-calculator-logo.jpeg'

const Header = () => {
    return (
        <header id='header'>
            <img src={logo}  alt='money bad'></img>
            <h1>React Investment Calculator</h1>
        </header>
    );
};

export default Header;