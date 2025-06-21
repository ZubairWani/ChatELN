import React from 'react';

const AdminDashboardPage = () => {
  
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-6 text-text-secondary">This page should be protected and only visible to users with an 'admin' role.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-surface p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Team Management</h2>
          <p className="text-text-secondary">View, add, or remove team members.</p>
          {/* TODO: Implement User Management Component */}
        </div>

        <div className="bg-surface p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Usage Analytics</h2>
          <p className="text-text-secondary">High-level insights into team usage.</p>
          {/* TODO: Implement Analytics Chart Component */}
        </div>

        <div className="bg-surface p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Session Templates</h2>
          <p className="text-text-secondary">Create and manage shared session templates.</p>
          {/* TODO: Implement Template Management Component */}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboardPage;
