import Content from '../../components/Content';
import ContentContainer from '../../components/UI-Elements/content/ContentContainer';
import { useOutletContext, useParams } from 'react-router-dom';
import { useProjectsContext } from '../../context/ProjectsContext';
import { cloneDeep } from 'lodash';

const Main = () => {
  const [setShowAddTask] = useOutletContext();
  const { allProjects } = useProjectsContext();
  const { projectId } = useParams();
  const selectedProject = cloneDeep(allProjects.find(project => project.id === projectId));

  return (
    <>
      {(projectId !== 'today' && projectId !== 'overdue') ?
        <Content setShowAddTask={setShowAddTask} selectedProject={selectedProject} /> :
        <ContentContainer setShowAddTask={setShowAddTask} />}
    </>
  )
}

export default Main;

// { selectedProject, setSelectedProject, showAddTask, setShowAddTask }
