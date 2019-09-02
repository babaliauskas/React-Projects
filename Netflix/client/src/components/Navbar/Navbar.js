import React from 'react';
import style from './navbar.css';
import { Link } from 'react-router-dom';
import logo from './215-2154144_transparent-background-netflix-logo.png';


const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <Link to='/' className={style.logo}><img src={logo} alt="" /></Link>
            <div className={style.menu}>
                <div className={style.dropdown}>
                    <button className={style.dropbtn}>Browse</button>
                    <div className={style.dropdown_content}>
                        <Link to='/'>Home</Link>
                        <Link to='/shows'>TV Shows</Link>
                        <Link to='/movies'>Movies</Link>
                        <Link to='/latest'>Latest</Link>
                        <Link to='/my-list'>My List</Link>
                    </div>
                </div>
                <div className={style.dropdown}>
                    <button className={style.dropbtn}>Dropdown</button>
                    <div className={style.dropdown_content}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
