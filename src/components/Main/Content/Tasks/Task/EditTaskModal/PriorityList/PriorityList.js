import { useState } from 'react';
import priorities from '../../../../../../../data/priorities';

const PriorityList = ({ prioritySelection, setPrioritySelection, setShowPriorityList }) => {

  const selectPriorityHandler = e => {
    setPrioritySelection(e.target.value)
  }

  return (
    <div className="priority-input options-container">
      <ul className="priority-input list">
        {priorities.length > 0 && priorities.map(priority => (
          <li className="priority-input option priority-item">
            <input
              className="priority-option option"
              type="radio"
              name="priority-option"
              id={priority.num}
              value={priority.num}
              checked={priority.num === prioritySelection}
              onChange={selectPriorityHandler}
            />
            <label htmlFor={priority.num}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={priority.color} stroke={priority.color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="priority-option feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
              <span className="priority-input option">Priority {priority.num}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default PriorityList;
