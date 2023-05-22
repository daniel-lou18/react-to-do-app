import Content from './Content';

const Main = ({ selectedProject, setSelectedProject, showAddTask, setShowAddTask }) => {
  return (
    <Content showAddTask={showAddTask} setShowAddTask={setShowAddTask} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
  )
}

export default Main;
