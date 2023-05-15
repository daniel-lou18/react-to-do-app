import { useProjectsContext } from '../../../../../../../context/ProjectsContext';
import { projectIcon } from '../../../../../../../utils/helpers';

const ProjectsList = ({ projectSelection, setProjectSelection, setShowProjectsList }) => {
  const { allProjects, setAllProjects } = useProjectsContext();

  const selectProjectHandler = e => {
    const id = e.target.value;
    const selectedProject = allProjects.find(project => project.id === id);
    console.log(selectedProject)
    setProjectSelection(selectedProject);
    setShowProjectsList(false);
  }

  return (
    <div className="project-input options-container">
      <ul className="project-input list">
      {allProjects.length > 0 && allProjects.map(project => {
        const icon = projectIcon(project)
        return (
        <li key={project.id} className="project-input option inbox"
        >
          <input
            className="project-option option"
            type="radio"
            name="project-option"
            id={project.id}
            value={project.id}
            checked={project.id === projectSelection.id}
            onChange={selectProjectHandler}
            onClick={() => setShowProjectsList(false)}
          />
          <label htmlFor={project.id}>
            {icon}
            <span className="inbox-title">{project.capitalizedProjectName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
          </label>
        </li>
      )})}
      </ul>
    </div>
  )
}

export default ProjectsList;
