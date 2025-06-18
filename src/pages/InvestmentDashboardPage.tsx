
import React from 'react';
import Navigation from '@/components/Navigation';
import InvestmentDashboard from '@/components/InvestmentDashboard';

const InvestmentDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Investment Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your Amaravati real estate investments</p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto">
        <InvestmentDashboard />
      </div>
    </div>
  );
};

export default InvestmentDashboardPage;
