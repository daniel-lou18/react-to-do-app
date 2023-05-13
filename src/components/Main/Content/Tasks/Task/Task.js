import { useEffect, useState } from 'react';
import EditTaskModal from './EditTaskModal';

const Task = ({ allProjects, setAllProjects, selectedProject, setSelectedProject, idx }) => {
  const [isChecked, setisChecked] = useState(false);
  const task = selectedProject.tasks[idx];
  const color = task._priorityColor;
  const backgroundColor = task._priorityBackgroundColor;
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  return (
    <div className="task-wrapper">
      {!showEditTaskModal && (<div className="task">
        <input
          className="task-check"
          type="checkbox"
          id={task.id}
          checked={isChecked}
          onChange={() => setisChecked(!isChecked)}
        />
        <label className="task-label" htmlFor={task.id}>
          <span style={{borderColor: color, backgroundColor: backgroundColor}} className="custom-checkbox">
            <svg className="feather feather-check" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="square"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <span className="task-text">{task.taskName}</span>
        </label>
        <button className="btn-svg list-actions move move-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </button>
        <button className="btn-svg list-actions move move-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
        </button>
        <button className="btn-svg list-actions edit-task" onClick={() => setShowEditTaskModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="todo-header-edit pen feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button className="btn-svg list-actions del-task">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="todo-header-del trash feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
        <div className="description-container">
          <p className="task-descr">{task.descr}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div className="calendar-container">
          <svg className="task-calendar" style={{width:15, height:15}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
          </svg>
          <p className="task-calendar">19 oct</p>
        </div>
      </div>)}
      < EditTaskModal task={task} showEditTaskModal={showEditTaskModal} allProjects={allProjects} setAllProjects={setAllProjects}/>
    </div>
  )
}

export default Task;
