import Header from './Header';
import Tasks from './Tasks';
import AddTaskBottomBtn from '../UI-Elements/buttons/AddTaskBottomBtn/AddTaskBottomBtn';

const Content = ({ selectedProject, setShowAddTask }) => {

  return (
    <div className='todo-container content-container'>
      <Header selectedProject={selectedProject} setShowAddTask={setShowAddTask} />
      <Tasks selectedProject={selectedProject} />
      <AddTaskBottomBtn setShowAddTask={setShowAddTask} />
    </div>
  )
}

export default Content;
