
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, Search, CreditCard, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12 text-blue-500" />,
      title: "Create Account",
      description: "Sign up and complete KYC verification to get started with tokenized real estate investment"
    },
    {
      icon: <Search className="h-12 w-12 text-green-500" />,
      title: "Browse Properties",
      description: "Explore our curated selection of premium Amaravathi properties with detailed analytics"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-purple-500" />,
      title: "Buy Tokens",
      description: "Purchase property tokens using crypto or fiat currency starting from just ₹10,000"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
      title: "Earn Returns",
      description: "Receive rental income and capital appreciation directly to your wallet"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start investing in tokenized real estate in just 4 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
