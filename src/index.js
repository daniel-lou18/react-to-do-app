import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProjectsProvider from './context/ProjectsContext';

const Root = () => {
  return (
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
