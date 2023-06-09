import { resetAndSelectProject } from "../../../../utils/helpers";
import { NavLink } from "react-router-dom";

const Inbox = ({ allProjects, setAllProjects, setSelectedProject }) => {
  const inbox = allProjects[0];

  const selectProjectHandler = id => {
    resetAndSelectProject(allProjects, id, setAllProjects);
    setSelectedProject(allProjects.find(project => project.selected));
  }

  return (
    <NavLink className="sidebar-project" to={`/projects/${inbox.id}`} onClick={() => selectProjectHandler(inbox.id)}>
      <li className="default-project inbox">
          <input
            className="sidebar-project"
            type="radio"
            name="project-option"
            id="sidebar-inbox"
            value={inbox.id}
            readOnly
            // onChange={selectProjectHandler}
            // checked={inbox.id === selectedProjectId}
          />
          <label className="sidebar-project project" htmlFor="sidebar-inbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
            </svg>
            <span className="inbox-title title">Inbox</span>
            <span className="inbox-count count">{inbox.tasks.length}</span>
          </label>
      </li>
    </NavLink>
  )
}

export default Inbox;
