import React from 'react';
import RemoveTaskBigBtn from './RemoveTaskBigBtn';
import AddTaskBigBtn from './AddTaskBigBtn';
import './Header.css';

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
            <RemoveTaskBigBtn />
          </div>
          <div className="header-btn-container">
            <AddTaskBigBtn />
          </div>
        </div>
      </>
    )
  }
}

export default Header;
