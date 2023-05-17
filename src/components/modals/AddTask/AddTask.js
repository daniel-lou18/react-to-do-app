import TaskName from '../../forms/inputs/TaskName';
import TaskDescription from '../../forms/inputs/TaskDescription/TaskDescription';
import ProjectChoiceBtn from '../../forms/buttons/ProjectChoiceBtn/ProjectChoiceBtn';
import { useState } from 'react';

const AddTask = ({ showAddTask, setShowAddTask, selectedProject, setSelectedProject }) => {
  const [taskNameText, setTaskName] = useState();
  const [description, setDescription] = useState();
  const [projectSelection, setProjectSelection] = useState(selectedProject);
  const [showProjectsList, setShowProjectsList] = useState(false);
  const [btnIcon, setBtnIcon] = useState();
  const [showPriorityList, setShowPriorityList] = useState(false);


  const closeModal = () => {
    setShowAddTask(false)
  }

  return (
    <div class="backdrop" onClick={closeModal}>
      <form className="task-form modal new-task" id="task-0" onClick={e => e.stopPropagation()}>
        <div className="form-main">
          <TaskName taskNameText={taskNameText} setTaskName={setTaskName}/>
          <TaskDescription description={description} setDescription={setDescription} />
          <div className="form-params">
            <button type="button" className="form-date form-container">
            <svg className="form-date" style={{width:15, height:15}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
            </svg>
            <span className="form-date">Échéance</span>
            </button>
            <div className="form-project-container form-container">
              <ProjectChoiceBtn showProjectsList={showProjectsList} setShowProjectsList={setShowProjectsList} showPriorityList={showPriorityList} setShowPriorityList={setShowPriorityList} projectSelection={projectSelection} btnIcon={btnIcon} />
              <div className="project-input options-container">
              <ul className="project-input list">
                <li className="project-input option inbox">
              <input className="project-option option" type="radio" name="project-option" data-id= "this.projects[0].id" id="inbox" value="inbox" checked />
              <label for="inbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                </svg>
                <span className="inbox-title">Inbox</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
              </label>
                </li>
              </ul>
              </div>
            </div>
            <div className="form-priority-container form-container">
            <input type="checkbox" className="btn-form" data-id="" name="btn-priority" id="btn-priority" />
            <div className="btn-wrapper form-priority">
              <label className="btn-priority" for="btn-priority">
            <div className="btn-priority">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="form-priority custom-color feather feather-flag">
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
          <button className="cancel-new-task cancel" type="button">Annnuler</button>
          <button className="save-new-task save">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
