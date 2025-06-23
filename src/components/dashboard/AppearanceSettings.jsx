import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const AppearanceSettings = () => {
    return (
        <div>
            <h2 className="text-xl text-white font-medium">Theme</h2>
            <p className="text-sm text-gray-400 mt-1">Select how your interface should look.</p>
            <fieldset className="mt-6">
                <legend className="sr-only">Theme options</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Light Theme */}
                    <label className="relative flex flex-col items-center justify-center p-4 bg-[#2a2a2a] border border-gray-700/60 rounded-lg cursor-pointer hover:bg-gray-700/50">
                        <input type="radio" name="theme-option" value="light" className="sr-only" />
                        <Sun className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-white">Light</span>
                    </label>
                    {/* Dark Theme */}
                    <label className="relative flex flex-col items-center justify-center p-4 bg-[#2a2a2a] border-2 border-blue-500 rounded-lg cursor-pointer">
                        <input type="radio" name="theme-option" value="dark" className="sr-only" defaultChecked />
                        <Moon className="w-8 h-8 text-white mb-2" />
                        <span className="text-white">Dark</span>
                        <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-[#2a2a2a]"></div>
                    </label>
                    {/* System Theme */}
                    <label className="relative flex flex-col items-center justify-center p-4 bg-[#2a2a2a] border border-gray-700/60 rounded-lg cursor-pointer hover:bg-gray-700/50">
                        <input type="radio" name="theme-option" value="system" className="sr-only" />
                        <Monitor className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-white">System</span>
                    </label>
                </div>
            </fieldset>
        </div>
    );
};

export default AppearanceSettings;