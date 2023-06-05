const TaskName = ({ taskNameText, setTaskName }) => {
  return (
    <div className="form-text">
        <input
          className="form-text"
          type="text"
          name="task-text"
          id="task-modify"
          placeholder="Tâche"
          minLength="1"
          maxLength="60"
          value={taskNameText}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>
  )
}

export default TaskName;
