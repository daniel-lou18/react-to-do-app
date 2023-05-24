import { useProjectsContext } from "../../../../context/ProjectsContext";
import Task from "../../../../data/JSClasses/Task";

const SaveTaskBtn = ({ projectSelection, taskNameText, description, startDate, prioritySelection, setShowAddTask }) => {
  const { allProjects, setShouldUpdate } = useProjectsContext()

  const saveTaskHandler = e => {
    e.preventDefault();
    const currProject = allProjects.find(project => project.id === projectSelection.id);
    const newTask = new Task(taskNameText, description, startDate, currProject.projectName, prioritySelection);
    currProject.tasks.push(newTask)
    setShowAddTask(false);
    setShouldUpdate(true);
    }

  return (
    <button className="save-new-task" onClick={saveTaskHandler}>Enregistrer</button>
  )
}

export default SaveTaskBtn;
