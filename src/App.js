import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
import SectionPicker from './common/SectionPicker';

function App() {
  const [viewPage, setViewPage] = useState(1);



  return (
    <div className="App">
      <SectionPicker page={viewPage} viewPage={viewPage} setViewPage={setViewPage} />

      <ReactFullpage
        scrollingSpeed={1000}
        onLeave={(origin, destination) => {
          setViewPage(destination.index + 1);
        }}
        render={({ state, fullpageApi }) => {
          if (fullpageApi) fullpageApi.moveTo(viewPage);

          return (
            <ReactFullpage.Wrapper>
              <div id="section1" className="section">
                <HomeSection fullpageApi={fullpageApi} />
              </div>
              <div id="section2" className="section">
                <AboutSection fullpageApi={fullpageApi} />
              </div>
              {/* <div id="section3" className="section">
                <ProjectsSection fullpageApi={fullpageApi} />
              </div> */}
              <div id="section4" className="section">
                <ExperienceSection fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
