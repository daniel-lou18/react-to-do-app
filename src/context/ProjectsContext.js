import { createContext, useContext, useState } from 'react';
import personalProjectsData from '../data/projects';

export const ProjectsContext = createContext();

const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState(personalProjectsData);
  return (
      <ProjectsContext.Provider value={ { projects, setProjects }}>
        {props.children}
      </ProjectsContext.Provider>
  )
}

export const useProjectsContext = () => useContext(ProjectsContext)

export default ProjectsProvider;
