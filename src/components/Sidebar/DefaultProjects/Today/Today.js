import { NavLink } from "react-router-dom";
import { useProjectsContext } from "../../../../context/ProjectsContext";

const Today = () => {
  const { allProjects } = useProjectsContext();
  const allTasks = allProjects.flatMap(project => project.tasks);
  const todayTasks = allTasks.filter(task => task.dueDate.toDateString() === new Date().toDateString());

  return (
    <NavLink className='sidebar-project' to={'/projects/today'}>
      <li className="default-project project today">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="crimson" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <div className="today-title title">Aujourd'hui</div>
        <div className="today-count count">{todayTasks.length}</div>
      </li>
    </NavLink>
  )
}

export default Today;
