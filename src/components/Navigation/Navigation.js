import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: 'red'
      };

    return (
        <nav>
            <NavLink className='navLink' to='/home' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Home</NavLink>

            <NavLink className='navLink' to='/header/' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Header</NavLink>

            <NavLink className='navLink' to='/content/' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Content</NavLink>
              
            <NavLink className='navLink' to='/header/about' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>About Us</NavLink>
        </nav>
    );
};

export default Navigation;