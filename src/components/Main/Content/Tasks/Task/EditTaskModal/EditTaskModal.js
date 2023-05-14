import { useState, useEffect } from 'react';
import ProjectsList from './ProjectsList';

const EditTaskModal = ({ idx, selectedProject, setSelectedProject }) => {
  const task = selectedProject.tasks[idx]
  const [taskNameText, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.descr);
  const [priorityLevel, setPriorityLevel] = useState(task._priorityColor);

  return (
    <form className="task-form modify" id="task-modify">
      <div className="form-main">
      <div className="form-text">
      <input
        className="form-text"
        type="text"
        name="task-text"
        id="task-modify"
        placeholder="Tâche"
        minLength="1"
        maxLength="60"
        value={taskNameText}
        onChange={e => setTaskName(e.target.value)}
      />
      </div>
      <div className="form-descr">
      <textarea
        className="form-descr"
        name="descr-1"
        id="descr-modify"
        cols="30"
        rows="4"
        placeholder="Description"
        maxLength="300"
        value={description}
        onChange={e => setDescription(e.target.value)}
      >
      </textarea>
      </div>
      <div className="form-params">
        <button type="button" className="form-date form-container">
        <svg className="form-date" style={{width:15, height:15}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
        </svg>
        <span className="form-date">19 oct</span>
        </button>
        <div className="form-project-container form-container">
          <input type="checkbox" className="btn-form" name="btn-projects" id="btn-projects" />
          <div className="btn-wrapper form-project">
              <label className="btn-projects" htmlFor="btn-projects">
                <div className="btn-pers-proj">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" className="list-dot feather feather-circle">
                    <circle cx="12" cy="12" r="5"/>
                  </svg>
                  <span className="form-project">Courses</span>
                </div>
              </label>
          </div>
          <ProjectsList selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        </div>
        <div className="form-priority-container form-container">
        <input type="checkbox" className="btn-form" name="btn-priority" id="btn-priority" />
        <div className="btn-wrapper form-priority">
          <label className="btn-priority" htmlFor="btn-priority">
            <div className="btn-priority">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="form-priority custom-color feather feather-flag">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
              <span className="form-priority"></span>
            </div>
          </label>
        </div>
        <div className="priority-input options-container">
        <ul className="priority-input list">
        </ul>
        </div>
        </div>
      </div>
      </div>
      <div className="form-save">
      <button className="cancel-new-task" type="button">Annnuler</button>
      <button className="save-new-task">Enregistrer</button>
      </div>
        </form>
  )
}

export default EditTaskModal;
