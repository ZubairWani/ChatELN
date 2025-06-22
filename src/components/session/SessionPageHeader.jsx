import React from 'react';
import { Menu, ChevronDown, Sparkles, Edit, User, PanelLeftOpen } from 'lucide-react';

// Reusable buttons remain the same

const GetPlusButton = ({ className = '' }) => (
  <button className={`flex items-center gap-2 rounded-lg bg-[#4A4A5F] px-3 py-1.5 text-sm font-semibold text-white hover:bg-opacity-80 ${className}`}>
    <Sparkles className="h-4 w-4" />
    Get Plus
  </button>
);

// // Reusable button for the Chat model dropdown
const ChatDropdownButton = ({ className = '' }) => (
  <button className={`flex items-center gap-1 text-white text-lg font-medium ${className}`}>
    ChatELN 
    <ChevronDown className="h-5 w-5 text-gray-500" />
  </button>
);


const SessionPageHeader = ({ session, onNewChat, onMenuClick, isWelcome = false }) => (
  // Conditionally change the background and border
  <header className={`flex-shrink-0 z-20 ${isWelcome ? 'bg-transparent border-transparent' : 'border-b border-gray-700/80 bg-[#212121]'}`}>
    <div className="flex h-16 items-center justify-between px-4">
      
      {/* --- Left Section --- */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu is always available on mobile/tablet */}
        <button 
          onClick={onMenuClick} 
          className="p-2 text-gray-400 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <PanelLeftOpen className="h-6 w-6" />
        </button>
        
        {/* Brand Dropdown only shows on desktop AND in chat view */}
        {!isWelcome && (
          <button className="hidden items-center gap-1.5 text-white text-lg font-medium md:flex">
            ChatELN 
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </button>
        )}
      </div>

      {/* --- Center Section --- */}
      <div className="flex items-center">
        {/* This entire section is hidden on the welcome screen */}
        {!isWelcome && (
          session ? (
            <ChatDropdownButton />
          ) : (
            <GetPlusButton />
          )
        )}
      </div>

      {/* --- Right Section (Always Visible) --- */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onNewChat} 
          className="p-2 text-gray-400 hover:text-white" 
          title="New Chat"
        >
          <Edit className="h-5 w-5" />
        </button>

        <button className="hidden h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white sm:flex" aria-label="User Profile">
           <User className="h-5 w-5" />
        </button>
      </div>

    </div>
  </header>
);

export default SessionPageHeader;