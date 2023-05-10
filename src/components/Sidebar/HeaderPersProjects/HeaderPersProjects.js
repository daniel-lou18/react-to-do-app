import React from 'react';

class HeaderPersProjects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="title-projects-container">
        <div className="title-projects-dummy"></div>
        <div className="title-projects-title title">Projets</div>
        <button className="btn-svg add title-projects-add">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus cross"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
    )
  }
}

export default HeaderPersProjects;
