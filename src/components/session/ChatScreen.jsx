// // src/components/session/ChatScreen.jsx

// import React from 'react';
// import { User, Copy, RefreshCw } from 'lucide-react';

// // Shared dependency: MenoLogo
// const MenoLogo = ({ className = "w-8 h-8" }) => (
//     <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(8 50 50)"><path d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z" fill="#3B82F6" /><circle cx="40" cy="45" r="15" fill="white" /><circle cx="36" cy="48" r="8" fill="#1E3A8A" /><path d="M65 42 C 70 48, 75 48, 80 42" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" fill="none"/></g></svg>
// );

// // --- Component Logic: TypingIndicator ---
// const TypingIndicator = () => (
//     <div className="flex gap-3 sm:gap-4 mb-6">
//         <div className="flex-shrink-0">
//             <MenoLogo className="w-8 h-8" />
//         </div>
//         <div className="flex-1">
//             <div className="inline-block bg-gray-800/50 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-700/50">
//                 <div className="flex items-center gap-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// // --- Component Logic: MessageBubble ---
// const MessageBubble = ({ message, onCopy, onRegenerate }) => {
//     const isUser = message.sender === 'user';
//     return (
//         <div className={`group flex gap-3 sm:gap-4 mb-6`}>
//             <div className={`flex-shrink-0 ${isUser ? 'order-2' : 'order-1'}`}>
//                 {isUser ? (
//                     <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                         <User className="w-4 h-4 text-white" />
//                     </div>
//                 ) : (
//                     <MenoLogo className="w-8 h-8" />
//                 )}
//             </div>
//             <div className={`flex flex-col w-full ${isUser ? 'order-1 items-end' : 'order-2 items-start'}`}>
//                 <div className={`max-w-xl inline-block ${isUser ? 'bg-blue-600 text-white rounded-2xl rounded-br-md' : 'bg-gray-800/50 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50'}`}>
//                     <p className="px-4 py-3 whitespace-pre-wrap leading-relaxed text-sm">
//                         {message.text}
//                     </p>
//                 </div>
//                 {!isUser && (
//                     <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <button onClick={() => onCopy(message.text)} className="p-1.5 text-gray-500 hover:text-gray-300" title="Copy">
//                             <Copy className="w-4 h-4" />
//                         </button>
//                         <button onClick={() => onRegenerate(message.id)} className="p-1.5 text-gray-500 hover:text-gray-300" title="Regenerate">
//                             <RefreshCw className="w-4 h-4" />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };


// // --- Main Exported Component: ChatScreen (formerly MessageList) ---
// const ChatScreen = ({ messages, isLoading, onCopy, onRegenerate, messagesEndRef }) => (
//     <div className="flex-1 overflow-y-auto">
//         <div className="max-w-4xl mx-auto px-4 py-6">
//             {messages.map((message) => (
//                 <MessageBubble
//                     key={message.id}
//                     message={message}
//                     onCopy={onCopy}
//                     onRegenerate={onRegenerate}
//                 />
//             ))}
//             {isLoading && <TypingIndicator />}
//             <div ref={messagesEndRef} />
//         </div>
//     </div>
// );

// export default ChatScreen;





// src/components/session/ChatScreen.jsx

import React from 'react';
import { User, Copy, RefreshCw } from 'lucide-react';

// Shared dependency: MenoLogo
// const MenoLogo = ({ className = "w-8 h-8" }) => (
//     <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g transform="rotate(8 50 50)">
//             <path d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z" fill="#3B82F6" />
//             <circle cx="40" cy="45" r="15" fill="white" />
//             <circle cx="36" cy="48" r="8" fill="#1E3A8A" />
//             <path d="M65 42 C 70 48, 75 48, 80 42" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" fill="none"/>
//         </g>
//     </svg>
// );




const MenoLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="meno-blue-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <path 
          d="M -5,5 Q 0,0 5,5 T 15,5 T 25,5 M -5,15 Q 0,10 5,15 T 15,15 T 25,15" 
          stroke="#93C5FD" // Lighter blue (blue-300)
          strokeWidth="1.5" 
          fill="none"
        />
      </pattern>
    </defs>
    
    <g transform="rotate(8 50 50)">
      <path 
        d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
        fill="#3B82F6" // Primary blue (blue-500)
      />
      <path 
        d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
        fill="url(#meno-blue-pattern)"
      />

      {/* Left Eye */}
      <circle cx="38" cy="45" r="13" fill="white" />
      <circle cx="35" cy="48" r="7" fill="#1E3A8A" />
      
      {/* Right Eye */}
      <circle cx="72" cy="45" r="13" fill="white" />
      <circle cx="69" cy="48" r="7" fill="#1E3A8A" />
    </g>
  </svg>
);


// --- Component Logic: TypingIndicator ---
const TypingIndicator = () => (
    <div className="flex gap-3 sm:gap-4 mb-6 animate-fade-in">
        <div className="flex-shrink-0 animate-pulse">
            <MenoLogo className="w-8 h-8" />
        </div>
        <div className="flex-1">
            <div className="inline-block bg-gray-800/50 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-700/50 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    </div>
);

// --- Component Logic: MessageBubble ---
const MessageBubble = ({ message, onCopy, onRegenerate }) => {
    const isUser = message.sender === 'user';
    return (
        <div className={`group flex gap-3 sm:gap-4 mb-6 animate-slide-in transform transition-all duration-300 hover:translate-x-1`}>
            <div className={`flex-shrink-0 transition-transform duration-300 hover:scale-110 ${isUser ? 'order-2' : 'order-1'}`}>
                {isUser ? (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-blue-500/30">
                        <User className="w-4 h-4 text-white" />
                    </div>
                ) : (
                    <MenoLogo className="w-8 h-8 drop-shadow-sm" />
                )}
            </div>
            <div className={`flex flex-col w-full transition-all duration-300 ${isUser ? 'order-1 items-end' : 'order-2 items-start'}`}>
                <div className={`max-w-xl inline-block transform transition-all duration-300 hover:scale-[1.02] ${
                    isUser 
                        ? 'bg-gray-800/50 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50 shadow-lg hover:shadow-gray-700/30 hover:border-gray-600/50'
                        : 'bg-gray-800/50 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50 shadow-lg hover:shadow-gray-700/30 hover:border-gray-600/50'
                }`}>
                    <p className="px-4 py-3 whitespace-pre-wrap leading-relaxed text-sm transition-all duration-200">
                        {message.text}
                    </p>
                </div>
                {!isUser && (
                    <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                        <button 
                            onClick={() => onCopy(message.text)} 
                            className="p-1.5 text-gray-500 hover:text-gray-300 rounded-md transition-all duration-200 hover:bg-gray-700/30 hover:scale-110 active:scale-95" 
                            title="Copy"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => onRegenerate(message.id)} 
                            className="p-1.5 text-gray-500 hover:text-gray-300 rounded-md transition-all duration-200 hover:bg-gray-700/30 hover:scale-110 hover:rotate-180 active:scale-95" 
                            title="Regenerate"
                        >
                            <RefreshCw className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Main Exported Component: ChatScreen (formerly MessageList) ---
const ChatScreen = ({ messages, isLoading, onCopy, onRegenerate, messagesEndRef }) => (
    <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-4xl mx-auto px-4 py-6">
            {messages.map((message, index) => (
                <div
                    key={message.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <MessageBubble
                        message={message}
                        onCopy={onCopy}
                        onRegenerate={onRegenerate}
                    />
                </div>
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
        </div>
        
        <style jsx>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slide-in {
                from { 
                    opacity: 0; 
                    transform: translateX(-20px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateX(0); 
                }
            }
            
            @keyframes fade-in-up {
                from { 
                    opacity: 0; 
                    transform: translateY(20px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
            
            .animate-fade-in {
                animation: fade-in 0.5s ease-out;
            }
            
            .animate-slide-in {
                animation: slide-in 0.6s ease-out;
            }
            
            .animate-fade-in-up {
                animation: fade-in-up 0.4s ease-out both;
            }
            
            .scroll-smooth {
                scroll-behavior: smooth;
            }
        `}</style>
    </div>
);

export default ChatScreen;