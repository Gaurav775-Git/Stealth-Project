import React from 'react';
import { Route } from 'react-router-dom';

// Semester pages
import Sem1page from './pages/semnotespages/Sem1page';
import Sem2page from './pages/semnotespages/Sem2page';
import Sem3page from './pages/semnotespages/Sem3page';
import Sem4page from './pages/semnotespages/Sem4page';
import Sem5page from './pages/semnotespages/Sem5page';
import Sem6page from './pages/semnotespages/Sem6page';
import Sem7page from './pages/semnotespages/Sem7page';
import Sem8page from './pages/semnotespages/Sem8page';

// PYQ pages
import Pyq1page from './pages/Pyqnotespages/Pyq1page';
import Pyq2page from './pages/Pyqnotespages/Pyq2page';
import Pyq3page from './pages/Pyqnotespages/Pyq3page';
import Pyq4page from './pages/Pyqnotespages/Pyq4page';
import Pyq5page from './pages/Pyqnotespages/Pyq5page';
import Pyq6page from './pages/Pyqnotespages/Pyq6page';
import Pyq7page from './pages/Pyqnotespages/Pyq7page';
import Pyq8page from './pages/Pyqnotespages/Pyq8page';

// Subject pages (sem1)
import Maths from './pages/subjects/sem1/Maths';
import Physics from './pages/subjects/sem1/Physics';
import Fce from './pages/subjects/sem1/Fce';
import Cprogram from './pages/subjects/sem1/Cprogram';
import Psa from './pages/subjects/sem1/Psa';

// Paper pages (sem1)
import Cpaper from './pages/papers/sem1/Cpaper';
import Fcepaper from './pages/papers/sem1/Fcepaper';
import Physicspaper from './pages/papers/sem1/Physicspaper';
import Mathpaper from './pages/papers/sem1/Mathpaper';
import Psapaper from './pages/papers/sem1/Psapaper';


const semesterRoutes = [
  { path: '/notes/sem1', element: <Sem1page /> },
  { path: '/notes/sem2', element: <Sem2page /> },
  { path: '/notes/sem3', element: <Sem3page /> },
  { path: '/notes/sem4', element: <Sem4page /> },
  { path: '/notes/sem5', element: <Sem5page /> },
  { path: '/notes/sem6', element: <Sem6page /> },
  { path: '/notes/sem7', element: <Sem7page /> },
  { path: '/notes/sem8', element: <Sem8page /> },
];

const pyqRoutes = [
  { path: '/pyq/paper1', element: <Pyq1page /> },
  { path: '/pyq/paper2', element: <Pyq2page /> },
  { path: '/pyq/paper3', element: <Pyq3page /> },
  { path: '/pyq/paper4', element: <Pyq4page /> },
  { path: '/pyq/paper5', element: <Pyq5page /> },
  { path: '/pyq/paper6', element: <Pyq6page /> },
  { path: '/pyq/paper7', element: <Pyq7page /> },
  { path: '/pyq/paper8', element: <Pyq8page /> },
];

const subjectRoutesSem1 = [
    { path: '/notes/sem1/math', element: <Maths /> },
    { path: '/notes/sem1/physics', element: <Physics /> },
    { path: '/notes/sem1/fce', element: <Fce /> },
    { path: '/notes/sem1/cprogram', element: <Cprogram /> },
    { path: '/notes/sem1/psa', element: <Psa /> },
]

const paperRoutesSem1 = [
    { path: '/pyq/paper1/cprogram', element: <Cpaper />},
    { path: '/pyq/paper1/physics', element: <Physicspaper /> },
    { path: '/pyq/paper1/fce', element: <Fcepaper /> },
    { path: '/pyq/paper1/math', element: <Mathpaper /> },
    { path: '/pyq/paper1/psa', element: <Psapaper /> },
]

const renderRoutes = (routes) => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
};

export { semesterRoutes, pyqRoutes, subjectRoutesSem1, paperRoutesSem1, renderRoutes };
