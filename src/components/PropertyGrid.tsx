
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react';

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Amaravathi Commercial Complex",
      location: "Seed Access Road, Amaravathi",
      price: "₹2,50,00,000",
      tokenPrice: "₹250",
      totalTokens: "1,00,000",
      availableTokens: "45,000",
      expectedReturn: "16.5%",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      category: "Commercial",
      completionDate: "Q2 2025"
    },
    {
      id: 2,
      title: "Luxury Residential Towers",
      location: "Capital Core, Amaravathi",
      price: "₹4,20,00,000",
      tokenPrice: "₹420",
      totalTokens: "1,00,000",
      availableTokens: "28,500",
      expectedReturn: "14.8%",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Hot",
      category: "Residential",
      completionDate: "Q4 2024"
    },
    {
      id: 3,
      title: "IT Park Development",
      location: "Cyber Towers Zone, Amaravathi",
      price: "₹6,75,00,000",
      tokenPrice: "₹675",
      totalTokens: "1,00,000",
      availableTokens: "62,300",
      expectedReturn: "18.2%",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "New",
      category: "Commercial",
      completionDate: "Q1 2026"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-500';
      case 'New': return 'bg-green-500';
      case 'Active': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Commercial': return 'bg-purple-100 text-purple-800';
      case 'Residential': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="relative">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={`${getStatusColor(property.status)} text-white`}>
                {property.status}
              </Badge>
              <Badge className={getCategoryColor(property.category)}>
                {property.category}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <div className="flex items-center text-green-600 font-semibold">
                <TrendingUp className="h-4 w-4 mr-1" />
                {property.expectedReturn}
              </div>
            </div>
          </div>
          
          <CardHeader className="pb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">{property.price}</div>
            <div className="text-sm text-gray-500">Total Property Value</div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="space-y-4">
              {/* Token Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{property.tokenPrice}</div>
                    <div className="text-sm text-gray-500">Per Token</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{property.totalTokens}</div>
                    <div className="text-sm text-gray-500">Total Tokens</div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Available Tokens</span>
                  <span className="text-sm font-semibold text-green-600">{property.availableTokens}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((parseInt(property.totalTokens.replace(',', '')) - parseInt(property.availableTokens.replace(',', ''))) / parseInt(property.totalTokens.replace(',', ''))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {property.completionDate}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {Math.floor(Math.random() * 200) + 50} investors
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Invest Now
                </Button>
                <Button variant="outline" className="px-4">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyGrid;
