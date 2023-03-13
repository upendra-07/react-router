import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <ul className="nav-links">
                <li>
                <Link to ='/' style={{textDecoration:'none'}}>Home</Link>
                </li>
                <li>
                <Link to ='/about'style={{textDecoration:'none'}}>About</Link>
                </li>
                <li>
                <Link to ='/contact'style={{textDecoration:'none'}}>Contact Us</Link>
                </li>
            </ul>
        </div>
    );
}


export default Navbar;