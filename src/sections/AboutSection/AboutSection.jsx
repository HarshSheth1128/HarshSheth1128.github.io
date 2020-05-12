import React, { Component } from 'react';
import './AboutSection.css';
import '../../common/Section.css';
import InfoPaper from './InfoPaper/InfoPaper';


class AboutSection extends Component {
    state = {
        otherHobbies: [
            'UI/UX Enthusiast',
            'Video Game Player',
            'Coffee Enthusiast',
            'Basketball Fanatic',
            'Tech Nerd (especially Apple)',
            'Music Lover',
            'Comedy Lover',
            'Writer',
            'Reader'
        ]
    }
    render() {
        return (
            <div className="root">
                <div className="about-content">
                    <div className="infoContainer">
                        <div className="infoRoot">
                            <span id="aboveText">I am a</span>
                            <span className="bigText">Fullstack Developer</span>
                            <div className="otherInfo">
                                {
                                    this.state.otherHobbies.map(hobby => (
                                        <span className="hobby">{hobby}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="paperContainer">
                        <InfoPaper />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSection;