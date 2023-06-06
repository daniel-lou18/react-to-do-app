import Inbox from './Inbox';
import Today from './Today';
import Upcoming from './Upcoming';
import Overdue from './Overdue';

const DefaultProjects = ({ allProjects, setAllProjects, setSelectedProject }) => {
  return (
    <div className="default-projects-container">
      <ul className="default-projects-list">
        <Inbox allProjects={allProjects} setAllProjects={setAllProjects} setSelectedProject={setSelectedProject} />
        <Today />
        <Upcoming />
        <Overdue />
      </ul>
    </div>
  )
}


export default DefaultProjects;
