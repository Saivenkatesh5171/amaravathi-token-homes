
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Volume2, Maximize, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsPlaying(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our platform demo to understand how you can invest in tokenized real estate 
              and start building your portfolio in Amaravati's premium properties.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900">
                {/* Video Thumbnail/Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    onClick={openFullscreen}
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-6 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Amaravati Tokenized Real Estate Platform Demo
                  </h3>
                  <p className="text-white/90 text-sm">
                    Duration: 3:45 • Learn about blockchain-powered property investment
                  </p>
                </div>

                {/* Video Controls */}
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

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Platform Walkthrough</h4>
              <p className="text-gray-600 text-sm">Complete tour of our investment platform and features</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Volume2 className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Commentary</h4>
              <p className="text-gray-600 text-sm">Insights from real estate and blockchain experts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Maximize className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Success Stories</h4>
              <p className="text-gray-600 text-sm">Real investor testimonials and case studies</p>
            </div>
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

            {/* Video Player */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`
                }}
              />
              
              {/* Video Placeholder Content */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <Button
                    onClick={handlePlayPause}
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-8 mb-4"
                  >
                    {isPlaying ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12 ml-1" />}
                  </Button>
                  <h3 className="text-2xl font-bold mb-2">Demo Video Player</h3>
                  <p className="text-white/80">
                    {isPlaying ? 'Video is playing...' : 'Click to play the demo video'}
                  </p>
                  <div className="mt-4 text-sm text-white/60">
                    Replace this with your actual video file or embed code
                  </div>
                </div>
              </div>

              {/* Video Progress Bar */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-white/20 rounded-full h-1 mb-2">
                    <div className="bg-red-500 h-full rounded-full w-1/3 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-white text-sm">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoVideo;
