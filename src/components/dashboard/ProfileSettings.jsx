import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProfileSettings = () => {
  return (
    <div className="space-y-10">
      {/* Personal Info Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-400 mb-1">Full name</label>
            <input
              type="text"
              id="full-name"
              defaultValue="zubairwani"
              className="w-full bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="call-you" className="block text-sm font-medium text-gray-400 mb-1">What should we call you?</label>
            <input
              type="text"
              id="call-you"
              defaultValue="zubairwani"
              className="w-full bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="work-function" className="block text-sm font-medium text-gray-400 mb-1">What best describes your work?</label>
          <div className="relative">
            <select
              id="work-function"
              className="w-full appearance-none bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>Select your work function</option>
              <option>Software Development</option>
              <option>Product Management</option>
              <option>Data Science</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mt-6">
            <label htmlFor="preferences" className="block text-sm font-medium text-gray-400 mb-1">
                What personal preferences should Claude consider in responses?
                <span className="ml-2 bg-blue-900/50 text-blue-300 text-xs font-semibold px-2 py-0.5 rounded-full">BETA</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">Your preferences will apply to all conversations, within Anthropic's guidelines. <a href="#" className="underline hover:text-gray-300">Learn about preferences</a></p>
            <textarea
                id="preferences"
                rows="4"
                placeholder="e.g. keep explanations brief and to the point"
                className="w-full bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="border-t border-gray-700/60 pt-8">
         <h2 className="text-xl text-white font-medium">Feature preview</h2>
         <p className="text-sm text-gray-400 mt-2">
            Preview and provide feedback on upcoming enhancements to our platform. Please note: experimental features might influence Claude's behavior and some interactions may differ from the standard experience.
         </p>
      </section>
    </div>
  );
};

export default ProfileSettings;