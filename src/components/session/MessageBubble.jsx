import React from 'react';
import { User, Copy, RefreshCw } from 'lucide-react';

const MenoLogo = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(8 50 50)"><path d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z" fill="#3B82F6" /><circle cx="40" cy="45" r="15" fill="white" /><circle cx="36" cy="48" r="8" fill="#1E3A8A" /><path d="M65 42 C 70 48, 75 48, 80 42" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" fill="none"/></g></svg>
);
  
const MessageBubble = ({ message, onCopy, onRegenerate }) => {
  const isUser = message.sender === 'user';
  return (
    <div className={`group flex gap-3 sm:gap-4 mb-6`}>
      <div className={`flex-shrink-0 ${isUser ? 'order-2' : 'order-1'}`}>
        {isUser ? (
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        ) : (
          <MenoLogo className="w-8 h-8" />
        )}
      </div>
      
      <div className={`flex flex-col w-full ${isUser ? 'order-1 items-end' : 'order-2 items-start'}`}>
        <div className={`max-w-xl inline-block ${isUser ? 'bg-blue-600 text-white rounded-2xl rounded-br-md' : 'bg-gray-800/50 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50'}`}>
          <p className="px-4 py-3 whitespace-pre-wrap leading-relaxed text-sm">
            {message.text}
          </p>
        </div>
        
        {!isUser && (
          <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onCopy(message.text)} className="p-1.5 text-gray-500 hover:text-gray-300" title="Copy">
              <Copy className="w-4 h-4" />
            </button>
            <button onClick={() => onRegenerate(message.id)} className="p-1.5 text-gray-500 hover:text-gray-300" title="Regenerate">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;