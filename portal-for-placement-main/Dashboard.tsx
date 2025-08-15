import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back, {user?.email}</p>
        
        {/* Dashboard content will be implemented in the next step */}
        <div className="mt-6 bg-white shadow rounded-lg p-6">
          <p className="text-gray-500">Dashboard content coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
