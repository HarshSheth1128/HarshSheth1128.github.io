import React, { Component } from 'react';
import './ProjectsSection.css';
import '../../common/Section.css';
import Carousel from '../../common/Carousel/Carousel';



class ProjectsSection extends Component {
    state = {}
    render() {
        return (
            <div className="root">
                <div className="project-content">
                    <div className="title-container">
                        <div className="title-content">
                            <span id="projects-pre-title">A good developer is one who loves to create. Here are some of my</span>
                            <span id="projects-title">Projects</span>
                        </div>
                    </div>
                    <Carousel />
                </div>
            </div>
        );
    }
}

export default ProjectsSection;