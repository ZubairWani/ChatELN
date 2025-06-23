import React from 'react';

const AccountSettings = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl text-white font-medium">Email Address</h2>
        <p className="text-sm text-gray-400 mt-1">Your current email address is <span className="font-medium text-gray-200">zubairwani@example.com</span></p>
      </section>

      <section className="border-t border-gray-700/60 pt-8">
        <h2 className="text-xl text-white font-medium">Change Password</h2>
        <div className="mt-4 space-y-4 max-w-sm">
            <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-400 mb-1">Current password</label>
                <input type="password" id="current-password" className="w-full bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-400 mb-1">New password</label>
                <input type="password" id="new-password" className="w-full bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Update Password</button>
        </div>
      </section>

      <section className="border-t border-red-500/30 pt-8">
        <h2 className="text-xl text-red-400 font-medium">Delete Account</h2>
        <p className="text-sm text-gray-400 mt-1">Permanently delete your account and all of your data. This action cannot be undone.</p>
        <button className="mt-4 bg-red-600/80 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">Delete My Account</button>
      </section>
    </div>
  );
};

export default AccountSettings;