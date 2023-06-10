import { projectIcon } from "../../../../../utils/helpers";
import { useProjectsContext } from "../../../../../context/ProjectsContext";
import { cloneDeep } from "lodash";
import styles from './ContentProjectNameSmall.module.css';

const ContentProjectNameSmall = ({ task }) => {
  const { allProjects } = useProjectsContext();
  const currProject = cloneDeep(allProjects).find(project => project.id === task._project);

  return (
    <div className={styles.projectNameSmall}>
      <div>{projectIcon(currProject)}</div>
      <div className="inbox-title">{currProject.capitalizedProjectName}</div>
    </div>
  )
}

export default ContentProjectNameSmall;
