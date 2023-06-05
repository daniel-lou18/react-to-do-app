import Task from './Task'

const Tasks = ({ selectedProject }) => {
  if (!selectedProject) return

  return (
    <div className="todo-body tasks-container">
      {selectedProject.tasks.length > 0 && selectedProject.tasks.map((task, idx) => (
        <Task key={task.id} idx={idx} selectedProject={selectedProject} />
      ))}
    </div>
  )
}

export default Tasks;
