    //  {isMobileMenuOpen && (
    //     <>
    //         {/* The actual sidebar component, absolutely positioned */}
    //         <div className="fixed inset-y-0 left-0 z-30 w-72 md:hidden h-screen h-full transition-all duration-300">
    //             <DashboardSidebar 
    //                 activeSessionId={activeSessionId} 
    //                 onLinkClick={toggleMobileMenu} // Closes menu when a link is clicked
    //                 isMobileView={true}         // Tells the sidebar to be in expanded mobile mode
    //             />
    //         </div>
    //         {/* The backdrop to close the menu when clicked */}
    //         <div 
    //             className="fixed inset-0 bg-black/60 z-20 md:hidden" 
    //             onClick={toggleMobileMenu}
    //             aria-hidden="true"
    //         ></div>
    //     </>
    //   )}