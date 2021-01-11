import React from 'react';
import './Timeline.css';
import pVelocity from '../../images/pvelocity1.png';


function TimelineLine() {
  return (
    <div className="timelineLine">
      <div className="timelineCirle"></div>
    </div>
  )
}

function TimelineTriangle() {
  return (
    <div className="timelineTriangle"></div>
  )
}


function TimelineLeft({ location, position, months, year }) {
  return (
    <div className="timelineItem left">
      <div className="timelineCard" >
        <div className="employmentContainer">
          <div className="location">
            {location}
          </div>
          <div className="position">
            {position}
          </div>
        </div>
        <div className="dateContainer">
          <span className="monthSpan">{months}</span>
          <span className="yearSpan">{year}</span>
        </div>
      </div>
      <TimelineTriangle />
      <TimelineLine />
    </div>
  )
}

function TimelineRight({ location, position, months, year }) {
  return (
    <div className="timelineItem right">
      <TimelineLine />
      <TimelineTriangle />
      <div className="timelineCard">
        <div className="dateContainer">
          <span className="monthSpan">{months}</span>
          <span className="yearSpan">{year}</span>
        </div>
        <div className="employmentContainer">
          <div className="location">
            {location}
          </div>
          <div className="position">
            {position}
          </div>
        </div>
      </div>
    </div>
  )
}

function Timeline() {
  return (
    <div className="timelineContainer">
      <div className="timelineItems">
        <div className="timelineLine timelineEnd" />
        <TimelineLeft
          location="PVelocity"
          position="QA/Implementation Engineer"
          months="May-Aug"
          year="2018"
        />
        <TimelineRight
          location="Bonfire"
          position="Full Stack Developer"
          months="Aug-Sept"
          year="2019"
        />
        <TimelineLeft
          location="Veeva"
          position="Front-End Developer"
          months="Jan-Apr"
          year="2020"
        />
        <TimelineRight
          location="BorgIQ"
          position="Software Engineer"
          months="Sept-Dec"
          year="2020"
        />
        <div className="timelineLine timelineEnd" />
      </div>
    </div>
  )
}

export default Timeline;
