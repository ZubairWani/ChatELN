// DashboardSidebar.jsx - Updated with the new "welcome screen" theme
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllSessions } from '@/api/sessionService';
import { useAuth } from '@/contexts/AuthContext';
import {
  PanelLeftClose, PanelLeftOpen, PenSquare, Search, LogOut, Settings,
  MessageSquareText, MoreHorizontal, Crown, User
} from 'lucide-react';

// MenoLogo Component - Updated with orange accent
const MenoLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(8 50 50)">
      <path 
        d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
        fill="#3B82F6"
      />

      {/* Left Eye */}
      <circle cx="38" cy="45" r="13" fill="white" />
      <circle cx="38" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
      
      {/* Right Eye */}
      <circle cx="72" cy="45" r="13" fill="white" />
      <circle cx="72" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
    </g>
  </svg>
);

// NavItem Component - Updated with new theme colors
const NavItem = ({ icon: Icon, text, to = "#", onClick, active = false, isCollapsed, badge = null, onLinkClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
    if (onLinkClick) onLinkClick();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      // THEME CHANGE: Replaced blue/slate colors with orange/gray
      className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${active
          ? 'bg-[#c8794c] text-white shadow-md' // Active state is now orange
          : 'text-gray-400 hover:bg-[#2a2a2a] hover:text-gray-100' // Inactive state uses welcome screen grays
        } ${isCollapsed ? 'justify-center' : ''}`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {!isCollapsed && (
        <>
          <span className="text-sm font-medium truncate">{text}</span>
          {badge && (
            // THEME CHANGE: Badge is now orange
            <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-white/20 text-white rounded-full">
              {badge}
            </span>
          )}
        </>
      )}
      {isCollapsed && (
        <div className="absolute left-full ml-3 px-3 py-2 text-sm font-medium text-white bg-[#2a2a2a] border border-gray-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 shadow-xl whitespace-nowrap">
          {text}
          <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-[#2a2a2a] border-l border-b border-gray-700 rotate-45"></div>
        </div>
      )}
    </Link>
  );
};

// SkeletonLoader - Updated with new theme colors
const SkeletonLoader = ({ isCollapsed }) => (
  <div className="space-y-2">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        // THEME CHANGE: Switched from slate to gray palette
        className={`h-10 bg-gray-800/50 rounded-xl animate-pulse ${isCollapsed ? 'mx-1' : ''}`}
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

// DashboardSidebar main component
const DashboardSidebar = ({
  activeSessionId,
  onLinkClick = () => { },
  isMobileView = false,
  className = ""
}) => {
  const { user, logout } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(() =>
    localStorage.getItem('sidebarCollapsed') === 'true'
  );
  const [showUserMenu, setShowUserMenu] = useState(false);

  const finalIsCollapsed = isMobileView ? false : isCollapsed;

  useEffect(() => {
    if (!isMobileView) localStorage.setItem('sidebarCollapsed', isCollapsed);
  }, [isCollapsed, isMobileView]);

  useEffect(() => {
    const fetchSessions = async () => {
      setIsLoading(true);
      try {
        const data = await getAllSessions().catch(() => [
          { id: '123', title: 'My First Chat', createdAt: new Date() },
          { id: '124', title: 'React Debugging', createdAt: new Date() },
        ]);
        setSessions(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSessions();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showUserMenu]);

  return (
    // THEME CHANGE: Updated background and border to match welcome screen
    <aside className={`flex flex-col h-screen bg-[#1c1c1c] border-r border-gray-700/60 ${className} ${finalIsCollapsed ? 'w-16' : 'w-72'
      } transition-all duration-300`}>

      {/* HEADER */}
      <div className={`flex items-center p-4 border-b border-gray-700/60 h-16 ${finalIsCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!finalIsCollapsed && (
          <Link to="/dashboard" onClick={onLinkClick} className="flex items-center gap-3 group">
            <MenoLogo className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-100">ChatELN</span>
          </Link>
        )}
        {finalIsCollapsed && (
          <Link to="/dashboard" onClick={onLinkClick} className="flex items-center justify-center">
            
          </Link>
        )}
        {!isMobileView && (
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors">
            {isCollapsed ? <PanelLeftOpen className="w-5 h-5 text-gray-400" /> : <PanelLeftClose className="w-5 h-5 text-gray-400" />}
          </button>
        )}
        {isMobileView && (
          <button onClick={onLinkClick} className="p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors">
            <PanelLeftClose className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="p-4 space-y-2">
        <NavItem icon={PenSquare} text="New Chat" to="/dashboard" isCollapsed={finalIsCollapsed} onLinkClick={onLinkClick} />
        <NavItem icon={Search} text="Search chats" onClick={() => alert('Search clicked!')} isCollapsed={finalIsCollapsed} onLinkClick={onLinkClick} />
      </div>

      {/* DIVIDER AND TITLE */}
      {!finalIsCollapsed && (
        <div className="px-4 py-2">
          <div className="h-px bg-gray-700/60"></div>
          <p className="text-xs font-medium text-gray-500 mt-3 mb-2 px-1">Recent Chats</p>
        </div>
      )}

      {/* SESSIONS LIST */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-1 overflow-x-hidden">
        {isLoading ? <SkeletonLoader isCollapsed={finalIsCollapsed} /> : sessions.length > 0 ? (
          <div className="space-y-1 pb-4">
            {sessions.map(session => (
              <NavItem key={session.id} to={`/session/${session.id}`} icon={MessageSquareText} text={session.title} active={session.id === activeSessionId} isCollapsed={finalIsCollapsed} onLinkClick={onLinkClick} />
            ))}
          </div>
        ) : !finalIsCollapsed ? (
          <div className="text-center py-8">
            <p className="text-sm text-gray-500">No recent chats</p>
          </div>
        ) : null}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-700/60 space-y-2">
        <NavItem icon={Crown} text="Upgrade Plan" to="/upgrade" isCollapsed={finalIsCollapsed} badge={!finalIsCollapsed ? "Pro" : null} onLinkClick={onLinkClick} />
        <div className="user-menu-container relative">
          <button onClick={() => setShowUserMenu(!showUserMenu)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${showUserMenu ? 'bg-[#2a2a2a]' : 'hover:bg-[#2a2a2a]'
            } ${finalIsCollapsed ? 'justify-center' : ''}`}>
            {/* THEME CHANGE: User avatar is now orange */}
            <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            {!finalIsCollapsed && (
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium text-gray-100 truncate">{user?.name || 'User'}</p>
              </div>
            )}
            {!finalIsCollapsed && <MoreHorizontal className="w-4 h-4 text-gray-400" />}
          </button>
          <div className={`absolute ${finalIsCollapsed ? 'left-full ml-3 bottom-0' : 'bottom-full mb-2 left-0'
            // THEME CHANGE: Dropdown menu background and border updated
            } w-48 bg-[#2a2a2a] rounded-lg shadow-2xl border border-gray-700 transition-all duration-200 ${showUserMenu ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
            <div className="p-2">
              <Link to="/settings" className="flex items-center w-full p-2 text-sm rounded-md text-gray-300 hover:bg-gray-700/50 transition-colors" onClick={() => { setShowUserMenu(false); onLinkClick(); }}>
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </Link>
              <button onClick={() => { setShowUserMenu(false); logout(); onLinkClick(); }} className="flex items-center w-full p-2 text-sm rounded-md text-red-400 hover:bg-gray-700/50 transition-colors">
                <LogOut className="w-4 h-4 mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;