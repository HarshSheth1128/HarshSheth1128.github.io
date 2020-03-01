import React, { Component } from 'react';
import './InfoPaper.css';
import Express from '../../../images/express.png';
import ReactIcon from '../../../images/react.png';
import Storybook from '../../../images/storybook.png';
import MySQL from '../../../images/mysql.png';
import Mongo from '../../../images/mongo.png';
import Figma from '../../../images/figma.png';
import Stripe from '../../../images/stripe.png';
import Golang from '../../../images/golang.png';
import GraphQL from '../../../images/graphql.png';
import AWS from '../../../images/aws.png';
import Hapi from '../../../images/hapi.png';
import Python from '../../../images/python.png';
import JS from '../../../images/javascript.png';
import CSS from '../../../images/css.png';
import HTML from '../../../images/html.png';
import Bash from '../../../images/bash.png';
import Resume from '../../../assets/3A_Resume.pdf';
const moment = require('moment');
moment().format();

class InfoPaper extends Component {
    state = {
        displaySection: 'about',
        buttonClasses: ["profileButton", "profileButton selected"],
        technologies: [
            { title: 'express.js', icon: Express },
            { title: 'react', icon: ReactIcon },
            { title: 'storybook.js', icon: Storybook },
            { title: 'mysql', icon: MySQL },
            { title: 'mongodb', icon: Mongo },
            { title: 'figma', icon: Figma },
            { title: 'stripe', icon: Stripe },
            { title: 'golang', icon: Golang },
            { title: 'graphql', icon: GraphQL },
            { title: 'aws', icon: AWS },
            { title: 'hapi', icon: Hapi },
        ],
        languages: [
            { title: 'javascript', icon: JS },
            { title: 'html', icon: HTML },
            { title: 'css', icon: CSS },
            { title: 'python', icon: Python },
            { title: 'bash', icon: Bash }
        ]
    }

    getDisplaySection = (section) => {
        return (this.state.displaySection === section) ?
            this.state.buttonClasses[1] :
            this.state.buttonClasses[0];
    }

    renderPhilosophy = () => {
        return (
            <div id="profileContent">
                <p>My belief is that well designed user interfaces empower users to get more things done.</p>
                <p>A well designed user interface should be:</p>
                <p><span className="bigParaText"><b>Simple:</b></span> The UI/UX should not be to cluttered, high density of information reduces a human beings ability to think creatively</p>
                <p><span className="bigParaText"><b>Productive:</b></span> The UX/UI should allow the user to do the most in the least amount of time. Efficiency should be measured as a ratio of potential action time (a ui designed to do exactly that one task) to actual action time (how that action integrates into a UI with multiple actions).</p>
                <p><span className="bigParaText"><b>Intuitive:</b></span> A good user interface requires minimal explanation. The UI should act as its own guide.</p>
            </div>
        )
    }

    renderTechnologies = () => {
        return (
            <div id="profileContent">
                <p>Here are technologies/tools/integrations/languges that I have experience in:</p>
                <div className="technologiesContainer">
                    {this.state.technologies.map((technologies) => (
                        <div className="iconContainer">
                            <img className="technologyIcon" alt={technologies.title} src={technologies.icon} />
                        </div>
                    ))}
                </div>
                <p>Here are the languages I am fluent in:</p>
                <div className="languagesContainer">
                    {this.state.languages.map((technologies) => (
                        <div className="iconContainer">
                            <img className="technologyIcon" alt={technologies.title} src={technologies.icon} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    renderAbout = () => (
        <div id="profileContent">
            <p><b>Welcome to my little corner of the internet!</b></p>
            <p>{`I'm Harsh, I am ${moment("19991128", "YYYYMMDD").fromNow(true)} old`} and I grew up with computers. I started on an old Windows 95
                desktop (with a floppy drive!) and currently use my masterfully engineered Macbook Pro. I love to blow tons
                of money on technological toys that I have no need for. (so please employ me and fund my addiction) </p>
            <p>Growing up with beautiful and terrible software sparked a desire in me to create things myself. (the beautiful kind) I love the web because it's a community of developers working together to create a democratized digital world.</p>
            <p>I am a jovial and enthusiastic developer who thinks of problems as being cool challenges to engineer rather than roadblocks.</p>
            <p>Coding is my passion, I love to share, discuss, read, and most importantly write beautiful, articulate, and concise code.</p>
        </div>
    )

    renderContent = () => {
        if (this.state.displaySection === 'philosophy') {
            return this.renderPhilosophy();
        } else if (this.state.displaySection === 'technical') {
            return this.renderTechnologies();
        } else if (this.state.displaySection === 'about') {
            return this.renderAbout();
        }
    }

    render() {
        return (
            <div id="paperRoot">
                <div id="profileCircleOuter" />
                <div id="profileCircleInner" />
                <div id="profileWrapper">
                    <div id="profileButtons">
                        <div className="stack">
                            <button
                                className={this.getDisplaySection('about')}
                                onClick={() => this.setState({ displaySection: 'about' })}>
                                About
                            </button>
                            <button
                                className={this.getDisplaySection('resume')}>
                                <a href={Resume}>Resume <i class="fas fa-external-link-alt"></i></a>
                            </button>
                        </div>
                        <div className="stack">
                            <button
                                className={this.getDisplaySection('technical')}
                                onClick={() => this.setState({ displaySection: 'technical' })}>
                                Technical
                            </button>
                            <button
                                className={this.getDisplaySection('philosophy')}
                                onClick={() => this.setState({ displaySection: 'philosophy' })}>
                                Philosophy
                            </button>
                        </div>


                    </div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default InfoPaper;