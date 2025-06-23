import React from 'react';

const SettingsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Profile', 'Appearance', 'Account', 'Privacy', 'Billing', 'Integrations'];

  return (
    <nav className="border-b border-gray-700/60">
      <ul className="flex items-center gap-6 text-lg">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`py-4 transition-all duration-200 border-b-2
                ${activeTab === tab 
                  ? 'border-white text-white font-medium' 
                  : 'border-transparent text-gray-400 hover:text-white'
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

export default SettingsTabs;