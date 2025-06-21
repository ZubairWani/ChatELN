// src/components/session/MessageInput.js

import React, { useRef, useEffect } from 'react';
import { Plus, Wand2, Mic, ArrowUp } from 'lucide-react';

const MessageInput = ({ input, setInput, onSend, isLoading }) => {
  const textareaRef = useRef(null);
  
  // This effect auto-resizes the textarea height as the user types.
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      const maxHeight = 120; // Set a max height (e.g., 120px)
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`;
    }
  }, [input]);

  // Handles sending the message on "Enter" key press (without Shift).
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && input.trim()) {
        onSend();
      }
    }
  };

  const canSend = !isLoading && input.trim();

  return (
    // 'flex-shrink-0' prevents this container from shrinking when content grows.
    <div className="flex-shrink-0 px-3 sm:px-4 py-3">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Input Bar */}
        <div className="w-full flex items-center gap-2 p-1.5 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg">
          <button className="p-2 text-gray-400 hover:text-white transition-colors" title="Attach file">
            <Plus className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-1.5 p-2 text-gray-400 hover:text-white transition-colors" title="Tools">
            <Wand2 className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Tools</span>
          </button>
          
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 resize-none focus:outline-none py-2 text-base"
            rows={1}
            disabled={isLoading}
          />
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors" title="Voice input">
            <Mic className="w-6 h-6" />
          </button>
          
          <button
            onClick={onSend}
            disabled={!canSend}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200
              ${canSend 
                ? 'bg-gray-200 hover:bg-white text-black' 
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}
            title="Send message"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        {/* Disclaimer Text */}
        <p className="text-xs text-gray-600 mt-2 text-center">
          ChatELN can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default MessageInput;