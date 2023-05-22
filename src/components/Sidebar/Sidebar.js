import DefaultProjects from './DefaultProjects';
import HeaderPersProjects from './HeaderPersProjects';
import PersonalProjects from './PersonalProjects';
import { useProjectsContext } from '../../context/ProjectsContext';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const { allProjects, setAllProjects } = useProjectsContext();
  const [selectedProjectId, setSelectedProjectId] = useState();

  useEffect(() => {
    setSelectedProjectId(allProjects.find(project => project.selected).id);
  }, [selectedProjectId, allProjects])

  return (
    <div className="projects-container content-container">
      <DefaultProjects allProjects={allProjects} setAllProjects={setAllProjects} selectedProjectId={selectedProjectId} setSelectedProjectId={setSelectedProjectId} />
      <HeaderPersProjects />
      <PersonalProjects allProjects={allProjects} setAllProjects={setAllProjects} selectedProjectId={selectedProjectId} setSelectedProjectId={setSelectedProjectId} />
    </div>
  )
}


export default Sidebar;
