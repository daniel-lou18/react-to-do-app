import { useProjectsContext } from "../../../../context/ProjectsContext"

const MoveTaskUpBtn = ({ selectedProject, idx }) => {
  const { setShouldUpdate, setAllProjects } = useProjectsContext();

  const moveUpHandler = () => {
    if (idx < 1) return
    selectedProject.tasks.splice(idx - 1, 0, ...selectedProject.tasks.splice(idx, 1));
    setAllProjects(projects => projects.map(project => {
        if (project.id === selectedProject.id) return selectedProject
        return project
      }))
    // setShouldUpdate(true)
  }

  return (
    <button className="btn-svg list-actions move move-up" onClick={moveUpHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
    </button>
  )
}

export default MoveTaskUpBtn;
