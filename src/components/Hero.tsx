
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Real Estate Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-indigo-800/90" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0), radial-gradient(circle at 75px 75px, white 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Invest in
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Amaravati's Future
            </span>
            Through Tokens
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary blockchain-powered real estate investment platform. 
            Own fractions of premium properties in India's emerging capital city with complete transparency and liquidity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Investing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">₹2.5Cr+</div>
              <div className="text-blue-200">Total Property Value</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-200">Active Investors</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">15.2%</div>
              <div className="text-blue-200">Average Returns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
    </section>
  );
};

export default Hero;
