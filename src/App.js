import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import AddTask from './components/modals/AddTask';
import { useState, useEffect } from 'react';
import { useProjectsContext } from './context/ProjectsContext';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const { allProjects, shouldUpdate, setShouldUpdate } = useProjectsContext();
  const [selectedProject, setSelectedProject] = useState(allProjects.find(project => project.selected))

  useEffect(() => {
    setSelectedProject(allProjects.find(project => project.selected));
    setShouldUpdate(false);
  }, [selectedProject, allProjects, shouldUpdate, setShouldUpdate])

  return (
    <>
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      <Sidebar />
      <Main showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      {showAddTask && <AddTask showAddTask={showAddTask} setShowAddTask={setShowAddTask} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />}
    </>
  );
}

export default App;
