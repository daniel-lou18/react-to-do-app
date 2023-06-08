import { useProjectsContext } from "../../../../context/ProjectsContext"

const RemoveTaskBigBtn = ({ strikethroughCount }) => {
  const { setAllProjects, setShouldUpdate } = useProjectsContext();
  const style = strikethroughCount > 1 ? { opacity: 1 } : { opacity: 0};

  const delTasksHandler = () => {
    setAllProjects(projects => {
      const newProjects = [];
      projects.forEach(project => {
        const newTasks = project.tasks.filter(task => !task.strikethrough)
        project.tasks = newTasks;
        newProjects.push(project)
      })
      return newProjects
    })
  }

  return (
    <button className="btn-svg-header del-checked-task" onClick={delTasksHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span className="del-checked-task">Remove checked task<span style={style}>s</span></span>
    </button>
  )
}


export default RemoveTaskBigBtn;
