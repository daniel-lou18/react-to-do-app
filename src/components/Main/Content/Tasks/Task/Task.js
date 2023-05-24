import { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import TaskNameMain from '../../../../UI-Elements/inputs/TaskNameMain/TaskNameMain';
import MoveTaskUpBtn from '../../../../UI-Elements/buttons/MoveTaskUpBtn/MoveTaskUpBtn';
import MoveTaskDownBtn from '../../../../UI-Elements/buttons/MoveTaskDownBtn';
import DelTaskBtn from '../../../../UI-Elements/buttons/DelTaskBtn';
import TaskDateTime from './TaskDateTime/TaskDateTime';

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
        <button className="btn-svg list-actions edit-task" id={task.id} onClick={() => setShowEditTaskModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="todo-header-edit pen feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <DelTaskBtn selectedProject={selectedProject} idx={idx} />
        <div className="description-container">
          <p className="task-descr">{task.descr}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <TaskDateTime task={task} />
      </div>)}
      {showEditTaskModal && (<EditTaskModal idx={idx} showEditTaskModal={showEditTaskModal} setShowEditTaskModal={setShowEditTaskModal} selectedProject={selectedProject} />)}
    </div>
  )
}

export default Task;
