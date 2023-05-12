import Task from './Task'

const Tasks = ({ allProjects, setAllProjects, selectedProject, setSelectedProject }) => {

  if (!selectedProject) return
  console.log(selectedProject.tasks)

  return (
    <div className="todo-body tasks-container">
      {selectedProject.tasks.length > 0 && selectedProject.tasks.map((task, idx) => (
        <Task key={idx} idx={idx} allProjects={allProjects} setAllProjects={setAllProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      ))}
    </div>
  )
}

export default Tasks;
