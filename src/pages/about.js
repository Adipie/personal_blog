import React from 'react';
import profile from '../images/profile.jpg'
import SectionTitle from '../components/section_title'
import './About.css'

function About() {
    return <div className="about_content">
                <div id="left">
                    <img src={profile} alt="profile pic" id="profile_pic" />
                    <div className="skill_summary">
                        <SectionTitle top="summary of" bottom="skills" />   
                    </div>
                </div>
                <div id="right">
                    <SectionTitle top="personal & proffesional" bottom="background" /> 
                    <p className="sub_header content">I'm Adi, a software engineer, mostly experienced in the web development area. In addition to my passion 
                    for technology and math I also raise two dogs and participate in various dog sports.</p>
                    <p className="content">Around the 8th grade I discovered my love for math and knew this will be my direction going forward. I started working in the tech industry after 
                        I graduated my studies of electrical engineering in 2013. My journey began at a small start up called "Matific" as a manual QA Engineer. During
                        my time there I learned a lot about development and architecture of web applications. I was developing automated tests in Java and selenium, learning html and css in the process.
                        By the time I left there I was a python developer, anlayzing data with pandas and managing my own machines on AWS.
                    </p>
                    <p></p>
                </div>
        </div>
}

export default About;