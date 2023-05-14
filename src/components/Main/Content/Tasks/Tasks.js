import Task from './Task'

const Tasks = ({ selectedProject, setSelectedProject }) => {
  if (!selectedProject) return

  return (
    <div className="todo-body tasks-container">
      {selectedProject.tasks.length > 0 && selectedProject.tasks.map((task, idx) => (
        <Task key={idx} idx={idx} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      ))}
    </div>
  )
}

export default Tasks;
