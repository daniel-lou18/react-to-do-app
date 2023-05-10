import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="header-container-left header-container">To-Do App <span className="text-italic">by Daniël</span></div>
        <div className="header-container-right header-container">
          <div className="header-action-container">
            <button className="btn-svg-header del-checked-task">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span className="del-checked-task">Remove checked task</span>
            </button>
          </div>
          <div className="header-btn-container">
            <button className="btn-svg-header add-task add-task-header">
              <div className="svg-wrapper add-task-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus cross">
                  <line x1="15" y1="5" x2="15" y2="25"/><line x1="5" y1="15" x2="25" y2="15"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Header;
