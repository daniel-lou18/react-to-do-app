import { useState, useEffect, useRef } from 'react';
import TaskName from './TaskName';
import TaskDescription from './TaskDescription';
import ProjectsList from './ProjectsList';
import PriorityList from './PriorityList';
import SaveTaskBtn from './SaveTaskBtn';
import { projectIcon, priorityNumToColor } from '../../../../../../utils/helpers';

const EditTaskModal = ({ idx, selectedProject, setShowEditTaskModal }) => {
  const task = selectedProject.tasks[idx]
  const [taskNameText, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.descr);
  const [projectSelection, setProjectSelection] = useState(selectedProject);
  const [showProjectsList, setShowProjectsList] = useState(false);
  const [btnIcon, setBtnIcon] = useState(projectIcon(selectedProject));
  const [prioritySelection, setPrioritySelection] = useState(task._priority);
  const [showPriorityList, setShowPriorityList] = useState(false);

  const refTaskModal = useRef();
  const refProjectBtn = useRef();
  const refPriorityBtn = useRef();

  useEffect(() => {
    const outsideClickHandler = e => {
      if (e.target.closest('.options-container')) return
      if (refTaskModal.current && !refTaskModal.current.contains(e.target)) setShowEditTaskModal(false)
    }
    document.addEventListener('click', outsideClickHandler)

    return () => document.removeEventListener('click', outsideClickHandler)

  });

  useEffect(() => {
    const outsideClickHandler = e => {
      if (refProjectBtn.current && !refProjectBtn.current.contains(e.target)) setShowProjectsList(false)
      if (refPriorityBtn.current && !refPriorityBtn.current.contains(e.target)) setShowPriorityList(false)
    }
    document.addEventListener('click', outsideClickHandler)

    return () => document.removeEventListener('click', outsideClickHandler)
  })

  useEffect(() => {
    setBtnIcon(projectIcon(projectSelection))
  }, [projectSelection])

  return (
    <form ref={refTaskModal} className="task-form modify" id="task-modify">
      <div className="form-main">
      <TaskName taskNameText={taskNameText} setTaskName={setTaskName} />
      <TaskDescription description={description} setDescription={setDescription} />
      <div className="form-params">
        <button type="button" className="form-date form-container">
        <svg className="form-date" style={{width:15, height:15}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
        </svg>
        <span className="form-date">19 oct</span>
        </button>
        <div ref={refProjectBtn} className="form-project-container form-container">
          <input
            type="checkbox"
            className="btn-form"
            name="btn-projects"
            id="btn-projects"
            checked={showProjectsList}
            onChange={() => {
              setShowProjectsList(!showProjectsList)
              setShowPriorityList(false)
            }}
          />
          <div className="btn-wrapper form-project">
              <label className="btn-projects" htmlFor="btn-projects">
                <div className="btn-pers-proj">
                  {btnIcon}
                  <span className="form-project">{projectSelection.capitalizedProjectName}</span>
                </div>
              </label>
          </div>
          {showProjectsList && <ProjectsList projectSelection={projectSelection} setProjectSelection={setProjectSelection} setShowProjectsList={setShowProjectsList}/>}
        </div>
        <div ref={refPriorityBtn} className="form-priority-container form-container">
          <input
            type="checkbox"
            className="btn-form"
            name="btn-priority"
            id="btn-priority"
            checked={showPriorityList}
            onChange={() => {
              setShowPriorityList(!showPriorityList)
              setShowProjectsList(false)
            }}
          />
          <div className="btn-wrapper form-priority">
            <label className="btn-priority" htmlFor="btn-priority">
              <div className="btn-priority">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={priorityNumToColor(prioritySelection)} stroke={priorityNumToColor(prioritySelection)} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="form-priority custom-color feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
                <span className="form-priority"></span>
              </div>
            </label>
          </div>
          {showPriorityList && <PriorityList prioritySelection={prioritySelection} setPrioritySelection={setPrioritySelection} setShowPriorityList={setShowPriorityList} />}
        </div>
      </div>
      </div>
      <div className="form-save">
      <button className="cancel-new-task" type="button">Annnuler</button>
      <SaveTaskBtn selectedProject={selectedProject} projectSelection={projectSelection} idx={idx} taskNameText={taskNameText} description={description} prioritySelection={prioritySelection} setShowEditTaskModal={setShowEditTaskModal} />
      </div>
        </form>
  )
}

export default EditTaskModal;
