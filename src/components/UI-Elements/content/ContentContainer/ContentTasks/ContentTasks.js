import ContentTask from "../ContentTask/ContentTask";
import { useProjectsContext } from "../../../../../context/ProjectsContext";
import { compareAsc } from "date-fns";
import { useLocation } from "react-router-dom";

const ContentTasks = () => {
  const { allProjects } = useProjectsContext();
  const allTasks = allProjects.flatMap(project => project.tasks);
  const overdueTasks = allTasks.filter(task => compareAsc(task.dueDate, new Date()) === -1);
  const todayTasks = allTasks.filter(task => task.dueDate.toDateString() === new Date().toDateString());

  const location = useLocation();
  const locationParts = location.pathname.split('/');
  const timing = locationParts[locationParts.length -1];
  const tasks = timing === 'today' ? todayTasks : overdueTasks;

  return (
    <div className="todo-body tasks-container">
      <ul>
        {tasks.length > 0 && tasks.map((task, idx) => (
          <ContentTask key={task.id} idx={idx} tasks={tasks} />
        ))}
      </ul>
    </div>
  )
}

export default ContentTasks;
