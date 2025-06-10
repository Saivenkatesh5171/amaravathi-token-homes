
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Users, Calendar, ArrowRight, Star, Heart, Share2, Clock, Shield, Zap } from 'lucide-react';

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Amaravati Commercial Complex",
      location: "Seed Access Road, Amaravati",
      price: "₹2,50,00,000",
      tokenPrice: "₹250",
      totalTokens: "1,00,000",
      availableTokens: "45,000",
      expectedReturn: "16.5%",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      category: "Commercial",
      completionDate: "Q2 2025",
      rating: 4.8,
      verified: true,
      trending: true
    },
    {
      id: 2,
      title: "Luxury Residential Towers",
      location: "Capital Core, Amaravati",
      price: "₹4,20,00,000",
      tokenPrice: "₹420",
      totalTokens: "1,00,000",
      availableTokens: "28,500",
      expectedReturn: "14.8%",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Hot",
      category: "Residential",
      completionDate: "Q4 2024",
      rating: 4.9,
      verified: true,
      trending: false
    },
    {
      id: 3,
      title: "IT Park Development",
      location: "Cyber Towers Zone, Amaravati",
      price: "₹6,75,00,000",
      tokenPrice: "₹675",
      totalTokens: "1,00,000",
      availableTokens: "62,300",
      expectedReturn: "18.2%",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "New",
      category: "Commercial",
      completionDate: "Q1 2026",
      rating: 4.7,
      verified: true,
      trending: true
    },
    {
      id: 4,
      title: "Waterfront Villas",
      location: "Krishna River Front, Amaravati",
      price: "₹8,50,00,000",
      tokenPrice: "₹850",
      totalTokens: "1,00,000",
      availableTokens: "72,400",
      expectedReturn: "15.6%",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Premium",
      category: "Residential",
      completionDate: "Q3 2025",
      rating: 4.9,
      verified: true,
      trending: false
    },
    {
      id: 5,
      title: "Government Quarter Redevelopment",
      location: "Administrative Zone, Amaravati",
      price: "₹12,00,00,000",
      tokenPrice: "₹1,200",
      totalTokens: "1,00,000",
      availableTokens: "89,200",
      expectedReturn: "13.4%",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Government",
      category: "Mixed",
      completionDate: "Q1 2025",
      rating: 4.6,
      verified: true,
      trending: false
    },
    {
      id: 6,
      title: "Smart City Mall Complex",
      location: "Thullur Junction, Amaravati",
      price: "₹15,75,00,000",
      tokenPrice: "₹1,575",
      totalTokens: "1,00,000",
      availableTokens: "34,800",
      expectedReturn: "19.8%",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Hot",
      category: "Commercial",
      completionDate: "Q2 2026",
      rating: 4.8,
      verified: true,
      trending: true
    },
    {
      id: 7,
      title: "Educational Hub Campus",
      location: "University Zone, Amaravati",
      price: "₹3,25,00,000",
      tokenPrice: "₹325",
      totalTokens: "1,00,000",
      availableTokens: "56,700",
      expectedReturn: "16.2%",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      category: "Educational",
      completionDate: "Q4 2025",
      rating: 4.7,
      verified: true,
      trending: false
    },
    {
      id: 8,
      title: "Healthcare City Project",
      location: "Medical District, Amaravati",
      price: "₹9,80,00,000",
      tokenPrice: "₹980",
      totalTokens: "1,00,000",
      availableTokens: "41,300",
      expectedReturn: "17.9%",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Premium",
      category: "Healthcare",
      completionDate: "Q3 2026",
      rating: 4.9,
      verified: true,
      trending: true
    },
    {
      id: 9,
      title: "Eco-Smart Residences",
      location: "Green Valley, Amaravati",
      price: "₹5,60,00,000",
      tokenPrice: "₹560",
      totalTokens: "1,00,000",
      availableTokens: "67,800",
      expectedReturn: "14.3%",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Green",
      category: "Residential",
      completionDate: "Q1 2025",
      rating: 4.8,
      verified: true,
      trending: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-500';
      case 'New': return 'bg-green-500';
      case 'Active': return 'bg-blue-500';
      case 'Premium': return 'bg-purple-500';
      case 'Government': return 'bg-orange-500';
      case 'Green': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Commercial': return 'bg-purple-100 text-purple-800';
      case 'Residential': return 'bg-green-100 text-green-800';
      case 'Mixed': return 'bg-blue-100 text-blue-800';
      case 'Educational': return 'bg-yellow-100 text-yellow-800';
      case 'Healthcare': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
          <div className="relative">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              <Badge className={`${getStatusColor(property.status)} text-white`}>
                {property.status}
              </Badge>
              <Badge className={getCategoryColor(property.category)}>
                {property.category}
              </Badge>
              {property.trending && (
                <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  Trending
                </Badge>
              )}
            </div>

            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
              <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                <Share2 className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* ROI Badge */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <div className="flex items-center text-green-600 font-semibold">
                <TrendingUp className="h-4 w-4 mr-1" />
                {property.expectedReturn}
              </div>
            </div>
          </div>
          
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900 flex-1">{property.title}</h3>
              {property.verified && (
                <Shield className="h-5 w-5 text-green-500 ml-2" />
              )}
            </div>
            
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium ml-1">{property.rating}</span>
              </div>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{Math.floor(Math.random() * 200) + 50} reviews</span>
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

              {/* Availability Progress */}
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

              {/* Time Remaining */}
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-center text-blue-700 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Early bird pricing ends in 5 days</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Invest Now
                </Button>
                <Link to={`/property/${property.id}`}>
                  <Button variant="outline" className="px-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyGrid;
