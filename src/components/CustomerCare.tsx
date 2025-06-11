
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Mail, Clock, Star, ExternalLink, Send } from 'lucide-react';

const CustomerCare = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitMessage = async () => {
    if (!message.trim()) return;
    
    setIsSubmitting(true);
    // Simulate message submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Message sent successfully! Our team will get back to you within 24 hours.');
    setMessage('');
    setIsSubmitting(false);
  };

  const googleReviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      review: "Excellent platform for real estate investment. Very transparent and user-friendly.",
      date: "2 weeks ago"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      review: "Great returns on my investment. The tokenization process is seamless and secure.",
      date: "1 month ago"
    },
    {
      name: "Amit Patel",
      rating: 4,
      review: "Good platform with innovative approach to real estate investment. Highly recommend!",
      date: "2 months ago"
    }
  ];

  return (
    <section className="py-20 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Care & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your real estate investment needs. 
            Reach out to our dedicated support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-blue-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-green-600">support@amaravati-tokens.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-purple-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Message */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Quick Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button 
                  onClick={handleSubmitMessage}
                  disabled={!message.trim() || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Google Reviews Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Google Reviews
                  </span>
                  <Badge className="bg-green-600">4.8/5</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {googleReviews.map((review, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{review.review}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.google.com/search?q=amaravati+tokens+reviews', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View All Google Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">How do I start investing?</p>
                  <p className="text-xs text-gray-600">Simply create an account, browse properties, and click "Start Investing" on any property.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">What is the minimum investment?</p>
                  <p className="text-xs text-gray-600">You can start investing with as little as ₹10,000 through our tokenization system.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">How are returns distributed?</p>
                  <p className="text-xs text-gray-600">Returns are distributed quarterly based on rental income and property appreciation.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;
