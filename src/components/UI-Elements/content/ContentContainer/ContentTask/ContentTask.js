import { useState } from 'react';
import EditTask from '../../../../modals/EditTask/EditTask';
import TaskNameMain from '../../../inputs/TaskNameMain/TaskNameMain';
import DelTaskBtn2 from '../../../buttons/DelTaskBtn2';
import TaskDateTime from '../../../../Content/Tasks/Task/TaskDateTime/TaskDateTime';
import ContentProjectNameSmall from '../ContentProjectNameSmall';
import { CSSTransition } from 'react-transition-group';
import styles from '../../../../Content/Tasks/Task/Task.module.css';

const ContentTask = ({ tasks, idx }) => {
  const [isChecked, setisChecked] = useState(false);
  const [showTask, setShowTask] = useState(true);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const task = tasks[idx];
  if (!task) return
  const color = task._priorityColor;
  const backgroundColor = task._priorityBackgroundColor;

  return (
    <li className="task-wrapper">
      {showTask && (
        <div className="task">
          <TaskNameMain task={task} isChecked={isChecked} setisChecked={setisChecked} color={color} backgroundColor={backgroundColor} />
          <div className='dummy'></div>
          <div className='dummy'></div>
          <button className="btn-svg list-actions edit-task" id={task.id} onClick={() => setShowEditTaskModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="todo-header-edit pen feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
          <DelTaskBtn2 task={task} />
          <div className="description-container">
            <p className="task-descr">{task.descr}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <TaskDateTime task={task} />
          <ContentProjectNameSmall task={task} />
        </div>)}
      <CSSTransition
        in={showEditTaskModal}
        timeout={{ enter: 700, exit: 300 }}
        classNames={{ ...styles }}
        unmountOnExit
        onEnter={() => setShowTask(false)}
        onExited={() => setShowTask(true)}
      >
        <EditTask setShowEditTaskModal={setShowEditTaskModal} task={task} />
      </CSSTransition>
    </li>
  )
}

export default ContentTask;
