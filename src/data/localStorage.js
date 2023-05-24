import parseJSON from 'date-fns/parseJSON';
import Task from './JSClasses/Task';
import Project, { PersonalProject } from './JSClasses/Project';

const savedAllProjectsData = JSON.parse(localStorage.getItem('allProjects'));
console.log(savedAllProjectsData)

const createProjectFromSaved = ({ _projectName, _color, _svg, _selected }) => {
  return new Project(_projectName, _color, _svg, _selected)
}

const createPersonalProjectFromSaved = ({ _projectName, _color, _svg, _selected }) => {
  return new PersonalProject(_projectName, _color, _svg, _selected)
}

const createTaskFromSaved = ({ _taskName, _descr, _dueDate, _project, _priority }) => {
  return new Task(_taskName, _descr, parseJSON(_dueDate), _project, _priority)
}

const createAllProjectsFromStorage = savedAllProjectsData => {
  if (!savedAllProjectsData) return null

  const inbox = createProjectFromSaved(savedAllProjectsData[0]);
  savedAllProjectsData[0].tasks.forEach(task => inbox.tasks.push(createTaskFromSaved(task)));

  const projects = [];
  const personalProjects = savedAllProjectsData.slice(1);
  personalProjects.forEach(project => {
    const newProject = createPersonalProjectFromSaved(project);
    project.tasks.forEach(task => newProject.tasks.push(createTaskFromSaved(task)));
    projects.push(newProject)
  })

  return [inbox, ...projects]
}

export default createAllProjectsFromStorage(savedAllProjectsData)
