import { useState } from 'react';

const ProjectsList = ({ allProjects, setAllProjects }) => {

  return (
    <div className="project-input options-container">
      {allProjects.length > 0 && allProjects.map(project => (<ul className="project-input list">
        <li className="project-input option inbox">
          <input
            className="project-option option"
            type="radio"
            name="project-option"
            id="inbox"
            value={project.id}
            checked
          />
          <label htmlFor="inbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
            </svg>
            <span className="inbox-title">Inbox</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
          </label>
        </li>
      </ul>))}
    </div>
  )
}

export default ProjectsList;
