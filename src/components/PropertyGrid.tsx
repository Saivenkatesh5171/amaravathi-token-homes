
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Users, Zap, Heart, Share2, Clock, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoogleMapsRoute from './GoogleMapsRoute';
import InvestmentModal from './InvestmentModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [investmentProperty, setInvestmentProperty] = useState<any>(null);
  const navigate = useNavigate();

  // Only the 5 best premium properties with all advanced features
  const properties = [
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
      coordinates: { lat: 16.5449, lng: 80.5100, address: "Capital City Phase 1, Amaravati" },
      features: ["Smart Home Technology", "Solar Panels", "Premium Finishes", "Garden & Pool"],
      esgScore: 92,
      amenities: ["Clubhouse", "Gym", "Swimming Pool", "Children's Play Area", "24/7 Security"]
    },
    {
      id: 2,
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
      coordinates: { lat: 16.5200, lng: 80.6200, address: "Vijayawada Highway Corridor" },
      features: ["Rental Guarantee", "Professional Management", "High Occupancy Area", "Metro Connectivity"],
      esgScore: 88,
      amenities: ["Rooftop Garden", "Community Hall", "Parking", "Power Backup", "Water Treatment"]
    },
    {
      id: 3,
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
      coordinates: { lat: 16.5100, lng: 80.5400, address: "Business District, Amaravati" },
      features: ["Grade A Office Space", "LEED Certified", "High-Speed Elevators", "Conference Centers"],
      esgScore: 95,
      amenities: ["Food Court", "ATM", "Parking", "24/7 Security", "Backup Power", "Fiber Internet"]
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
      coordinates: { lat: 16.4850, lng: 80.5150, address: "Thullur IT Hub Zone" },
      features: ["IT Professional Hub", "Modern Architecture", "Green Building", "Tech Infrastructure"],
      esgScore: 91,
      amenities: ["Co-working Space", "Gym", "Spa", "Cafeteria", "Electric Vehicle Charging"]
    },
    {
      id: 5,
      title: "Premium Mixed-Use Development",
      location: "Amaravati Government Complex Area",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹4,80,00,000",
      tokenPrice: "₹800",
      totalTokens: "6,000",
      availableTokens: "1,680",
      expectedReturn: "20.8% p.a.",
      funded: 72,
      investors: 156,
      timeLeft: "25 days",
      roi: "+19.4%",
      verified: true,
      propertyType: "Mixed Use",
      floors: 12,
      sqft: "65,000 sq ft",
      coordinates: { lat: 16.5300, lng: 80.5250, address: "Government Complex Area, Amaravati" },
      features: ["Retail + Residential", "Prime Location", "Government Proximity", "High Appreciation Potential"],
      esgScore: 94,
      amenities: ["Shopping Mall", "Restaurants", "Banking", "Medical Center", "Entertainment Zone"]
    }
  ];

  const handleStartInvesting = (property: any) => {
    setInvestmentProperty(property);
    setShowInvestmentModal(true);
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
      case 'Mixed Use': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
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
                <Badge className="bg-emerald-600 text-white text-xs">
                  ESG: {property.esgScore}
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

              {/* Key Features */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
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

      {/* Investment Modal */}
      {investmentProperty && (
        <InvestmentModal
          isOpen={showInvestmentModal}
          onClose={() => {
            setShowInvestmentModal(false);
            setInvestmentProperty(null);
          }}
          property={investmentProperty}
        />
      )}
    </>
  );
};

export default PropertyGrid;
