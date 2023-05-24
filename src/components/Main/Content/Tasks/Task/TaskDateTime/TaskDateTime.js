import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const TaskDateTime = ({ task }) => {
  const date = format(task.dueDate, 'PP', { locale: fr });
  const time = format(task.dueDate, 'p', { locale: fr });

  return (
    <div className="calendar-container">
      <svg className="task-calendar" style={{width:15, height:15}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
      </svg>
      <p className="task-calendar">{date}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="task-clock feather feather-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <p className="task-clock">{time}</p>

    </div>
  )
}

export default TaskDateTime;
