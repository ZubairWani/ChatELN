import React from 'react';
import { Search, Plus } from 'lucide-react';

const SearchChatsPage = () => {
  return (
    <div className="w-full h-full p-8 text-white bg-[#1c1c1c]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-serif text-gray-300">Your chat history</h1>
          <button className="flex items-center gap-2 bg-gray-200 text-black font-semibold px-4 py-2 rounded-lg hover:bg-white transition-colors">
            <Plus className="w-5 h-5" />
            New chat
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search your chats..."
            className="w-full bg-[#2a2a2a] border border-blue-500/50 rounded-xl p-4 pl-14 text-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Helper Text */}
        <p className="mt-4 text-sm text-gray-500">
          You have 13 previous chats with Claude. <a href="#" className="text-blue-400 font-medium underline">Select</a>
        </p>
      </div>
    </div>
  );
};

export default SearchChatsPage;