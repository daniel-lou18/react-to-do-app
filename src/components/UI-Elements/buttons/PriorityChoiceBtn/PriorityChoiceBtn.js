import { priorityNumToColor } from "../../../../utils/helpers"

const PriorityChoiceBtn = ({ showPriorityList, setShowPriorityList, setShowProjectsList, prioritySelection }) => {
  return (
    <>
      <input
            type="checkbox"
            className="btn-form"
            name="btn-priority"
            id="btn-priority"
            checked={showPriorityList}
            onChange={() => {
              setShowPriorityList(!showPriorityList)
              setShowProjectsList(false)
            }}
          />
          <div className="btn-wrapper form-priority">
            <label className="btn-priority" htmlFor="btn-priority">
              <div className="btn-priority">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={priorityNumToColor(prioritySelection)} stroke={priorityNumToColor(prioritySelection)} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="form-priority custom-color feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
                <span className="form-priority"></span>
              </div>
            </label>
          </div>
    </>
  )
}

export default PriorityChoiceBtn;
