import { useProjectsContext } from "../../../../context/ProjectsContext"

const MoveTaskDownBtn = ({ selectedProject, idx }) => {
  const { setShouldUpdate } = useProjectsContext();

  const moveDownHandler = () => {
    if (idx >= selectedProject.tasks.length - 1) return
    selectedProject.tasks.splice(idx + 1, 0, ...selectedProject.tasks.splice(idx, 1));
    setShouldUpdate(true)
  }

  return (
    <button className="btn-svg list-actions move move-down" onClick={moveDownHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
    </button>
  )
}

export default MoveTaskDownBtn;
