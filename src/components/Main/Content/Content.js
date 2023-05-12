import { useState, useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import { useProjectsContext } from '../../../context/ProjectsContext';

const Content = () => {
  const { allProjects, setAllProjects } = useProjectsContext();
  const [selectedProject, setSelectedProject] = useState();


  useEffect(() => {
    setSelectedProject(allProjects.find(project => project.selected));
    console.log(selectedProject)
  }, [selectedProject, allProjects])

  return (
    <div className='todo-container content-container'>
      <Header allProjects={allProjects} setAllProjects={setAllProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      <Tasks allProjects={allProjects} setAllProjects={setAllProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  )
}

export default Content;
