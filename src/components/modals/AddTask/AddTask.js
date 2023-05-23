import TaskName from '../../UI-Elements/inputs/TaskName';
import TaskDescription from '../../UI-Elements/inputs/TaskDescription/TaskDescription';
import DueDate from '../../UI-Elements/buttons/DueDate';
import ProjectChoiceBtn from '../../UI-Elements/buttons/ProjectChoiceBtn/ProjectChoiceBtn';
import ProjectsList from '../../UI-Elements/buttons/ProjectChoiceBtn/ProjectsList/ProjectsList';
import PriorityChoiceBtn from '../../UI-Elements/buttons/PriorityChoiceBtn/PriorityChoiceBtn';
import PriorityList from '../../UI-Elements/buttons/PriorityChoiceBtn/PriorityList/PriorityList';
import { projectIcon } from '../../../utils/helpers';
import SaveTaskBtn from '../../UI-Elements/buttons/SaveTaskBtn/SaveTaskBtn';
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

  const closeMenus = e => {
    e.stopPropagation();
    setShowProjectsList(false);
    setShowPriorityList(false);
  }

  return (
    <div className="backdrop" onClick={closeModal}>
      <form className="task-form modal new-task" id="task-0" onClick={closeMenus}>
        <div className="form-main">
          <TaskName taskNameText={taskNameText} setTaskName={setTaskName}/>
          <TaskDescription description={description} setDescription={setDescription} />
          <div className="form-params" onClick={e => e.stopPropagation()}>
            <DueDate />
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
          <button className="cancel-new-task cancel" type="button" onClick={closeModal}>Annnuler</button>
          <SaveTaskBtn selectedProject={selectedProject} projectSelection={projectSelection} taskNameText={taskNameText} description={description} prioritySelection={prioritySelection} setShowAddTask={setShowAddTask} />
        </div>
      </form>
    </div>
  )
}

export default AddTask;
