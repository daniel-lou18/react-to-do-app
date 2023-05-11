import { useState } from 'react';
import projectColors from '../../../../../data/projectColors';

const ProjectColorsList = ({ showColorMenu, setShowColorMenu, projectColor, setProjectColor }) => {
  const [selectedColor, setSelectedColor] = useState('');

  if (!showColorMenu) return

  const selectColorHandler = (e) => {
    setSelectedColor(e.target.value);
    setProjectColor(e.target.value);
    setShowColorMenu(false)
  }

  return (
    <div className="color-input options-container">
      <ul className="color-input list">
        {projectColors.length > 0 && projectColors.map(color => (
          <li key={`color-${color}`} className="color-input option color-item">
            <input
              className="color-option option"
              type="radio"
              name="color-option"
              id={`color-${color}`}
              value={color}
              checked={color === selectedColor}
              onChange={selectColorHandler}
            />
            <label htmlFor={`color-${color}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={color} stroke={color} className="feather feather-circle">
                <circle cx="10" cy="10" r="5"/>
              </svg>
              <span className="color-input option" id={`color-${color}`}>{color}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectColorsList;
