
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Users, Globe } from 'lucide-react';
import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Buddha Statue Wallpaper Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/a1f1537d-1f96-4f39-bc37-29f7b6687cc5.png')`
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Featured Properties */}
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Tokenized Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Invest in premium Amaravati real estate through blockchain tokens. 
                Own fractions of high-value properties with complete transparency.
              </p>
            </div>
            
            <PropertyGrid />
            
            <div className="text-center mt-12">
              <Link to="/properties">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Tokenized Real Estate?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Experience the future of real estate investment with blockchain technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-12 w-12 text-yellow-400" />,
                  title: "High Returns",
                  description: "Target returns of 12-18% annually through rental income and appreciation"
                },
                {
                  icon: <Shield className="h-12 w-12 text-green-400" />,
                  title: "Secure & Transparent",
                  description: "Blockchain-based ownership with smart contracts ensuring transparency"
                },
                {
                  icon: <Users className="h-12 w-12 text-pink-400" />,
                  title: "Fractional Ownership",
                  description: "Invest in premium properties with as little as ₹10,000"
                },
                {
                  icon: <Globe className="h-12 w-12 text-cyan-400" />,
                  title: "Liquid Investment",
                  description: "Trade your tokens on our marketplace anytime"
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-blue-100">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors who are already building wealth through tokenized real estate in Amaravati
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Connect Wallet
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
