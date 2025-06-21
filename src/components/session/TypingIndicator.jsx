import React from 'react';

const MenoLogo = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(8 50 50)"><path d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z" fill="#3B82F6" /><circle cx="40" cy="45" r="15" fill="white" /><circle cx="36" cy="48" r="8" fill="#1E3A8A" /><path d="M65 42 C 70 48, 75 48, 80 42" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" fill="none"/></g></svg>
);
  
const TypingIndicator = () => (
  <div className="flex gap-3 sm:gap-4 mb-6">
    <div className="flex-shrink-0">
        <MenoLogo className="w-8 h-8" />
    </div>
    <div className="flex-1">
      <div className="inline-block bg-gray-800/50 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-700/50">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default TypingIndicator;