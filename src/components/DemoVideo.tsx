
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Volume2, Maximize, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const DemoVideo = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoScenes = [
    {
      time: "0:00-0:20",
      title: "Introduction to Amaravati",
      description: "Aerial view of Amaravati's skyline, highlighting its development",
      narration: "Welcome to Amaravati, the emerging capital of Andhra Pradesh, where innovation meets opportunity in the real estate sector."
    },
    {
      time: "0:20-0:40", 
      title: "Understanding Real Estate Tokenization",
      description: "Animation illustrating the conversion of physical property into digital tokens",
      narration: "Real estate tokenization involves converting physical properties into digital tokens on a blockchain, enabling fractional ownership and enhanced liquidity."
    },
    {
      time: "0:40-1:00",
      title: "Blockchain Integration in Land Transactions", 
      description: "Graphics showing blockchain securing land records",
      narration: "Blockchain technology secures land records, ensuring transparency and reducing the risk of fraud in property transactions."
    },
    {
      time: "1:00-1:20",
      title: "Government Initiatives and Infrastructure Development",
      description: "Footage of ongoing infrastructure projects in Amaravati", 
      narration: "The Andhra Pradesh government is accelerating development in Amaravati with significant investments in infrastructure, including roads, drainage systems, and public services."
    },
    {
      time: "1:20-1:40",
      title: "Real Estate Revival and Investment Opportunities",
      description: "Before-and-after images of property developments and active construction sites",
      narration: "With renewed political clarity and infrastructure progress, Amaravati's real estate market is witnessing a resurgence, attracting investors and developers alike."
    },
    {
      time: "1:40-2:00", 
      title: "Conclusion and Call to Action",
      description: "Digital representation of a tokenized property portfolio",
      narration: "Embrace the future of real estate investment in Amaravati through tokenization. Join us in shaping the city's smart, transparent, and accessible real estate market."
    }
  ];

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎬 Real Estate Tokenization in Amaravati
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how blockchain technology is transforming real estate transactions in Amaravati, 
              the emerging capital of Andhra Pradesh. Watch our comprehensive demo showcasing the future of property investment.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900">
                {/* YouTube Video Embed */}
                <iframe
                  src="https://www.youtube.com/embed/UbYleYe876c"
                  title="Real Estate Tokenization in Amaravati Demo"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Video Controls Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={openFullscreen}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Scenes Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {videoScenes.map((scene, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">{scene.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{scene.time}</p>
                    <p className="text-gray-500 text-xs">{scene.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <Dialog open={isFullscreen} onOpenChange={closeFullscreen}>
        <DialogContent className="max-w-6xl w-full h-[80vh] p-0">
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Fullscreen YouTube Video */}
            <iframe
              src="https://www.youtube.com/embed/UbYleYe876c?autoplay=1"
              title="Real Estate Tokenization in Amaravati Demo - Fullscreen"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoVideo;
