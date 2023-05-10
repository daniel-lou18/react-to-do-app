import React from 'react';

class AddTaskBigBtn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className="btn-svg-header add-task add-task-header">
        <div className="svg-wrapper add-task-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus cross">
            <line x1="15" y1="5" x2="15" y2="25"/><line x1="5" y1="15" x2="25" y2="15"/>
          </svg>
        </div>
      </button>

    )
  }
}

export default AddTaskBigBtn;
