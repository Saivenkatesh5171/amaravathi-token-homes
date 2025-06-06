
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Layers } from 'lucide-react';

interface PropertyMapProps {
  coordinates: { lat: number; lng: number };
  title: string;
}

const PropertyMap = ({ coordinates, title }: PropertyMapProps) => {
  // For now, we'll use a placeholder map. In a real implementation, 
  // you would integrate with Google Maps, Mapbox, or similar service
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=15&size=600x300&markers=color:red%7C${coordinates.lat},${coordinates.lng}&key=YOUR_API_KEY`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Location & Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Interactive Map Placeholder */}
          <div className="relative bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-400">Lat: {coordinates.lat}, Lng: {coordinates.lng}</p>
            </div>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Navigation className="h-4 w-4" />
                <span className="font-medium">Distance to City Center</span>
              </div>
              <p className="text-blue-900 font-semibold">2.4 km</p>
            </div>

            <div className="bg-green-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-green-700 mb-1">
                <Layers className="h-4 w-4" />
                <span className="font-medium">Zone</span>
              </div>
              <p className="text-green-900 font-semibold">Commercial District</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-purple-700 mb-1">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Development Phase</span>
              </div>
              <p className="text-purple-900 font-semibold">Phase 2</p>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Nearby Landmarks</h4>
            <div className="space-y-2">
              {[
                { name: "Amaravathi Government Complex", distance: "1.2 km", type: "Government" },
                { name: "Capital Region Development Authority", distance: "800 m", type: "Office" },
                { name: "Vijayawada Airport", distance: "15 km", type: "Transport" },
                { name: "Proposed Metro Station", distance: "500 m", type: "Transport" }
              ].map((landmark, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <span className="font-medium text-gray-900">{landmark.name}</span>
                    <Badge variant="outline" className="ml-2 text-xs">{landmark.type}</Badge>
                  </div>
                  <span className="text-sm text-gray-600">{landmark.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyMap;
