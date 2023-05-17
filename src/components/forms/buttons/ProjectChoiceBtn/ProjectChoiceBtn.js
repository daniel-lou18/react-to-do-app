const ProjectChoiceBtn = ({ showProjectsList, setShowProjectsList, setShowPriorityList, btnIcon, projectSelection }) => {
  return (
    <>
      <input
        type="checkbox"
        className="btn-form"
        name="btn-projects"
        id="btn-projects"
        checked={showProjectsList}
        onChange={() => {
          setShowProjectsList(!showProjectsList)
          setShowPriorityList(false)
        }}
      />
      <div className="btn-wrapper form-project">
          <label className="btn-projects" htmlFor="btn-projects">
            <div className="btn-pers-proj">
              {btnIcon}
              <span className="form-project">{projectSelection.capitalizedProjectName}</span>
            </div>
          </label>
      </div>
    </>
  )
}

export default ProjectChoiceBtn;
