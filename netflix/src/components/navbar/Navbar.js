import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/netflix.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className='nav-first'>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Tv Shows</Link>
                    <Link to='/'>Movies</Link>
                    <Link to='/'>Latest</Link>
                    <Link to='/'>My List</Link>
                </div>
                <div className='nav-second'>
                    <Link to='/'>Search</Link>
                    <Link to='/'>Kids</Link>
                    <Link to='/'>DVD</Link>
                    <Link to='/'>Bell</Link>
                    <Link to='/'>Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;