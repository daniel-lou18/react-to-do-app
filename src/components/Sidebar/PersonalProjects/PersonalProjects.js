import React, { useState, useEffect } from 'react';
import { useProjectsContext } from '../../../context/ProjectsContext';
import { resetAndSelectProject } from '../../../utils/helpers';


const PersonalProjects = () => {
  const { projects, setProjects } = useProjectsContext();
  const [selectedProjectId, setselectedProjectId] = useState();

  useEffect(() => {
    setselectedProjectId(projects.find(project => project.selected).id);
    console.log(projects)
  }, [projects])

  const selectProjectHandler = e => {
    setselectedProjectId(e.target.value)
    resetAndSelectProject(projects, e.target.value, setProjects);
  }

  return (
    <div className="personal-projects-container">
      <ul className="personal-projects-list"></ul>
      {projects.length > 0 && projects.map((project, index) => (
        <li key={project.id} className="sidebar-project sidebar-personal" data-id={project.id}>
          <input
            className="sidebar-project"
            data-id={project.id}
            type="radio"
            name="project-option"
            id={`sidebar-project-${index}`}
            value={project.id}
            onChange={selectProjectHandler}
            checked={project.id === selectedProjectId}
          />
          <label className="sidebar-project project" htmlFor={`sidebar-project-${index}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={project._color} stroke="none" className="feather feather-circle">
              <circle cx="12" cy="12" r="5"/>
            </svg>
            <span className="sidebar-project title">{project._projectName[0].toUpperCase()}{project._projectName.slice(1).toLowerCase()}</span>
            <span className="sidebar-project count">{project.tasks.length}</span>
          </label>
        </li>
      ))}
    </div>

  )
}



export default PersonalProjects;
