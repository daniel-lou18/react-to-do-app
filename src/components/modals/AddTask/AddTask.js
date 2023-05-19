import TaskName from '../../forms/inputs/TaskName';
import TaskDescription from '../../forms/inputs/TaskDescription/TaskDescription';
import ProjectChoiceBtn from '../../forms/buttons/ProjectChoiceBtn/ProjectChoiceBtn';
import ProjectsList from '../../forms/buttons/ProjectChoiceBtn/ProjectsList/ProjectsList';
import PriorityChoiceBtn from '../../forms/buttons/PriorityChoiceBtn/PriorityChoiceBtn';
import PriorityList from '../../forms/buttons/PriorityChoiceBtn/PriorityList/PriorityList';
import { projectIcon } from '../../../utils/helpers';
import { useState, useEffect } from 'react';

const AddTask = ({ showAddTask, setShowAddTask, selectedProject, setSelectedProject }) => {
  const [taskNameText, setTaskName] = useState();
  const [description, setDescription] = useState();
  const [projectSelection, setProjectSelection] = useState(selectedProject);
  const [showProjectsList, setShowProjectsList] = useState(false);
  const [btnIcon, setBtnIcon] = useState(projectIcon(selectedProject));
  const [prioritySelection, setPrioritySelection] = useState(1);
  const [showPriorityList, setShowPriorityList] = useState(false);


  useEffect(() => {
    setBtnIcon(projectIcon(projectSelection))
  }, [projectSelection])

  const closeModal = () => {
    setShowAddTask(false)
  }

  return (
    <div class="backdrop" onClick={closeModal}>
      <form className="task-form modal new-task" id="task-0" onClick={e => e.stopPropagation()}>
        <div className="form-main">
          <TaskName taskNameText={taskNameText} setTaskName={setTaskName}/>
          <TaskDescription description={description} setDescription={setDescription} />
          <div className="form-params">
            <button type="button" className="form-date form-container">
            <svg className="form-date" style={{width:15, height:15}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
            </svg>
            <span className="form-date">Échéance</span>
            </button>
            <div className="form-project-container form-container">
              <ProjectChoiceBtn showProjectsList={showProjectsList} setShowProjectsList={setShowProjectsList} showPriorityList={showPriorityList} setShowPriorityList={setShowPriorityList} projectSelection={projectSelection} btnIcon={btnIcon} />
              {showProjectsList && <ProjectsList projectSelection={projectSelection} setProjectSelection={setProjectSelection} setShowProjectsList={setShowProjectsList}/>}
            </div>
            <div className="form-priority-container form-container">
              <PriorityChoiceBtn showPriorityList={showPriorityList} setShowPriorityList={setShowPriorityList} setShowProjectsList={setShowProjectsList} prioritySelection={prioritySelection}/>
              {showPriorityList && <PriorityList prioritySelection={prioritySelection} setPrioritySelection={setPrioritySelection} setShowPriorityList={setShowPriorityList} />}
            </div>
          </div>
        </div>
        <div className="form-save">
          <button className="cancel-new-task cancel" type="button">Annnuler</button>
          <button className="save-new-task save">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
