import React from 'react';

const WelcomeContent = () => {
    
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

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <MenoLogo className="h-12 w-12 text-blue-600 group-hover:text-blue-700 transition-colors" />
    
      <h1 className="text-2xl sm:text-3xl font-medium text-gray-300">
        What's on your mind today?
      </h1>
    </div>
  );
};

export default WelcomeContent;






