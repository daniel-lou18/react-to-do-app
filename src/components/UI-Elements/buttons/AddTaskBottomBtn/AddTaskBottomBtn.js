const AddTaskBottomBtn = ({ setShowAddTask }) => {
  return (
    <div className="todo-bottom btn-container" onClick={() => setShowAddTask(prev => !prev)}>
      <button type="button" className="btn-svg-bottom add-task add-task-bottom">
        <div className="svg-wrapper add-task-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross feather feather-plus"><line x1="10" y1="5" x2="10" y2="15"/><line x1="5" y1="10" x2="15" y2="10"/>
          </svg>
        </div>
        <span className="btn-text add-task-bottom">Add task</span>
      </button>
    </div>
  )
}

export default AddTaskBottomBtn;
