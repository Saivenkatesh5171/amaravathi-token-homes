
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2, Maximize, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const DemoVideo = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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
