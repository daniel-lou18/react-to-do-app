import { useProjectsContext } from "../../../../context/ProjectsContext";

const TaskNameMain = ({ isChecked, setisChecked, color, backgroundColor, task }) => {
  const { setShouldUpdate } = useProjectsContext();

  return (
    <>
      <input
            className="task-check"
            type="checkbox"
            id={task.id}
            checked={isChecked}
            onChange={() => {
              setisChecked(!isChecked)
              task.strikethrough = !isChecked;
              setShouldUpdate(true);
            }}
      />
      <label className="task-label" htmlFor={task.id}>
        <span style={{borderColor: color, backgroundColor: backgroundColor}} className="custom-checkbox">
          <svg className="feather feather-check" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="square"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span className="task-text">{task.taskName}</span>
      </label>
    </>

  )
}

export default TaskNameMain;
