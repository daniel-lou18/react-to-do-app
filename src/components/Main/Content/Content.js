import { useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import { useProjectsContext } from '../../../context/ProjectsContext';

const Content = ({ selectedProject, setSelectedProject, showAddTask, setShowAddTask }) => {
  const { allProjects, setAllProjects } = useProjectsContext();

  useEffect(() => {
    setSelectedProject(allProjects.find(project => project.selected))
  }, [selectedProject, setSelectedProject, allProjects])

  return (
    <div className='todo-container content-container'>
      <Header allProjects={allProjects} setAllProjects={setAllProjects} showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      <Tasks selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  )
}

export default Content;
