import { useState, useEffect } from 'react';
import Header from './Header';
import { useProjectsContext } from '../../../context/ProjectsContext';

const Content = () => {
  const { allProjects, setAllProjects } = useProjectsContext();
  const [selectedProjectId, setSelectedProjectId] = useState();
  const [projectName, setProjectName] = useState(allProjects.find(project => project.selected).capitalizedProjectName)


  useEffect(() => {
    setSelectedProjectId(allProjects.find(project => project.selected).id);
    console.log(selectedProjectId)
    console.log(allProjects)
  }, [selectedProjectId, allProjects])

  return (
    <div className='todo-container content-container'>
      <Header allProjects={allProjects} setAllProjects={setAllProjects} selectedProjectId={selectedProjectId} setSelectedProjectId={setSelectedProjectId} projectName={projectName} setProjectName={setProjectName} />
    </div>
  )
}

export default Content;
