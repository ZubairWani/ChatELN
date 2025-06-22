// src/components/session/MessageInput.js

import React from 'react';
// Make sure to import Loader2 from lucide-react
import { Plus, SlidersHorizontal, ArrowUp, Loader2 } from 'lucide-react';

// The component already receives `isLoading` as a prop, which is perfect.
const MessageInput = ({ input, setInput, onSend, isLoading }) => {
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
    <div className="w-full max-w-2xl px-3 sm:px-0">
      <div className="w-full bg-[#2a2a2a] border border-gray-700/60 rounded-2xl p-3 sm:p-4 flex flex-col gap-4 shadow-lg">
        <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="How can I help you today?"
            className="w-full bg-transparent text-gray-200 placeholder-gray-500 resize-none focus:outline-none text-base min-h-[60px]"
            rows={2}
            disabled={isLoading}
        />
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg bg-gray-700/50 hover:bg-gray-600/50" title="Attach file">
                    <Plus className="w-5 h-5" />
                </button>
                 <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg bg-gray-700/50 hover:bg-gray-600/50" title="Settings">
                    <SlidersHorizontal className="w-5 h-5" />
                </button>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm text-gray-400 cursor-pointer hover:text-gray-200">
                    ChatELN 1.2
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50"><path d="M7 10l5 5 5-5H7z" fill="currentColor"></path></svg>
                </div>
                {/* --- THIS IS THE KEY CHANGE --- */}
                <button
                    onClick={onSend}
                    // Disable the button if it's loading OR if there's no text
                    disabled={isLoading || !input.trim()}
                    className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors bg-[#c8794c] hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed"
                    title="Send Message"
                >
                  {isLoading ? (
                    // When loading, show the spinning loader
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    // Otherwise, show the arrow
                    <ArrowUp className="w-5 h-5 text-white" />
                  )}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;