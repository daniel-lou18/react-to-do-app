import { useProjectsContext } from "../../../../../../../context/ProjectsContext"
import Task from "../../../../../../../data/JSClasses/Task";

const SaveTaskBtn = ({ selectedProject, projectSelection, idx, taskNameText, description, prioritySelection, setShowEditTaskModal }) => {
  const { allProjects, setShouldUpdate } = useProjectsContext()

  const saveTaskHandler = e => {
    e.preventDefault();
    if (selectedProject.id === projectSelection.id) {
      const project = allProjects.find(project => project.id === selectedProject.id);
      project.tasks[idx] = new Task(taskNameText, description, 0, project.projectName, prioritySelection)
      setShowEditTaskModal(false)
    } else {
      const prevProject = allProjects.find(project => project.id === selectedProject.id);
      const currProject = allProjects.find(project => project.id === projectSelection.id);
      prevProject.tasks.splice(idx, 1);
      currProject.tasks.push(new Task(taskNameText, description, 0, currProject.projectName, prioritySelection));
      setShowEditTaskModal(false);
      setShouldUpdate(true);
    }
  }

  return (
    <button className="save-new-task" onClick={saveTaskHandler}>Enregistrer</button>
  )
}

export default SaveTaskBtn;
