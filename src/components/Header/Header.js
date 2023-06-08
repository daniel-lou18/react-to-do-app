import RemoveTaskBigBtn from '../UI-Elements/buttons/RemoveTaskBigBtn';
import AddTaskBigBtn from '../UI-Elements/buttons/AddTaskBigBtn';
import './Header.css';
import { useProjectsContext } from '../../context/ProjectsContext';

const Header = ({ setShowAddTask }) => {
  const { allProjects } = useProjectsContext();
  const strikethroughCount = allProjects.flatMap(project => project.tasks)
                                        .filter(task => task.strikethrough)
                                        .length;

  return (
    <>
      <div className="header-container-left header-container">To-Do App <span className="text-italic">by Daniël</span></div>
      <div className="header-container-right header-container">
        <div className="header-action-container">
          {strikethroughCount > 0 && <RemoveTaskBigBtn strikethroughCount={strikethroughCount} />}
        </div>
        <div className="header-btn-container">
          <AddTaskBigBtn setShowAddTask={setShowAddTask} />
        </div>
      </div>
    </>
  )
}



export default Header;
