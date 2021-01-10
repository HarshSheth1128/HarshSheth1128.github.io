import React, { Component } from 'react';
import './SectionPicker.css';

class SectionPicker extends Component {
    state = {}
    getClassName = (sectionID) => {
        return (sectionID === this.props.page) ? "activeSection" : "";
    }

    getTop = () => `${(this.props.viewPage - 1) * 30}px`;


    render() {
        return (
            <>
                <div className="section-picker-wrapper">
                </div>
                <div className="section-picker-root">
                    <div className="section-container">
                        <p className={this.getClassName(1)} onClick={() => this.props.setViewPage(1)} >Home</p>
                        <p className={this.getClassName(2)} onClick={() => this.props.setViewPage(2)} >About</p>
                        {/* <p className={this.getClassName(3)} onClick={() => this.props.setViewPage(3)}>Projects</p> */}
                        <p className={this.getClassName(3)} onClick={() => this.props.setViewPage(3)}>Experience</p>
                    </div>
                    <div className="sliding-bar" style={{ top: this.getTop() }}></div>
                </div>
            </>
        );
    }
}

export default SectionPicker;
