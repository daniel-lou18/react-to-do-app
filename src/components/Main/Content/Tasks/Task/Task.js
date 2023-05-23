import { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import TaskNameMain from '../../../../UI-Elements/inputs/TaskNameMain/TaskNameMain';
import MoveTaskUpBtn from '../../../../UI-Elements/buttons/MoveTaskUpBtn/MoveTaskUpBtn';
import MoveTaskDownBtn from '../../../../UI-Elements/buttons/MoveTaskDownBtn';
import DelTaskBtn from '../../../../UI-Elements/buttons/DelTaskBtn';

const Task = ({ selectedProject, idx }) => {
  const [isChecked, setisChecked] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const task = selectedProject.tasks[idx];
  if (!task) return
  const color = task._priorityColor;
  const backgroundColor = task._priorityBackgroundColor;


  return (
    <div className="task-wrapper">
      {!showEditTaskModal && (<div className="task">
        <TaskNameMain task={task} isChecked={isChecked} setisChecked={setisChecked} color={color} backgroundColor={backgroundColor} />
        <MoveTaskUpBtn selectedProject={selectedProject} idx={idx} />
        <MoveTaskDownBtn selectedProject={selectedProject} idx={idx} />
        <button className="btn-svg list-actions edit-task" onClick={() => setShowEditTaskModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="todo-header-edit pen feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <DelTaskBtn selectedProject={selectedProject} idx={idx} />
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
      {showEditTaskModal && (<EditTaskModal idx={idx} showEditTaskModal={showEditTaskModal} setShowEditTaskModal={setShowEditTaskModal} selectedProject={selectedProject} />)}
    </div>
  )
}

export default Task;
