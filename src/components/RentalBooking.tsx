
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  CalendarIcon, 
  Clock, 
  CreditCard, 
  Users, 
  Wifi,
  Car,
  Shield,
  Coffee
} from 'lucide-react';

interface Property {
  rentalPerDay: string;
  rentalAvailable: boolean;
  amenities: string[];
  title: string;
}

interface RentalBookingProps {
  property: Property;
}

const RentalBooking = ({ property }: RentalBookingProps) => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState('1');

  const calculateDays = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculateTotal = () => {
    const days = calculateDays();
    const dailyRate = parseInt(property.rentalPerDay.replace(/[₹,]/g, ''));
    return days * dailyRate;
  };

  const days = calculateDays();
  const total = calculateTotal();

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi ready': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case '24/7 security': return <Shield className="h-4 w-4" />;
      default: return <Coffee className="h-4 w-4" />;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Booking Form */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Book Your Stay
            </CardTitle>
          </CardHeader>
          <CardContent>
            {property.rentalAvailable ? (
              <div className="space-y-6">
                {/* Date Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Check-in Date</Label>
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Check-out Date</Label>
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                      className="rounded-md border"
                    />
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <Label htmlFor="guests" className="text-sm font-medium">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Duration & Price Display */}
                {days > 0 && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-blue-700 mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Booking Summary</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold">{days} day{days > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rate per day:</span>
                        <span className="font-semibold">{property.rentalPerDay}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-blue-900 pt-2 border-t border-blue-200">
                        <span>Total Amount:</span>
                        <span>₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-500 mb-4">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Rental Not Available</p>
                  <p className="text-sm">This property is currently not available for rental.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Amenities */}
        <Card>
          <CardHeader>
            <CardTitle>Included Amenities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  {getAmenityIcon(amenity)}
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Booking Summary & Payment */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{property.rentalPerDay}</div>
                <div className="text-sm text-gray-500">per day</div>
              </div>

              {days > 0 && (
                <>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span className="font-medium">{checkIn?.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span className="font-medium">{checkOut?.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span className="font-medium">{guests}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total ({days} days):</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Book Now - ₹{total.toLocaleString()}
                  </Button>
                </>
              )}

              {!checkOut && (
                <div className="text-center text-gray-500 text-sm py-4">
                  Select check-out date to see total price
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rental Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Free</Badge>
                <span>Cancellation up to 24h before</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Required</Badge>
                <span>Security deposit: ₹5,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">3 PM</Badge>
                <span>Standard check-in time</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">11 AM</Badge>
                <span>Standard check-out time</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Current Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="bg-red-50 border border-red-200 rounded p-2">
                <div className="font-medium text-red-800">Dec 15-18, 2024</div>
                <div className="text-red-600">Booked</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                <div className="font-medium text-yellow-800">Dec 22-25, 2024</div>
                <div className="text-yellow-600">Pending</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-2">
                <div className="font-medium text-green-800">All other dates</div>
                <div className="text-green-600">Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RentalBooking;
