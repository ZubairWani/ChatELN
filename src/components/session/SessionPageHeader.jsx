import React from 'react';
import { Menu, ChevronDown, Sparkles, Edit, User, PanelLeftOpen } from 'lucide-react';

// Reusable button for "Get Plus"
const GetPlusButton = ({ className = '' }) => (
  <button className={`flex items-center gap-2 rounded-lg bg-[#4A4A5F] px-3 py-1.5 text-sm font-semibold text-white hover:bg-opacity-80 ${className}`}>
    <Sparkles className="h-4 w-4" />
    Get Plus
  </button>
);

// Reusable button for the Chat model dropdown
const ChatDropdownButton = ({ className = '' }) => (
  <button className={`flex items-center gap-1 text-white text-lg font-medium ${className}`}>
    ChatELN 
    <ChevronDown className="h-5 w-5 text-gray-500" />
  </button>
);

const SessionPageHeader = ({ session, onNewChat, onMenuClick }) => (
  <header className="flex-shrink-0 border-b border-gray-700/80 bg-[#212121]">
    <div className="flex h-16 items-center justify-between px-4">
      
      {/* --- Left Section (Responsive) --- */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu (Mobile/Tablet) */}
        <button 
          onClick={onMenuClick} 
          className="p-2 text-gray-400 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <PanelLeftOpen className="h-6 w-6" />
        </button>
        
        
        {/* Brand Dropdown (Desktop) */}
        <button className="hidden items-center gap-1.5 text-white text-lg font-medium md:flex">
          ChatELN 
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* --- Center Section (Universal Logic) --- */}
      <div className="flex items-center">
        {session ? (
          // If a chat is active, show the model dropdown
          <ChatDropdownButton />
        ) : (
          // If no chat is active, show the "Get Plus" button
          <GetPlusButton />
        )}
      </div>

      {/* --- Right Section (Responsive) --- */}
      <div className="flex items-center gap-2">
        {/* New Chat Button (Always visible) */}
        <button 
          onClick={onNewChat} 
          className="p-2 text-gray-400 hover:text-white" 
          title="New Chat"
        >
          <Edit className="h-5 w-5" />
        </button>

        {/* User Profile Avatar (Tablet/Desktop) */}
        <button className="hidden h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white sm:flex" aria-label="User Profile">
           <User className="h-5 w-5" />
        </button>
      </div>

    </div>
  </header>
);

export default SessionPageHeader;
