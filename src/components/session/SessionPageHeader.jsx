import React from 'react';
import { Edit, User, PanelLeftOpen } from 'lucide-react';

// Let's create a dedicated, reusable component for the "Free plan" button.
const FreePlanButton = () => (
  <div className="bg-[#2a2a2a] border border-gray-700/60 rounded-md px-3 py-1 text-sm">
    <span className="text-gray-400">Free plan</span>
    <span className="text-white font-medium"> · </span>
    <button className="text-blue-400 hover:text-blue-300 font-medium">Upgrade</button>
  </div>
);

const SessionPageHeader = ({ onNewChat, onMenuClick, isWelcome = false }) => (
  <header className={`flex-shrink-0 z-20 ${isWelcome ? 'bg-transparent' : 'border-b border-gray-700/80 bg-[#1c1c1c]'}`}>
    <div className="flex h-16 items-center justify-between px-4">
      
      {/* --- Left Section (Mobile Menu) --- */}
      {/* This only shows on mobile, which is correct for both views */}
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
        {/* Only show the Free Plan button in the center when CHAT HAS STARTED */}
        {!isWelcome && <FreePlanButton />}
      </div>

      {/* --- Right Section (Handles both states) --- */}
      <div className="flex items-center gap-2">
        {isWelcome ? (
          // STATE 1: On Welcome page, show Free Plan button on the right
          <FreePlanButton />
        ) : (
          // STATE 2: In Chat, show New Chat and User buttons
          <>
            <button 
              onClick={onNewChat} 
              className="p-2 text-gray-400 hover:text-white" 
              title="New Chat"
            >
              <Edit className="h-5 w-5" />
            </button>
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