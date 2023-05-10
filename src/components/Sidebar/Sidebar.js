import React from 'react';
import DefaultProjects from './DefaultProjects';
import HeaderPersProjects from './HeaderPersProjects';
import PersonalProjects from './PersonalProjects';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="projects-container content-container">
        <DefaultProjects />
        <HeaderPersProjects />
        <PersonalProjects />
      </div>
    )
  }
}

export default Sidebar;
