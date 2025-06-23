import React from 'react';
import { ChevronDown } from 'lucide-react';

// A helper component to create consistent section styling
const FormSection = ({ title, description, children }) => (
    <section className="bg-[#2a2a2a]/50 border border-gray-700/60 rounded-xl">
        <div className="p-6">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            {description && <p className="mt-1 text-sm text-gray-400">{description}</p>}
        </div>
        <div className="bg-black/10 px-6 py-8">
            {children}
        </div>
    </section>
);

// Reusable styled input component
const Input = (props) => (
    <input
        {...props}
        className="w-full bg-[#1e1e1e] border border-gray-600 rounded-lg p-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
);

const ProfileSettings = () => {
  return (
    <div className="space-y-8 pb-24"> {/* Added padding-bottom to avoid overlap with save bar */}
      
      {/* User Profile Section */}
      <FormSection
        title="User Profile"
        description="This information will be displayed on your profile."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-400 mb-1.5">Full name</label>
            <Input type="text" id="full-name" defaultValue="zubairwani" />
          </div>
          <div>
            <label htmlFor="display-name" className="block text-sm font-medium text-gray-400 mb-1.5">Display name</label>
            <Input type="text" id="display-name" defaultValue="zubairwani" />
          </div>
        </div>
      </FormSection>

      {/* Work Information Section */}
      <FormSection
        title="Work Information"
        description="Help us understand how you use our product."
      >
        <div>
          <label htmlFor="work-function" className="block text-sm font-medium text-gray-400 mb-1.5">What best describes your work?</label>
          <div className="relative">
            <select
              id="work-function"
              className="w-full appearance-none bg-[#1e1e1e] border border-gray-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>Select your work function</option>
              <option>Software Development</option>
              <option>Product Management</option>
              <option>Data Science</option>
              <option>Marketing</option>
              <option>Student</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </FormSection>

      {/* Custom Instructions Section (Re-branded) */}
      <FormSection
        title="Custom Instructions"
        description="Provide custom instructions for ChatELN to follow in its responses. This will apply to all new conversations."
      >
        <textarea
            id="preferences"
            rows="5"
            placeholder="e.g., Always respond in a formal tone. Prefer code examples in TypeScript."
            className="w-full bg-[#1e1e1e] border border-gray-600 rounded-lg p-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
      </FormSection>

      {/* Feature Preview Section (Styled consistently) */}
       <FormSection
        title="Feature Preview"
        description="Preview upcoming enhancements. Note: experimental features might influence behavior and differ from the standard experience."
       >
        {/* You could add toggles for specific beta features here */}
        <p className="text-sm text-gray-500">No experimental features are available to preview at this time.</p>
       </FormSection>

       {/* Sticky Save Bar */}
       <div className="fixed bottom-0 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-8">
             <div className="flex justify-end bg-[#1c1c1c]/80 backdrop-blur-sm border-t border-gray-700/60 py-4">
                <button className="bg-white text-black font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Save Changes
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ProfileSettings;