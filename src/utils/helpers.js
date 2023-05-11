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
