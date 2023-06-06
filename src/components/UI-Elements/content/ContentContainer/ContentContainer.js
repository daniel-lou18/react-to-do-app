import ContentHeader from './ContentHeader';
import ContentTasks from './ContentTasks';
import AddTaskBottomBtn from '../../buttons/AddTaskBottomBtn/AddTaskBottomBtn';

const ContentContainer = ({ setShowAddTask }) => {

  return (
    <div className='todo-container content-container'>
      <ContentHeader setShowAddTask={setShowAddTask} />
      <ContentTasks />
      <AddTaskBottomBtn setShowAddTask={setShowAddTask} />
    </div>
  )
}

export default ContentContainer;
