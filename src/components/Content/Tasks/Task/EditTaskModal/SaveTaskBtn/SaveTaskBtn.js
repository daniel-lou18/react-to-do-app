// import { useProjectsContext } from "../../../../../../../context/ProjectsContext"
// import Task from "../../../../../../../data/JSClasses/Task";

// { selectedProject, projectSelection, idx, taskNameText, description, startDate, prioritySelection, setShowEditTaskModal }

// const SaveTaskBtn = () => {
//   const { allProjects, setShouldUpdate } = useProjectsContext()

//   const saveTaskHandler = e => {
//     e.preventDefault();
//     if (selectedProject.id === projectSelection.id) {
//       const project = allProjects.find(project => project.id === selectedProject.id);
//       project.tasks[idx] = new Task(taskNameText, description, startDate, project.projectName, prioritySelection)
//       setShowEditTaskModal(false)
//     } else {
//       const prevProject = allProjects.find(project => project.id === selectedProject.id);
//       const currProject = allProjects.find(project => project.id === projectSelection.id);
//       prevProject.tasks.splice(idx, 1);
//       currProject.tasks.push(new Task(taskNameText, description, startDate, currProject.projectName, prioritySelection));
//       setShowEditTaskModal(false);
//       setShouldUpdate(true);
//     }
//   }

//   return (
//     <button className="save-new-task">Enregistrer</button>
//   )
// }

export default SaveTaskBtn;
