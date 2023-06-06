import { NavLink } from "react-router-dom";
import { useProjectsContext } from "../../../../context/ProjectsContext";
import compareAsc from "date-fns/compareAsc";

const Overdue = () => {
  const { allProjects } = useProjectsContext();
  const allTasks = allProjects.flatMap(project => project.tasks);
  const overdueTasks = allTasks.filter(task => compareAsc(task.dueDate, new Date()) === -1);

  return (
    <NavLink className='sidebar-project' to={'/projects/overdue'}>
      <li className="default-project project today">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div className="today-title title">En retard</div>
        <div className="today-count count">{overdueTasks.length}</div>
      </li>
    </NavLink>
  )
}

export default Overdue;
