
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Users, Zap, Heart, Share2, Clock } from 'lucide-react';
import InvestmentModal from './InvestmentModal';

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);

  const properties = [
    {
      id: 1,
      title: "Luxury Apartments in Capital Region",
      location: "Amaravati Capital City",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹85,00,000",
      tokenPrice: "₹250",
      totalTokens: "3,400",
      availableTokens: "2,100",
      expectedReturn: "16.5% p.a.",
      funded: 78,
      investors: 156,
      timeLeft: "45 days",
      roi: "+12.3%",
      verified: true
    },
    {
      id: 2,
      title: "Commercial Complex",
      location: "Vijayawada Highway",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,20,00,000",
      tokenPrice: "₹350",
      totalTokens: "3,428",
      availableTokens: "1,542",
      expectedReturn: "18.2% p.a.",
      funded: 85,
      investors: 203,
      timeLeft: "28 days",
      roi: "+15.7%",
      verified: true
    },
    {
      id: 3,
      title: "Residential Villas",
      location: "Mangalagiri Hills",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹95,00,000",
      tokenPrice: "₹280",
      totalTokens: "3,392",
      availableTokens: "1,896",
      expectedReturn: "14.8% p.a.",
      funded: 65,
      investors: 128,
      timeLeft: "60 days",
      roi: "+9.8%",
      verified: true
    }
  ];

  const handleStartInvesting = (property: any) => {
    setSelectedProperty(property);
    setShowInvestmentModal(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <div className="relative overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {property.verified && (
                  <Badge className="bg-green-600 text-white">
                    Verified
                  </Badge>
                )}
                <Badge className="bg-blue-600 text-white">
                  {property.roi}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                {property.title}
              </CardTitle>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{property.price}</p>
                  <p className="text-sm text-gray-600">Total Value</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">{property.expectedReturn}</p>
                  <p className="text-sm text-gray-600">Expected Return</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Token Price</p>
                  <p className="font-semibold">{property.tokenPrice}</p>
                </div>
                <div>
                  <p className="text-gray-600">Available</p>
                  <p className="font-semibold">{property.availableTokens}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Funding Progress</span>
                  <span>{property.funded}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${property.funded}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {property.investors} investors
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {property.timeLeft} left
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button 
                  onClick={() => handleStartInvesting(property)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Start Investing
                </Button>
                <Button variant="outline" size="sm" className="px-4">
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Modal */}
      {selectedProperty && (
        <InvestmentModal
          isOpen={showInvestmentModal}
          onClose={() => setShowInvestmentModal(false)}
          property={selectedProperty}
        />
      )}
    </>
  );
};

export default PropertyGrid;
