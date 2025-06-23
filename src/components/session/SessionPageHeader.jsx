import { Edit, User, PanelLeftOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Reusable "Free plan" button with working navigation
const FreePlanButton = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#2a2a2a] border border-gray-700/60 rounded-md px-3 py-1 text-sm">
      <span className="text-gray-400">Free plan</span>
      <span className="text-white font-medium"> · </span>
      <button
        className="text-blue-400 hover:text-blue-300 font-medium"
        onClick={() => navigate('/dashboard/upgrade')}
      >
        Upgrade
      </button>
    </div>
  );
};

const SessionPageHeader = ({ onNewChat, onMenuClick, isWelcome = false }) => (
  <header className={`flex-shrink-0 z-20 ${isWelcome ? 'bg-transparent' : 'border-b border-gray-700/80 bg-[#1c1c1c]'}`}>
    <div className="flex h-16 items-center justify-between px-4">

      {/* --- Left Section (Mobile Menu) --- */}
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-400 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <PanelLeftOpen className="h-6 w-6" />
        </button>
      </div>

      {/* --- Center Section --- */}
      <div className="flex items-center">
        {!isWelcome && <FreePlanButton />}
      </div>

      {/* --- Right Section --- */}
      <div className="flex items-center gap-2">
        {isWelcome ? (
          <FreePlanButton />
        ) : (
          <>
            <button
              onClick={onNewChat}
              className="p-2 text-gray-400 hover:text-white"
              title="New Chat"
            >
              <Edit className="h-5 w-5" />
            </button>
            {/* Future: User Profile Button */}
            {/* <button className="hidden h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6] text-white sm:flex" aria-label="User Profile">
              <User className="h-5 w-5" />
            </button> */}
          </>
        )}
      </div>
    </div>
  </header>
);

export default SessionPageHeader;
