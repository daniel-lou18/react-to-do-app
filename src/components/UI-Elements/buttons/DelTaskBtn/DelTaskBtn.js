import { useProjectsContext } from "../../../../context/ProjectsContext"

const DelTaskBtn = ({selectedProject, idx}) => {
  const { allProjects, setShouldUpdate } = useProjectsContext();
  const delTaskHandler = () => {
    const project = allProjects.find(project => project.id === selectedProject.id);
    project.tasks.splice(idx, 1);
    setShouldUpdate(true)
  }
  return (
    <button className="btn-svg list-actions del-task" onClick={delTaskHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="todo-header-del trash feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
    </button>
  )
}

export default DelTaskBtn;
