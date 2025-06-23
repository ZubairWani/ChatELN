import React, { useState } from 'react';
import SettingsSidebar from '../../components/dashboard/SettingsSidebar';
import ProfileSettings from '../../components/dashboard/ProfileSettings';


// Placeholder for other setting pages
const PlaceholderContent = ({ title }) => (
    <div>
        <h1 className="text-2xl text-white font-semibold">{title}</h1>
        <p className="text-gray-400 mt-4">Settings for {title} will be available here soon.</p>
    </div>
);

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'Profile':
                return <ProfileSettings />;
            case 'Appearance':
                return <PlaceholderContent title="Appearance" />;
            case 'Account':
                return <PlaceholderContent title="Account" />;
            // Add other cases here
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <div className="flex w-full h-full p-8 text-white bg-[#1c1c1c]">
            <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 pl-8">
                {renderContent()}
            </main>
        </div>
    );
};

export default SettingsPage;