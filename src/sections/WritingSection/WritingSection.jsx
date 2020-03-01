import React, { Component } from 'react';
import './WritingSection.css';
import '../../common/Section.css';
import SectionPicker from '../../common/SectionPicker';


class WritingSection extends Component {
    state = {}
    render() {
        return (
            <div className="root">
                <SectionPicker page={5} fullpageApi={this.props.fullpageApi} />
                <div className="content">
                </div>
            </div>
        );
    }
}

export default WritingSection;