import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'

const Navbar = () =>{
var a = 'something';
    return(
        <header>
            <nav>
                <ul>
                    <li><Link className={window.location.pathname == "/" ? "nav-active" : ""} to={'/'}>
                        Home</Link></li>
                    <li><Link className={window.location.pathname == "/about-us" ? "nav-active" : ""} to={'/about-us'}>
                        About Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;