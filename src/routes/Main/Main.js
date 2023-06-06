import Content from '../../components/Content';
import { useOutletContext, useParams } from 'react-router-dom';
import { useProjectsContext } from '../../context/ProjectsContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styles from './Main.module.css';


const Main = () => {
  const [setShowAddTask] = useOutletContext();
  const { projectId } = useParams();
  const { allProjects } = useProjectsContext();
  const selectedProject = allProjects.find(project => project.id === projectId);

  return (
    <SwitchTransition>
      <CSSTransition
      key={projectId}
      timeout={300}
      classNames={{ ...styles}}
      unmountOnExit
      >
        <Content setShowAddTask={setShowAddTask} selectedProject={selectedProject} />
      </CSSTransition>
    </SwitchTransition>
  )
}

export default Main;

// { selectedProject, setSelectedProject, showAddTask, setShowAddTask }
