
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Users, Zap, Heart, Share2, Clock, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoogleMapsRoute from './GoogleMapsRoute';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const navigate = useNavigate();

  const properties = [
    // Single Family Homes
    {
      id: 1,
      title: "Luxury Single Family Villa",
      location: "Amaravati Capital City - Phase 1",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,25,00,000",
      tokenPrice: "₹350",
      totalTokens: "3,571",
      availableTokens: "1,200",
      expectedReturn: "14.5% p.a.",
      funded: 66,
      investors: 89,
      timeLeft: "32 days",
      roi: "+11.2%",
      verified: true,
      propertyType: "Single Family",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "2,800 sq ft",
      coordinates: { lat: 16.5449, lng: 80.5100, address: "Capital City Phase 1, Amaravati" }
    },
    {
      id: 2,
      title: "Premium Single Family Home",
      location: "Mangalagiri Hills - Sector 7",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹95,00,000",
      tokenPrice: "₹280",
      totalTokens: "3,392",
      availableTokens: "1,896",
      expectedReturn: "16.8% p.a.",
      funded: 44,
      investors: 156,
      timeLeft: "45 days",
      roi: "+13.7%",
      verified: true,
      propertyType: "Single Family",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,200 sq ft",
      coordinates: { lat: 16.4308, lng: 80.5090, address: "Mangalagiri Hills Sector 7" }
    },
    // Multi Family Properties
    {
      id: 3,
      title: "Multi Family Apartment Complex",
      location: "Vijayawada Highway Corridor",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹2,50,00,000",
      tokenPrice: "₹500",
      totalTokens: "5,000",
      availableTokens: "2,100",
      expectedReturn: "18.5% p.a.",
      funded: 78,
      investors: 245,
      timeLeft: "28 days",
      roi: "+15.3%",
      verified: true,
      propertyType: "Multi Family",
      units: 12,
      bedrooms: "2-3 BR Units",
      sqft: "1,200-1,800 sq ft",
      coordinates: { lat: 16.5200, lng: 80.6200, address: "Vijayawada Highway Corridor" }
    },
    {
      id: 4,
      title: "Luxury Multi Family Residences",
      location: "Thullur IT Hub",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹3,75,00,000",
      tokenPrice: "₹625",
      totalTokens: "6,000",
      availableTokens: "1,800",
      expectedReturn: "19.2% p.a.",
      funded: 70,
      investors: 312,
      timeLeft: "35 days",
      roi: "+17.8%",
      verified: true,
      propertyType: "Multi Family",
      units: 18,
      bedrooms: "1-4 BR Units",
      sqft: "800-2,400 sq ft",
      coordinates: { lat: 16.4850, lng: 80.5150, address: "Thullur IT Hub Zone" }
    },
    // Commercial Properties
    {
      id: 5,
      title: "Commercial Office Complex",
      location: "Capital Region Business District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹5,20,00,000",
      tokenPrice: "₹750",
      totalTokens: "6,933",
      availableTokens: "2,450",
      expectedReturn: "22.1% p.a.",
      funded: 64,
      investors: 189,
      timeLeft: "42 days",
      roi: "+18.9%",
      verified: true,
      propertyType: "Commercial",
      floors: 8,
      sqft: "45,000 sq ft",
      coordinates: { lat: 16.5100, lng: 80.5400, address: "Business District, Amaravati" }
    },
    {
      id: 6,
      title: "Retail Shopping Center",
      location: "Amaravati Main Road",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹4,80,00,000",
      tokenPrice: "₹600",
      totalTokens: "8,000",
      availableTokens: "3,200",
      expectedReturn: "20.5% p.a.",
      funded: 60,
      investors: 267,
      timeLeft: "50 days",
      roi: "+16.4%",
      verified: true,
      propertyType: "Commercial",
      stores: 24,
      sqft: "35,000 sq ft",
      coordinates: { lat: 16.5300, lng: 80.5250, address: "Main Road, Amaravati" }
    }
  ];

  // Generate additional properties to reach 48 total
  const generateMoreProperties = () => {
    const additionalProperties = [];
    const locations = [
      "Seed Access Road", "Government Complex Area", "Krishna River Front", "Buddha Park vicinity",
      "International Convention Center", "State Assembly vicinity", "High Court Complex area",
      "Medical College Campus", "University Township", "Eco City Phase 2", "Green City Sector",
      "Smart City Block A", "Tech Park Zone", "Financial District", "Cultural Center area"
    ];
    
    const propertyTypes = [
      { type: "Single Family", priceRange: [80, 150], returnRange: [14, 17] },
      { type: "Multi Family", priceRange: [200, 400], returnRange: [17, 20] },
      { type: "Commercial", priceRange: [300, 600], returnRange: [19, 25] },
      { type: "Townhouse", priceRange: [120, 200], returnRange: [15, 18] },
      { type: "Condo", priceRange: [60, 120], returnRange: [13, 16] },
      { type: "Mixed Use", priceRange: [250, 500], returnRange: [18, 22] }
    ];

    for (let i = 7; i <= 48; i++) {
      const propertyTypeData = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const price = Math.floor(Math.random() * (propertyTypeData.priceRange[1] - propertyTypeData.priceRange[0]) + propertyTypeData.priceRange[0]);
      const expectedReturn = Math.floor(Math.random() * (propertyTypeData.returnRange[1] - propertyTypeData.returnRange[0]) + propertyTypeData.returnRange[0]);
      
      additionalProperties.push({
        id: i,
        title: `${propertyTypeData.type} Property ${i}`,
        location: `${location} - Amaravati`,
        image: `https://images.unsplash.com/photo-${150000000 + i}0000-9999-4444-8888-${100000000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        price: `₹${price},00,000`,
        tokenPrice: `₹${Math.floor(price / 100) * 10}`,
        totalTokens: `${Math.floor(price * 10)}`,
        availableTokens: `${Math.floor(price * 5)}`,
        expectedReturn: `${expectedReturn}.${Math.floor(Math.random() * 9)}% p.a.`,
        funded: Math.floor(Math.random() * 40) + 40,
        investors: Math.floor(Math.random() * 200) + 50,
        timeLeft: `${Math.floor(Math.random() * 60) + 20} days`,
        roi: `+${Math.floor(Math.random() * 10) + 8}.${Math.floor(Math.random() * 9)}%`,
        verified: Math.random() > 0.2,
        propertyType: propertyTypeData.type,
        coordinates: { 
          lat: 16.5 + (Math.random() - 0.5) * 0.2, 
          lng: 80.5 + (Math.random() - 0.5) * 0.2,
          address: `${location}, Amaravati`
        }
      });
    }
    return additionalProperties;
  };

  const allProperties = [...properties, ...generateMoreProperties()];

  const handleStartInvesting = (property: any) => {
    navigate('/properties');
  };

  const handleShowRoute = (property: any) => {
    setSelectedProperty(property);
    setShowMapModal(true);
  };

  const getPropertyTypeColor = (type: string) => {
    switch (type) {
      case 'Single Family': return 'bg-green-100 text-green-800';
      case 'Multi Family': return 'bg-blue-100 text-blue-800';
      case 'Commercial': return 'bg-purple-100 text-purple-800';
      case 'Townhouse': return 'bg-orange-100 text-orange-800';
      case 'Condo': return 'bg-pink-100 text-pink-800';
      case 'Mixed Use': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProperties.map((property) => (
          <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <div className="relative overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {property.verified && (
                  <Badge className="bg-green-600 text-white text-xs">
                    Verified
                  </Badge>
                )}
                <Badge className={`text-xs ${getPropertyTypeColor(property.propertyType)}`}>
                  {property.propertyType}
                </Badge>
                <Badge className="bg-blue-600 text-white text-xs">
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
              <CardTitle className="text-sm font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                {property.title}
              </CardTitle>
              <div className="flex items-center text-gray-600 text-xs">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="line-clamp-1">{property.location}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-gray-900">{property.price}</p>
                  <p className="text-xs text-gray-600">Total Value</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">{property.expectedReturn}</p>
                  <p className="text-xs text-gray-600">Expected Return</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
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
                <div className="flex justify-between text-xs">
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
              
              <div className="flex justify-between items-center text-xs text-gray-600">
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {property.investors} investors
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {property.timeLeft} left
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button 
                  onClick={() => handleStartInvesting(property)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-xs py-2"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  Invest
                </Button>
                <Button 
                  onClick={() => handleShowRoute(property)}
                  variant="outline" 
                  size="sm" 
                  className="px-3"
                  title="Show Route"
                >
                  <Map className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm" className="px-3">
                  <TrendingUp className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map Route Modal */}
      <Dialog open={showMapModal} onOpenChange={setShowMapModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Route to {selectedProperty?.title}</DialogTitle>
          </DialogHeader>
          {selectedProperty && (
            <GoogleMapsRoute propertyLocation={selectedProperty.coordinates} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertyGrid;
