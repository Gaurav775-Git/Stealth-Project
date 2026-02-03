import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar'; // Assuming you'll have a redesigned Navbar here
import Sidebar from '../sidebar/Sidebar'; // Assuming you'll have a redesigned Sidebar here

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/744be8ba-30a1-41a2-96b6-a73c19d25452',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'frontend/src/reuasblecomponents/layout/Layout.jsx:9',message:'Layout component render start',data:{isSidebarOpen},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'M'})}).catch(()=>{});
  // #endregion
  const toggleSidebar = () => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/744be8ba-30a1-41a2-96b6-a73c19d25452',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'frontend/src/reuasblecomponents/layout/Layout.jsx:12',message:'toggleSidebar called',data:{isSidebarOpenBefore: isSidebarOpen},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'M'})}).catch(()=>{});
    // #endregion
    setIsSidebarOpen(!isSidebarOpen);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/744be8ba-30a1-41a2-96b6-a73c19d25452',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'frontend/src/reuasblecomponents/layout/Layout.jsx:15',message:'toggleSidebar completed',data:{isSidebarOpenAfter: !isSidebarOpen},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'M'})}).catch(()=>{});
    // #endregion
  };

  return (
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/744be8ba-30a1-41a2-96b6-a73c19d25452',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'frontend/src/reuasblecomponents/layout/Layout.jsx:22',message:'Layout component rendering JSX',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'M'})}).catch(()=>{});
    // #endregion
    <div className="flex min-h-screen bg-neutral-100 font-sans text-neutral-800">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 p-6 lg:p-8 mt-16 lg:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
