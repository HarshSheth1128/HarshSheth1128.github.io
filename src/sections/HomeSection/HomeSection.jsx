import React, { Component } from 'react';
import './HomeSection.css';
import '../../common/Section.css';
import SectionPicker from '../../common/SectionPicker';


class HomeSection extends Component {
    state = {}
    render() {
        return (
            <div className="root">
                <div className="content">
                    <div className="icons">
                        <i id="githubButton" className="iconButton" class="iconButton fab fa-github-square"></i>
                        <i id="linkedInButton" className="iconButton" class="iconButton fab fa-linkedin"></i>
                        <i id="envelopeButton" className="iconButton" class="iconButton fas fa-envelope-square"></i>
                    </div>
                    <div className="textContainer">
                        <span id="aboveName">Hello world! My name is</span>
                        <span id="name">Harsh</span>
                        <span id="belowName">But I promise, that doesn't say anything about me</span>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSection;