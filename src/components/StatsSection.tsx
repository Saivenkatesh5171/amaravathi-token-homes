
import React from 'react';
import { TrendingUp, DollarSign, Home, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      value: "₹25+ Crores",
      label: "Total Investment Volume",
      growth: "+145%"
    },
    {
      icon: <Home className="h-8 w-8 text-blue-500" />,
      value: "50+",
      label: "Properties Tokenized",
      growth: "+85%"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      value: "2,500+",
      label: "Active Investors",
      growth: "+220%"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      value: "16.2%",
      label: "Average Annual Returns",
      growth: "+12%"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Numbers, Real Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of investors who are already building wealth through our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.growth}
                  </span>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
