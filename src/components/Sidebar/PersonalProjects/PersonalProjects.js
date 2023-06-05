import { resetAndSelectProject } from '../../../utils/helpers';
import { NavLink } from 'react-router-dom';


const PersonalProjects = ({ allProjects, setAllProjects, setSelectedProject }) => {
  const selectProjectHandler = id => {
    resetAndSelectProject(allProjects, id, setAllProjects);
    setSelectedProject(allProjects.find(project => project.selected));
  }

  const personalProjects = allProjects.slice(1)

  return (
    <div className="personal-projects-container">
      <ul className="personal-projects-list"></ul>
      {personalProjects.length > 0 && personalProjects.map((project, index) => (
        <NavLink className="sidebar-project" to={`projects/${project.id}`} onClick={() => selectProjectHandler(project.id)}>
          <li key={project.id} className="sidebar-project sidebar-personal" data-id={project.id}>
            <input
              className="sidebar-project"
              data-id={project.id}
              type="radio"
              name="project-option"
              id={`sidebar-project-${index}`}
              value={project.id}
              // onChange={selectProjectHandler}
              // checked={project.id === selectedProjectId}
            />
            <label className="sidebar-project project" htmlFor={`sidebar-project-${index}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={project._color} stroke="none" className="feather feather-circle">
                <circle cx="12" cy="12" r="5"/>
              </svg>
              <span className="sidebar-project title">{project._projectName[0].toUpperCase()}{project._projectName.slice(1).toLowerCase()}</span>
              <span className="sidebar-project count">{project.tasks.length}</span>
            </label>
          </li>
        </NavLink>
      ))}
    </div>

  )
}



export default PersonalProjects;
