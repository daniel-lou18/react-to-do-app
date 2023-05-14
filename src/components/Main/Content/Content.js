import { useState, useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import { useProjectsContext } from '../../../context/ProjectsContext';

const Content = () => {
  const { allProjects, setAllProjects } = useProjectsContext();
  const [selectedProject, setSelectedProject] = useState(allProjects.find(project => project.selected))

  useEffect(() => {
    setSelectedProject(allProjects.find(project => project.selected))
  }, [selectedProject, allProjects])

  return (
    <div className='todo-container content-container'>
      <Header allProjects={allProjects} setAllProjects={setAllProjects} />
      <Tasks selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  )
}

export default Content;
