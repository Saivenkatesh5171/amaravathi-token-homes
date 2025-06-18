import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  Calendar as CalendarIcon, 
  Download,
  Shield,
  ArrowLeft,
  Heart,
  Share2,
  Calculator
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import PropertyMap from '@/components/PropertyMap';
import RentalBooking from '@/components/RentalBooking';
import GoogleMapsRoute from '@/components/GoogleMapsRoute';
import InvestmentModal from '@/components/InvestmentModal';
import LegalRightsModal from '@/components/LegalRightsModal';

const PropertyDetail = () => {
  const { id } = useParams();
  const [selectedDates, setSelectedDates] = useState<Date | undefined>(new Date());
  const [tokenAmount, setTokenAmount] = useState('');
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);

  // Mock property data - in real app, this would come from API
  const property = {
    id: 1,
    title: "Amaravathi Commercial Complex",
    location: "Seed Access Road, Amaravathi",
    coordinates: { lat: 16.5062, lng: 80.6480 },
    price: "₹2,50,00,000",
    tokenPrice: "₹250",
    totalTokens: "1,00,000",
    availableTokens: "45,000",
    expectedReturn: "16.5%",
    rentalPerDay: "₹750",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    category: "Commercial",
    completionDate: "Q2 2025",
    description: "Premium commercial complex in the heart of Amaravathi's business district. Features modern amenities, strategic location, and high rental yield potential.",
    amenities: ["24/7 Security", "Power Backup", "Parking", "Elevator", "WiFi Ready"],
    rentalAvailable: true,
    occupancyRate: "85%",
    monthlyRental: "₹22,500"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/properties">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Properties
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {property.images.slice(1).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 lg:h-44 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ownership">Ownership</TabsTrigger>
            <TabsTrigger value="rental">Rental</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{property.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label className="text-sm font-medium text-gray-500">Category</Label>
                        <p className="text-lg font-semibold">{property.category}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-500">Completion</Label>
                        <p className="text-lg font-semibold">{property.completionDate}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-500">Occupancy Rate</Label>
                        <p className="text-lg font-semibold text-green-600">{property.occupancyRate}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-500">Monthly Rental</Label>
                        <p className="text-lg font-semibold">{property.monthlyRental}</p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-500 mb-2 block">Amenities</Label>
                      <div className="flex flex-wrap gap-2">
                        {property.amenities.map((amenity, index) => (
                          <Badge key={index} variant="secondary">{amenity}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <PropertyMap coordinates={property.coordinates} title={property.title} />
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      Investment Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{property.price}</div>
                        <div className="text-sm text-gray-500">Total Property Value</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-semibold">{property.tokenPrice}</div>
                          <div className="text-xs text-gray-500">Per Token</div>
                        </div>
                        <div>
                          <div className="text-xl font-semibold text-green-600">{property.expectedReturn}</div>
                          <div className="text-xs text-gray-500">Expected Return</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Available Tokens</span>
                          <span className="text-sm font-semibold">{property.availableTokens}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                            style={{ width: '55%' }}
                          ></div>
                        </div>
                      </div>

                      <Button 
                        onClick={() => setShowInvestmentModal(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Invest Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="tokens">Number of Tokens</Label>
                        <Input 
                          id="tokens"
                          placeholder="Enter token amount"
                          value={tokenAmount}
                          onChange={(e) => setTokenAmount(e.target.value)}
                        />
                      </div>
                      {tokenAmount && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600">Investment Amount</div>
                          <div className="text-lg font-semibold text-blue-600">
                            ₹{(parseInt(tokenAmount) * 250).toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Estimated annual return: ₹{(parseInt(tokenAmount) * 250 * 0.165).toLocaleString()}
                          </div>
                        </div>
                      )}
                      <Button variant="outline" className="w-full">
                        <Calculator className="h-4 w-4 mr-2" />
                        Detailed Calculator
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ownership">
            <Card>
              <CardHeader>
                <CardTitle>Token Ownership Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Ownership Structure</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Tokens:</span>
                        <span className="font-semibold">{property.totalTokens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Available for Purchase:</span>
                        <span className="font-semibold text-green-600">{property.availableTokens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Already Sold:</span>
                        <span className="font-semibold">55,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Investors:</span>
                        <span className="font-semibold">127</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Your Holdings</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 text-center">Connect your wallet to view holdings</p>
                      <Button variant="outline" className="w-full mt-3">
                        Connect Wallet
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rental">
            <RentalBooking property={property} />
          </TabsContent>

          <TabsContent value="legal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Legal Documents & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Property Title Deed", type: "PDF", size: "2.1 MB" },
                      { name: "RERA Certificate", type: "PDF", size: "1.5 MB" },
                      { name: "Smart Contract Code", type: "SOL", size: "45 KB" },
                      { name: "Legal Opinion", type: "PDF", size: "3.2 MB" },
                      { name: "Token Terms & Conditions", type: "PDF", size: "890 KB" },
                      { name: "Compliance Report", type: "PDF", size: "1.2 MB" }
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-500">{doc.type} • {doc.size}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800">
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">Verified & Compliant</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      All legal documents have been verified by our legal team and comply with Indian real estate regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Investment Modal */}
      <InvestmentModal
        isOpen={showInvestmentModal}
        onClose={() => setShowInvestmentModal(false)}
        property={property}
      />
    </div>
  );
};

export default PropertyDetail;
