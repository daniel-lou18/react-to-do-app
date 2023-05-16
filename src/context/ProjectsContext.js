import { createContext, useContext, useState } from 'react';
import personalProjectsData, { allProjectsData } from '../data/projects';

export const ProjectsContext = createContext();

const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState(personalProjectsData);
  const [allProjects, setAllProjects] = useState(allProjectsData);
  const [shouldUpdate, setShouldUpdate] = useState(false)

  return (
      <ProjectsContext.Provider value={ { projects, setProjects, allProjects, setAllProjects, shouldUpdate, setShouldUpdate }}>
        {props.children}
      </ProjectsContext.Provider>
  )
}

export const useProjectsContext = () => useContext(ProjectsContext)

export default ProjectsProvider;
