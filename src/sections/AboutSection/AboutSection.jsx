import React, { Component } from 'react';
import './AboutSection.css';
import '../../common/Section.css';
import InfoPaper from './InfoPaper/InfoPaper';
import meTwo from '../../images/me_2.png'
import Resume from '../../assets/Resume_4A.pdf';
const moment = require('moment');
moment().format();


class AboutSection extends Component {
    state = {
        otherHobbies: [
            'UI/UX Obsessed',
            'A Gamer',
            'Coffee Enthusiast',
            'Basketball Fanatic',
            'Tech Nerd (especially Apple)',
            'Music Lover',
            'Comedy Lover',
            'Avid Reader',
            'Writer',
            'Test'
        ]
    }
    render() {
        return (
            <div className="root">
                <div className="about-content">
                    <div className="leftContent">
                        <div className="contentDiv">
                            <span>I am a </span>
                            <span className="softwareHeading">Software Engineer</span>
                            <div className="profileContent">
                                <p><b>Welcome to my little corner of the internet!</b></p>
                                <p>{`I'm Harsh, I am ${moment("19991128", "YYYYMMDD").fromNow(true)} old`} and I grew up with computers. I started on an old Windows 95
                desktop (with a floppy drive!) and currently use my masterfully engineered Macbook Pro. I love to blow tons
                of money on technological toys that I have no need for. (so please employ me and fund my addiction) </p>
                                <p>Growing up with beautiful and terrible software sparked a desire in me to create things myself. (the beautiful kind) I love the web because it's a community of developers working together to create a democratized digital world.</p>
                                <p>I am a jovial and enthusiastic developer who thinks of problems as being cool challenges to engineer rather than roadblocks.</p>
                                <p>Coding is my passion, I love to share, discuss, read, and most importantly write beautiful, articulate, and concise code.</p>
                            </div>
                        </div>
                        <button className="resumeButton"><a href={Resume}>Resume <i class="fas fa-external-link-alt"></i></a></button>
                    </div>
                    <div className="rightContent">
                        <div className="imageGlass"></div>
                        <img className="profileImage" alt="" src={meTwo} height={'500'}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSection;
