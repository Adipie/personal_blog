import React from 'react';
import profile from '../images/profile.jpg';
import SectionTitle from '../components/section_title';
import Skills from '../components/Skills';
import { aboutData } from './about-data';
import './About.css';

function About() {
    const subHeader = () => {
        return <p className="sub_header content">{ aboutData.subHeader }</p>
    }

    const paragraphs = () => {
        return Object.entries(aboutData).map(([key, value], i) => {
            if (key != "subHeader") {
                return <p className="content">{ value }</p>;
            }
        });
    }

    return <div className="about_content">
                <div id="left">
                    <img src={profile} alt="profile pic" id="profile_pic" />
                    <div className="skill_summary">
                        <SectionTitle top="summary of" bottom="skills" />   
                        <Skills />
                    </div>
                </div>
                <div id="right">
                    <SectionTitle top="personal & proffesional" bottom="background" /> 
                    { subHeader() }
                    { paragraphs()}
                </div>
        </div>
}

export default About;