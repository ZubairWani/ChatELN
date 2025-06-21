// A custom, modern SVG logo for Meno AI

// 1. Winking Light

// const MenoLogo = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100" // Using a 100x100 viewbox for easier coordinates
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     {/* Define the wavy pattern in the new blue palette */}
//     <defs>
//       <pattern id="meno-blue-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
//         <path 
//           d="M -5,5 Q 0,0 5,5 T 15,5 T 25,5 M -5,15 Q 0,10 5,15 T 15,15 T 25,15" 
//           stroke="#93C5FD" // Lighter blue (Tailwind blue-300)
//           strokeWidth="1.5" 
//           fill="none"
//         />
//       </pattern>
//     </defs>

//     {/* The main speech bubble shape */}
//     <g transform="rotate(8 50 50)">
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="#3B82F6" // Primary blue (Tailwind blue-500)
//       />
//       {/* Apply the pattern on top of the base color */}
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="url(#meno-blue-pattern)"
//       />

//       {/* The Eye */}
//       <circle cx="40" cy="45" r="15" fill="white" />
//       <circle cx="36" cy="48" r="8" fill="#1E3A8A" /> {/* Dark blue pupil (blue-900) */}
      
//       {/* The Wink */}
//       <path 
//         d="M65 42 C 70 48, 75 48, 80 42" 
//         stroke="#1E3A8A" 
//         strokeWidth="6" 
//         strokeLinecap="round" 
//       />
//     </g>
//   </svg>
// );







// 2. The Attentive Mascot

// const MenoLogo = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <pattern id="meno-blue-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
//         <path 
//           d="M -5,5 Q 0,0 5,5 T 15,5 T 25,5 M -5,15 Q 0,10 5,15 T 15,15 T 25,15" 
//           stroke="#93C5FD" // Lighter blue (blue-300)
//           strokeWidth="1.5" 
//           fill="none"
//         />
//       </pattern>
//     </defs>
    
//     <g transform="rotate(8 50 50)">
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="#3B82F6" // Primary blue (blue-500)
//       />
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="url(#meno-blue-pattern)"
//       />

//       {/* Left Eye */}
//       <circle cx="38" cy="45" r="13" fill="white" />
//       <circle cx="35" cy="48" r="7" fill="#1E3A8A" />
      
//       {/* Right Eye */}
//       <circle cx="72" cy="45" r="13" fill="white" />
//       <circle cx="69" cy="48" r="7" fill="#1E3A8A" />
//     </g>
//   </svg>
// );








// 3. Winking Dark

// const MenoLogo = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     {/* The main speech bubble shape */}
//     <g transform="rotate(8 50 50)">
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="#3B82F6" // Primary blue (blue-500)
//       />

//       {/* The Eye */}
//       <circle cx="40" cy="45" r="15" fill="white" />
//       <circle cx="36" cy="48" r="8" fill="#1E3A8A" /> {/* Dark blue pupil (blue-900) */}
      
//       {/* The Wink */}
//       <path 
//         d="M65 42 C 70 48, 75 48, 80 42" 
//         stroke="#1E3A8A"
//         strokeWidth="6" 
//         strokeLinecap="round" 
//       />
//     </g>
//   </svg>
// );








// 4. Looking down

// const MenoLogo = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <pattern id="meno-blue-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
//         <path 
//           d="M -5,5 Q 0,0 5,5 T 15,5 T 25,5 M -5,15 Q 0,10 5,15 T 15,15 T 25,15" 
//           stroke="#93C5FD" // Lighter blue (blue-300)
//           strokeWidth="1.5" 
//           fill="none"
//         />
//       </pattern>
//     </defs>
    
//     <g transform="rotate(8 50 50)">
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="#3B82F6" // Primary blue (blue-500)
//       />
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="url(#meno-blue-pattern)"
//       />

//       {/* Left Eye */}
//       <circle cx="38" cy="45" r="13" fill="white" />
//       <circle cx="38" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
      
//       {/* Right Eye */}
//       <circle cx="72" cy="45" r="13" fill="white" />
//       <circle cx="72" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
//     </g>
//   </svg>
// );

  





// 5. the shy

// const MenoLogo = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <pattern id="meno-blue-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
//         <path 
//           d="M -5,5 Q 0,0 5,5 T 15,5 T 25,5 M -5,15 Q 0,10 5,15 T 15,15 T 25,15" 
//           stroke="#93C5FD"
//           strokeWidth="1.5" 
//           fill="none"
//         />
//       </pattern>
//     </defs>
    
//     <g transform="rotate(8 50 50)">
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="#3B82F6"
//       />
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="url(#meno-blue-pattern)"
//       />

//       {/* The Eye (looking down) */}
//       <circle cx="40" cy="45" r="15" fill="white" />
//       <circle cx="40" cy="54" r="8" fill="#1E3A8A" /> {/* Pupil moved down */}
      
//       {/* The Wink */}
//       <path 
//         d="M65 42 C 70 48, 75 48, 80 42" 
//         stroke="#1E3A8A" 
//         strokeWidth="6" 
//         strokeLinecap="round" 
//       />
//     </g>
//   </svg>
// );








// 6. Looking down Dark

// const MenoLogo = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g transform="rotate(8 50 50)">
//       <path 
//         d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
//         fill="#3B82F6"
//       />

//       {/* Left Eye */}
//       <circle cx="38" cy="45" r="13" fill="white" />
//       <circle cx="38" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
      
//       {/* Right Eye */}
//       <circle cx="72" cy="45" r="13" fill="white" />
//       <circle cx="72" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
//     </g>
//   </svg>
// );
