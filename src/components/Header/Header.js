import RemoveTaskBigBtn from '../UI-Elements/buttons/RemoveTaskBigBtn';
import AddTaskBigBtn from '../UI-Elements/buttons/AddTaskBigBtn';
import './Header.css';

const Header = ({ showAddTask, setShowAddTask, selectedProject, strikethroughCount }) => {

  return (
    <>
      <div className="header-container-left header-container">To-Do App <span className="text-italic">by Daniël</span></div>
      <div className="header-container-right header-container">
        <div className="header-action-container">
          {strikethroughCount.length > 0 && <RemoveTaskBigBtn selectedProject={selectedProject} strikethroughCount={strikethroughCount} />}
        </div>
        <div className="header-btn-container">
          <AddTaskBigBtn showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
        </div>
      </div>
    </>
  )
}



export default Header;
