import React, { useState } from 'react';

// Import the new tab component and all the content components

import AccountSettings from '../../components/dashboard/AccountSettings';
import BillingSettings from '../../components/dashboard/BillingSettings';
import SettingsTabs from '../../components/dashboard/SettingsTab';
import ProfileSettings from '../../components/dashboard/ProfileSettings';
import AppearanceSettings from '../../components/dashboard/AppearanceSettings';

// A single placeholder for the remaining tabs
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
                return <AppearanceSettings />;
            case 'Account':
                return <AccountSettings />;
            case 'Privacy':
                return <PlaceholderContent title="Privacy" />;
            case 'Billing':
                return <BillingSettings />;
            case 'Integrations':
                return <PlaceholderContent title="Integrations" />;
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <div className="w-full h-full p-8 text-white bg-[#1c1c1c] overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-gray-300">Settings</h1>
                
                <div className="mt-8">
                    <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                
                <main className="mt-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;