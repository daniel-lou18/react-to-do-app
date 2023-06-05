import ProjectsProvider from "../../context/ProjectsContext";
import App from "../App";
import { useState } from "react";
import { Outlet } from 'react-router-dom';


const Root = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <ProjectsProvider>
      <App showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      <Outlet context={[showAddTask, setShowAddTask]}/>
    </ProjectsProvider>
  )
}

export default Root;
