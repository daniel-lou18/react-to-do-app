import Task from './JSClasses/Task';
import Project, { PersonalProject } from './JSClasses/Project';

export const allProjects = [];

const inbox = new Project('inbox', '', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>');
const task3 = new Task('Arroser les plantes', 'Ne pas oublier l\'aloë vera', 0, 'inbox', 3);
inbox.tasks.push(task3);
const task4 = new Task('Prendre rdv chez le garagiste', 'Garage Vroum à Meudon, tél 06 55 55 55', 0, 'inbox', 1);
inbox.tasks.push(task4);
const task5 = new Task('Aller chercher les enfants à l\'école',
  `Eventuellement demander à grand-mère
sinon demander à Yuko
nooooooooo!!!`,
  0, 'inbox', 2);
inbox.tasks.push(task5);
const task6 = new Task('Réparer la douche', 'Quincaillerie rue Damrémont', 0, 'inbox', 3);
inbox.tasks.push(task6);
allProjects.push(inbox);
const courses = new PersonalProject('courses', 'seagreen');
allProjects.push(courses);
const enfants = new PersonalProject('enfants', 'lightsalmon');
allProjects.push(enfants);
const travaux = new PersonalProject('travaux', 'indigo', null, true);
const task1 = new Task('Réparer robinet', 'salle de bains', 0, 'travaux', 2);
travaux.tasks.push(task1);
const task2 = new Task('Déboucher l\'évier', 'acheter du produit', 0, 'travaux', 3);
travaux.tasks.push(task2);
allProjects.push(travaux);

const personalProjects = [...allProjects];
personalProjects.shift();

export default personalProjects;
