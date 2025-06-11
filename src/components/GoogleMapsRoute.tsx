
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Route, Car, Clock, Ruler, Locate } from 'lucide-react';

interface GoogleMapsRouteProps {
  propertyLocation: {
    lat: number;
    lng: number;
    address: string;
  };
}

const GoogleMapsRoute: React.FC<GoogleMapsRouteProps> = ({ propertyLocation }) => {
  const [userLocation, setUserLocation] = useState('');
  const [routeData, setRouteData] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`);
          console.log('Current location:', latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your current location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const calculateRoute = async () => {
    if (!userLocation.trim()) return;
    
    setIsCalculating(true);
    
    try {
      // Simulate route calculation with real-looking data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock route data with realistic values
      setRouteData({
        distance: '12.5 km',
        duration: '25 mins',
        traffic: 'Light traffic',
        route: 'Via Ring Road & Outer Ring Road',
        alternatives: [
          { name: 'Fastest Route', distance: '12.5 km', duration: '25 mins', traffic: 'Light' },
          { name: 'Shortest Route', distance: '11.8 km', duration: '32 mins', traffic: 'Moderate' },
          { name: 'Avoid Tolls', distance: '15.2 km', duration: '35 mins', traffic: 'Light' }
        ]
      });
    } catch (error) {
      console.error('Route calculation failed:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  const openGoogleMaps = () => {
    const destination = `${propertyLocation.lat},${propertyLocation.lng}`;
    const origin = userLocation.trim();
    const url = `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${destination}`;
    window.open(url, '_blank');
  };

  const openGoogleMapsEmbedded = () => {
    const destination = encodeURIComponent(propertyLocation.address);
    const origin = encodeURIComponent(userLocation);
    const embedUrl = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${origin}&destination=${destination}&mode=driving`;
    
    // For demonstration, open in new tab with regular Google Maps
    const url = `https://www.google.com/maps/dir/${encodeURIComponent(userLocation)}/${encodeURIComponent(propertyLocation.address)}`;
    window.open(url, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Route className="h-5 w-5" />
          Route to Property
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Property Location */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-700 mb-1">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">Property Location</span>
          </div>
          <p className="text-blue-900 text-sm">{propertyLocation.address}</p>
          <p className="text-blue-700 text-xs mt-1">
            Coordinates: {propertyLocation.lat}, {propertyLocation.lng}
          </p>
        </div>

        {/* User Location Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Starting Location</label>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your location (address, landmark, etc.)"
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={getCurrentLocation}
              variant="outline"
              size="sm"
              className="px-3"
              title="Use current location"
            >
              <Locate className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={calculateRoute}
              disabled={!userLocation.trim() || isCalculating}
              className="flex-1"
            >
              {isCalculating ? 'Calculating...' : 'Get Route'}
            </Button>
            <Button 
              onClick={openGoogleMapsEmbedded}
              disabled={!userLocation.trim()}
              variant="outline"
              className="flex-1"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Open Maps
            </Button>
          </div>
        </div>

        {/* Route Results */}
        {routeData && (
          <div className="space-y-4">
            {/* Primary Route */}
            <div className="border rounded-lg p-4 bg-green-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-green-900">Recommended Route</h4>
                <Badge className="bg-green-600">{routeData.traffic}</Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <Ruler className="h-5 w-5 mx-auto text-green-600 mb-1" />
                  <p className="text-lg font-semibold text-green-900">{routeData.distance}</p>
                  <p className="text-xs text-green-700">Distance</p>
                </div>
                <div className="text-center">
                  <Clock className="h-5 w-5 mx-auto text-green-600 mb-1" />
                  <p className="text-lg font-semibold text-green-900">{routeData.duration}</p>
                  <p className="text-xs text-green-700">Duration</p>
                </div>
                <div className="text-center">
                  <Car className="h-5 w-5 mx-auto text-green-600 mb-1" />
                  <p className="text-lg font-semibold text-green-900">By Car</p>
                  <p className="text-xs text-green-700">Transport</p>
                </div>
              </div>
              
              <p className="text-sm text-green-800 mb-3">{routeData.route}</p>
              
              <Button 
                onClick={openGoogleMaps}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Open in Google Maps
              </Button>
            </div>

            {/* Alternative Routes */}
            <div>
              <h5 className="font-medium mb-3">Alternative Routes</h5>
              <div className="space-y-2">
                {routeData.alternatives.map((alt: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div>
                      <p className="font-medium text-sm">{alt.name}</p>
                      <p className="text-xs text-gray-600">{alt.distance} • {alt.duration}</p>
                    </div>
                    <Badge variant={alt.traffic === 'Light' ? 'default' : 'secondary'}>
                      {alt.traffic}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Interactive Map Embed */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 h-48 flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">Interactive Map</p>
              <p className="text-xs text-gray-400">Click "Open Maps" for navigation</p>
            </div>
            <Button 
              onClick={openGoogleMapsEmbedded}
              className="absolute bottom-3 right-3"
              size="sm"
            >
              View Full Map
            </Button>
          </div>
        </div>

        {/* Nearby Transportation */}
        <div className="border-t pt-4">
          <h5 className="font-medium mb-3">Nearby Transportation</h5>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-50 rounded p-2">
              <p className="font-medium">Metro Station</p>
              <p className="text-gray-600">Amaravati Metro - 800m</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="font-medium">Bus Stop</p>
              <p className="text-gray-600">City Bus Stand - 200m</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="font-medium">Airport</p>
              <p className="text-gray-600">Vijayawada Airport - 15km</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="font-medium">Railway</p>
              <p className="text-gray-600">Vijayawada Junction - 18km</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMapsRoute;
