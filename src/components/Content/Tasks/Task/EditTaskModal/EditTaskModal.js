import { useState, useEffect, useRef } from 'react';
import TaskName from './TaskName';
import TaskDescription from './TaskDescription';
import DueDate from '../../../../UI-Elements/buttons/DueDate';
import DueTime from '../../../../UI-Elements/buttons/DueTime';
import ProjectsList from './ProjectsList';
import PriorityList from './PriorityList';
import SaveTaskBtn from '../../../../UI-Elements/buttons/SaveTaskBtn/SaveTaskBtn';
import { projectIcon, priorityNumToColor } from '../../../../../utils/helpers';
import { useProjectsContext } from '../../../../../context/ProjectsContext';
import Task from '../../../../../data/JSClasses/Task';

const EditTaskModal = ({ idx, selectedProject, setShowEditTaskModal }) => {
  const { allProjects, setShouldUpdate } = useProjectsContext();
  const task = selectedProject.tasks[idx]
  const [taskNameText, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.descr);
  const [projectSelection, setProjectSelection] = useState(selectedProject);
  const [showProjectsList, setShowProjectsList] = useState(false);
  const [btnIcon, setBtnIcon] = useState(projectIcon(selectedProject));
  const [prioritySelection, setPrioritySelection] = useState(task._priority);
  const [showPriorityList, setShowPriorityList] = useState(false);
  const [startDate, setStartDate] = useState(task.dueDate);


  const refTaskModal = useRef();
  const refProjectBtn = useRef();
  const refPriorityBtn = useRef();

  useEffect(() => {
    const outsideClickHandler = e => {
      if (e.target.closest('.options-container') || e.target.closest(`button.edit-task#${task.id}`) || e.target.closest('.react-datepicker-popper')) return
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

  const saveTaskHandler = e => {
    e.preventDefault();
    if (selectedProject.id === projectSelection.id) {
      const project = allProjects.find(project => project.id === selectedProject.id);
      project.tasks[idx] = new Task(taskNameText, description, startDate, project.projectName, prioritySelection)
      setShowEditTaskModal(false)
    } else {
      const prevProject = allProjects.find(project => project.id === selectedProject.id);
      const currProject = allProjects.find(project => project.id === projectSelection.id);
      prevProject.tasks.splice(idx, 1);
      currProject.tasks.push(new Task(taskNameText, description, startDate, currProject.projectName, prioritySelection));
      setShowEditTaskModal(false);
      setShouldUpdate(true);
    }
  }

  return (
    <form ref={refTaskModal} className="task-form modify" id="task-modify" onSubmit={saveTaskHandler}>
      <div className="form-main">
      <TaskName taskNameText={taskNameText} setTaskName={setTaskName} />
      <TaskDescription description={description} setDescription={setDescription} />
      <div className="form-params">
        <DueDate startDate={startDate} setStartDate={setStartDate} />
        <DueTime startDate={startDate} setStartDate={setStartDate} />
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
        <button className="cancel-new-task" type="button" onClick={() => setShowEditTaskModal(false)}>Annnuler</button>
        <SaveTaskBtn />
      </div>
        </form>
  )
}

export default EditTaskModal;

// saveTaskBtn { selectedProject, projectSelection, idx, taskNameText, description, startDate, prioritySelection, setShowEditTaskModal }
