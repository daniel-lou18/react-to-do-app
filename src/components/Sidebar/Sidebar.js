import DefaultProjects from './DefaultProjects';
import HeaderPersProjects from './HeaderPersProjects';
import PersonalProjects from './PersonalProjects';
import { useProjectsContext } from '../../context/ProjectsContext';
import { useEffect, useState } from 'react';
import './Sidebar.css'

const Sidebar = ({ setSelectedProject }) => {
  const { allProjects, setAllProjects } = useProjectsContext();

  return (
    <div className="projects-container content-container">
      <DefaultProjects allProjects={allProjects} setAllProjects={setAllProjects} setSelectedProject={setSelectedProject} />
      <HeaderPersProjects />
      <PersonalProjects allProjects={allProjects} setAllProjects={setAllProjects} setSelectedProject={setSelectedProject} />
    </div>
  )
}


export default Sidebar;
