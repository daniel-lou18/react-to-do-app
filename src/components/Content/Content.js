import { useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';

const Content = ({ selectedProject, showAddTask, setShowAddTask }) => {

  return (
    <div className='todo-container content-container'>
      <Header selectedProject={selectedProject} showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      <Tasks selectedProject={selectedProject} />
    </div>
  )
}

export default Content;
