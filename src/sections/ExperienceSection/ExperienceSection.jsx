import React, { Component } from 'react';
import './ExperienceSection.css';
import '../../common/Section.css';
import SectionPicker from '../../common/SectionPicker';
import Bonfire from '../../images/bonfire.png';
import Veeva from '../../images/veeva.png';
import PVelocity from '../../images/pvelocity.png';


class ExperienceSection extends Component {
    state = {
        experiences: [
            {
                id: 0,
                icon: PVelocity,
                title: 'PVelocity',
                jobTitle: 'QA/Integrations Engineer',
                time: 'Summer 2017',
                hover: false
            },
            {
                id: 1,
                icon: Bonfire,
                title: 'Bonfire Interactive',
                jobTitle: 'Full Stack Developer',
                time: 'Summer 2018',
                hover: false
            },
            {
                id: 2,
                icon: Veeva,
                title: 'Veeva Systems',
                jobTitle: 'Front-End Developer',
                time: 'Winter 2019',
                hover: false
            }
        ]
    }


    toggleHover = (id) => {
        let newExperiences = this.state.experiences;
        newExperiences[id].hover = !newExperiences[id].hover;
        this.setState({
            experiences: newExperiences
        })
    }

    getClassName = (className, id) => {
        return (this.state.experiences[id].hover) ?
            `${className} hover` :
            className
    }

    renderContainerContent = (experience) => {
        if (!experience.hover) {
            return (
                <div className="contentContainer">
                    <div className="jobInfo">
                        <span className="jobTitle"><b>{experience.title}</b></span>
                        <span className="title"><b>{experience.jobTitle}</b></span>
                        <div className="jobTime"><span>{experience.time}</span></div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="contentContainer">
                    <span>View On LinkedIn</span>
                </div>
            )
        }
    }

    renderExperienceContent(title) {
        if (title === 'Bonfire Interactive') {
            return (
                <>
                    <p>Built a <b>serverless</b> Full Stack web application that connected Vendors
                        to new Buying opportunities using, <b>React, Node, SQL, Lambda, API-Gateway,
                        SNS, SQS, and Golang</b></p>
                    <p>Built the application from scratch in <b>3 months </b>
                        with a team of <b>5 developers</b> and generated over
                        <b> $4000 in revenue</b> in 2 weeks</p>
                    <p>Worked in the whole software cycle from inception
                        to market validation to design and finally deploying
                        an MVP</p>
                    <p>Personally developed a full-stack internal tool
                        that was used to categorize over <b>1000+ projects</b> and
                        increase the value proposition of the core product developed</p>

                </>
            )
        } else if (title === 'PVelocity') {
            return (
                <>
                    <p>Implemented a test harness written in <b>Node.js</b> and
                        <b> Html5</b> that aggregated and presented test data in
                        a way that allowed the user to analyze trends and
                        locate the source of quickly and effectively.</p>
                    <p>Reduced daily integration testing time by <b>1 hour</b> by
                        automating specific tasks that were formerly done
                        manually using <b>Node</b> scripts</p>
                    <p>Used a variety of proprietary tools to investigate
                        bugs, create issue reports, and delegate tasks to
                        the correct team member.</p>
                    <p>Automated nightly integration tests for a
                        CRM platform using Node.js</p>
                </>
            )
        } else {
            return (
                <p>I still work here, more info coming soon ;)</p>
            )
        }
    }

    render() {
        return (
            <div className="root">
                <div className="content">
                    <div className='textSection'>
                        <div className='experienceTextContainer'>
                            <div className='aboveTextDiv'>
                                <p>I've been blessed to work with many different people in life. All of them have provided me with invaluable</p>
                                <h1 id="experienceHeading">Experience</h1>
                            </div>
                        </div>
                    </div>
                    <div className='cardSection'>
                        <div className="cards">
                            {
                                this.state.experiences.map((experience) => (
                                    <>
                                        <div className="experienceContainer"
                                            onMouseEnter={() => this.toggleHover(experience.id)}
                                            onMouseLeave={() => this.toggleHover(experience.id)}>
                                            <div className="logo-info-container">
                                                <div className="logoContainer">
                                                    <img alt={experience.jobTitle} src={experience.icon}></img>
                                                </div>
                                                <div className={`${this.getClassName("employmentInfoContainer", experience.id)}`}>
                                                    {this.renderContainerContent(experience)}
                                                </div>
                                            </div>
                                            <div className="experienceContent">
                                                {this.renderExperienceContent(experience.title)}
                                            </div>
                                        </div>


                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ExperienceSection;