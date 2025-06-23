import React from 'react';

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ['Profile', 'Appearance', 'Account', 'Privacy', 'Billing', 'Integrations'];

  return (
    <nav className="w-48 flex-shrink-0 pr-8">
      <h1 className="text-3xl font-serif text-gray-400 mb-8">Settings</h1>
      <ul className="space-y-1">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2 rounded-lg text-lg transition-colors
                ${activeTab === tab 
                  ? 'bg-gray-800 text-white font-medium' 
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SettingsSidebar;