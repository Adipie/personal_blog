import React from 'react';
import './Footer.css';
import { FaRegCopyright, FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return <div className="footer_container">
        <div className="footer_copyrights">
            <FaRegCopyright /> 
             Adi Piek 2020
        </div>
        <ul className="footer-links">
            <li><a className="social-media-icon" href="https://www.linkedin.com/in/adipiek" target="_blank"><FaLinkedin /></a></li>
            <li><a className="social-media-icon"href="https://github.com/Adipie" target="_blank"><FaGithubSquare /></a></li>
            <li><a className="social-media-icon"href="https://twitter.com/Adi_Pie_k" target="_blank"><FaTwitterSquare /></a></li>
        </ul>
    </div>

}

export default Footer;