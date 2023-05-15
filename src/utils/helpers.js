export const resetAndSelectProject = (projects, id, setProjects) => {
  const updatedProjects = projects.map(project => {
     project.selected = false;
     if (project.id === id) project.selected = true;
     return project
    });
  setProjects(updatedProjects)
}

export const resetProjects = (projects, setProjects) => {
  const updatedProjects = projects.map(project => {
     project.selected = false;
     return project
    });
  setProjects(updatedProjects)
}

export const projectIcon = (selectedProject) => {
  const personalProjectIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={selectedProject.color} stroke="none" className="list-dot feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  const defaultProjectIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
  const icon = selectedProject.constructor.name === 'PersonalProject' ? personalProjectIcon : defaultProjectIcon;
  return icon;
}
