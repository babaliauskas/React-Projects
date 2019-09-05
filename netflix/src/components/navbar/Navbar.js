import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/netflix.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className='nav-first'>
                    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                    <NavLink activeClassName='nav-active' exact to='/'>Home</NavLink>
                    <NavLink activeClassName='nav-active' to='/tv-shows'>Tv Shows</NavLink>
                    <NavLink activeClassName='nav-active' to='/movies'>Movies</NavLink>
                    <NavLink activeClassName='nav-active' to='/latest'>Latest</NavLink>
                    <NavLink activeClassName='nav-active' to='/my-list'>My List</NavLink>
                </div>
                <div className='nav-second'>
                    <NavLink activeClassName='nav-active' to='/search'>Search</NavLink>
                    <NavLink activeClassName='nav-active' to='/kids'>Kids</NavLink>
                    <NavLink activeClassName='nav-active' to='/dvd'>DVD</NavLink>
                    <NavLink activeClassName='nav-active' to='/notification'>Bell</NavLink>
                    <NavLink activeClassName='nav-active' to='/info'>Info</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;