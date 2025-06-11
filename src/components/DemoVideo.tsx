
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Volume2, Maximize, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

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

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsPlaying(false);
    setCurrentScene(0);
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
                {/* Video Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                
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
                    🎯 Real Estate Tokenization Demo - Amaravati, Andhra Pradesh
                  </h3>
                  <p className="text-white/90 text-sm">
                    Duration: 2:00 • Showcasing blockchain-powered property investment in Amaravati
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

            {/* Video Player */}
            <div className="relative w-full h-full">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`
                }}
              />
              
              {/* Video Content Overlay */}
              <div className="absolute inset-0 bg-black/70 flex flex-col">
                {/* Current Scene Display */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center text-white max-w-4xl">
                    {!isPlaying ? (
                      <div>
                        <Button
                          onClick={handlePlayPause}
                          size="lg"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-8 mb-6"
                        >
                          <Play className="h-12 w-12 ml-1" />
                        </Button>
                        <h3 className="text-3xl font-bold mb-4">🎬 Real Estate Tokenization Demo</h3>
                        <p className="text-xl text-white/80 mb-4">Amaravati, Andhra Pradesh</p>
                        <p className="text-white/60">Click to start the demo presentation</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex justify-center mb-6">
                          <Button
                            onClick={handlePlayPause}
                            size="lg"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-4"
                          >
                            <Pause className="h-8 w-8" />
                          </Button>
                        </div>
                        
                        <div className="bg-black/50 rounded-lg p-6">
                          <h4 className="text-2xl font-bold mb-3">
                            🔹 Scene {currentScene + 1}: {videoScenes[currentScene].title}
                          </h4>
                          <p className="text-lg text-white/90 mb-4">
                            {videoScenes[currentScene].narration}
                          </p>
                          <p className="text-sm text-white/70">
                            📝 {videoScenes[currentScene].description}
                          </p>
                        </div>

                        {/* Scene Navigation */}
                        <div className="flex justify-center gap-2 mt-6">
                          {videoScenes.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentScene(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentScene ? 'bg-white' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Video Progress Bar */}
                {isPlaying && (
                  <div className="p-6">
                    <div className="bg-white/20 rounded-full h-2 mb-2">
                      <div 
                        className="bg-red-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${((currentScene + 1) / videoScenes.length) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-white text-sm">
                      <span>{videoScenes[currentScene].time.split('-')[0]}</span>
                      <span>2:00</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoVideo;
