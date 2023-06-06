const Upcoming = () => {
  return (
    <li className="default-project project soon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="forestgreen" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <div className="soon-title title">Prochainement</div>
      <div className="soon-count count">5</div>
    </li>
  )
}

export default Upcoming;
