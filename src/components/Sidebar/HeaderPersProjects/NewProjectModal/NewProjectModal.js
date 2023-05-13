import { useState } from 'react';
import ProjectColorsList from "./ProjectColorsList";
import { PersonalProject } from '../../../../data/JSClasses/Project';
import { useProjectsContext } from '../../../../context/ProjectsContext';
import { resetAndSelectProject } from '../../../../utils/helpers';

const NewProjectModal = ({showModal, setShowModal}) => {
  const { allProjects, setAllProjects } = useProjectsContext();
  const [projectColor, setProjectColor] = useState('grey');
  const [showColorMenu, setShowColorMenu] = useState(false);
  const [projectName, setProjectName] = useState('');

  if (!showModal) return

  const closeModal = () => {
    setShowModal(false)
    setShowColorMenu(false)
    setProjectName('')
    setProjectColor('grey')
  }

  const createProject = (e) => {
    e.preventDefault();
    if (!projectName) return alert("Please fill in a name for your project")
    const newProject = new PersonalProject(projectName, projectColor, null, false);
    allProjects.push(newProject)
    resetAndSelectProject(allProjects, newProject.id, setAllProjects);
    closeModal()
  }

  return (
    <div className="backdrop" onClick={closeModal}>
      <form className="project-form modal new-project" id="task-0" onClick={e => {
        e.stopPropagation();
        setShowColorMenu(false)
        }}>
        <div className="form-title-wrapper">
          <div className="form-title">Add project</div>
        </div>
        <div className="form-main">
          <div className="form-text-container">
            <label className="form-text" htmlFor="project-text">Name</label>
            <input
              className="form-text"
              type="text"
              name="project-text"
              id="project-text"
              minLength="1"
              maxLength="30"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
          </div>
          <div className="form-params-container">
            <div className="label-params">Color</div>
            <div className="form-params">
              <div className="form-color-container form-container" onClick={e => e.stopPropagation()}>
                <input
                type="checkbox"
                className="btn-form"
                name="btn-color"
                id="btn-proj-color"
                checked={showColorMenu}
                onChange={() => setShowColorMenu(!showColorMenu)}
                />
                <div className="btn-wrapper form-color">
                  <label className="btn-color" htmlFor="btn-proj-color">
                    <div className="btn-color">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={projectColor} stroke={projectColor} className="custom-color feather feather-circle">
                        <circle cx="10" cy="10" r="5"/>
                      </svg>
                      <span className="form-color">{projectColor}</span>
                    </div>
                  </label>
                </div>
                <ProjectColorsList showColorMenu={showColorMenu} setShowColorMenu={setShowColorMenu} projectColor={projectColor} setProjectColor={setProjectColor} />
              </div>
            </div>
          </div>
        </div>
        <div className="form-save">
          <button className="cancel-new-project cancel" type="button" onClick={closeModal}>Annnuler</button>
          <button className="save-new-project save" onClick={createProject}>Créer</button>
        </div>
      </form>
    </div>
  )
}

export default NewProjectModal;
