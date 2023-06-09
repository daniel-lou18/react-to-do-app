import React from 'react';
import ReactDOM from 'react-dom';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import Main from './routes/Main';
import Today from './routes/Today';
import Overdue from  './routes/Overdue';

// const _router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Root />}>
//     <Route path='/projects/:projectId' element={<Main />} />
//     <Route path='/projects/today' element={<Today />} />
//     <Route path='/projects/overdue' element={<Overdue />} />
//   </Route>
// ))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/projects/:projectId',
        element: <Main />,
      },
      // {
      //   path: '/projects/today',
      //   element: <Today />
      // },
      // {
      //   path: '/projects/overdue',
      //   element: <Overdue />
      // }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
