import Inbox from './Inbox'

const DefaultProjects = ({ allProjects, setAllProjects, selectedProjectId, setSelectedProjectId }) => {
  return (
    <div className="default-projects-container">
      <ul className="default-projects-list">
        <Inbox allProjects={allProjects} setAllProjects={setAllProjects} selectedProjectId={selectedProjectId} setSelectedProjectId={setSelectedProjectId} />
        <li className="default-project project today">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="crimson" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <div className="today-title title">Aujourd'hui</div>
          <div className="today-count count">1</div>
        </li>
        <li className="default-project project soon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="forestgreen" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div className="soon-title title">Prochainement</div>
          <div className="soon-count count">5</div>
        </li>
      </ul>
    </div>
  )
}


export default DefaultProjects;
