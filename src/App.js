import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import AddTask from './components/modals/AddTask';
import { resetStrikethroughAllTasks } from './utils/helpers';
import { useState, useEffect } from 'react';
import { useProjectsContext } from './context/ProjectsContext';
import { CSSTransition } from 'react-transition-group';
import styles from './components/modals/AddTask/AddTask.module.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const { allProjects, shouldUpdate, setShouldUpdate } = useProjectsContext();
  const [selectedProject, setSelectedProject] = useState(allProjects.find(project => project.selected));
  const strikethroughCount = selectedProject.tasks.filter(task => task.strikethrough);

  useEffect(() => {
    setSelectedProject(allProjects.find(project => project.selected));
    setShouldUpdate(false);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
  }, [selectedProject, allProjects, shouldUpdate, setShouldUpdate]);

  useEffect(() => {
    resetStrikethroughAllTasks(allProjects)
  }, [selectedProject, allProjects])

  return (
    <>
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask} selectedProject={selectedProject} strikethroughCount={strikethroughCount}/>
      <Sidebar />
      <Main showAddTask={showAddTask} setShowAddTask={setShowAddTask} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      <CSSTransition
        in={showAddTask}
        timeout={{ enter: 500, exit: 300 }}
        classNames={{ ...styles }}
        unmountOnExit
        onEnter={() => setShowAddTask(true)}
        onExited={() => setShowAddTask(false)}
      >
        <AddTask showAddTask={showAddTask} setShowAddTask={setShowAddTask} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      </CSSTransition>
    </>
  );
}

export default App;
