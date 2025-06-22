// import React, { useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import DashboardSidebar from './DashboardSidebar';

// const DashboardLayout = () => {
//   const location = useLocation();
//   const pathParts = location.pathname.split('/');
//   const activeSessionId = location.pathname.startsWith('/session/') ? pathParts[2] : null;

//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <div className="relative flex h-screen bg-black text-white font-sans overflow-hidden">

//       {/* --- DESKTOP SIDEBAR --- */}
//       {/* Hidden on small screens, shown as a flex item on medium screens and up */}
//       <div className="hidden md:flex md:flex-shrink-0">
//         <DashboardSidebar activeSessionId={activeSessionId} />
//       </div>

//       {/* --- MOBILE SIDEBAR (as an overlay) --- */}
//       <>
//         {/* The actual sidebar component, always in DOM but positioned off-screen when closed */}
//         <div className={`fixed inset-y-0 left-0 z-30 w-72 md:hidden h-screen transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}>
//           <DashboardSidebar
//             activeSessionId={activeSessionId}
//             onLinkClick={toggleMobileMenu}
//             isMobileView={true}
//           />
//         </div>

//         {/* The backdrop - only show when menu is open */}
//         {isMobileMenuOpen && (
//           <div
//             className="fixed inset-0 bg-black/60 z-20 md:hidden transition-opacity duration-300"
//             onClick={toggleMobileMenu}
//             aria-hidden="true"
//           />
//         )}
//       </>

//       {/* --- MAIN CONTENT AREA --- */}
//       {/* Renders SessionPage. We pass the menu toggle function as a prop */}
//       <main className="flex-1 flex flex-col overflow-y-auto">
//         <Outlet context={{ onMenuClick: toggleMobileMenu }} />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;








import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const activeSessionId = location.pathname.startsWith('/session/') ? pathParts[2] : null;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    // Only apply scroll lock on mobile devices
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    if (isMobileMenuOpen && isMobile) {
      // Prevent scrolling on body and html
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restore scroll position only if we had saved one
      if (scrollY && isMobile) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="relative flex h-screen bg-black text-white font-sans overflow-hidden">
      {/* --- DESKTOP SIDEBAR --- */}
      {/* Hidden on small screens, shown as a flex item on medium screens and up */}
      <div className="hidden md:flex md:flex-shrink-0">
        <DashboardSidebar activeSessionId={activeSessionId} />
      </div>

      {/* --- MOBILE SIDEBAR (as an overlay) --- */}
      <>
        {/* The actual sidebar component, always in DOM but positioned off-screen when closed */}
        <div className={`fixed inset-y-0 left-0 z-30 w-72 md:hidden h-screen transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <DashboardSidebar
            activeSessionId={activeSessionId}
            onLinkClick={toggleMobileMenu}
            isMobileView={true}
          />
        </div>

        {/* The backdrop - only show when menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-20 md:hidden transition-opacity duration-300"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
        )}
      </>

      {/* --- MAIN CONTENT AREA --- */}
      {/* Renders SessionPage. We pass the menu toggle function as a prop */}
      <main className={`flex-1 flex flex-col ${isMobileMenuOpen ? 'overflow-hidden' : 'overflow-y-auto'}`}>
        <Outlet context={{ onMenuClick: toggleMobileMenu }} />
      </main>
    </div>
  );
};

export default DashboardLayout;