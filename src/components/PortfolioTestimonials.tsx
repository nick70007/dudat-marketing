import React, { useState, useRef, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { loadVideos } from '../utils/videoLoader';

const videos = loadVideos();



export function PortfolioTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingStates, setPlayingStates] = useState<boolean[]>(new Array(videos.length).fill(false));
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(videos.length).fill(null));
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(videos.length).fill(null));
  const carouselRef = useRef<HTMLDivElement>(null);

  // Carousel scroll functions
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollToNext = () => {
    if (carouselRef.current) {
      const videoWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 16; // 1rem gap between videos
      carouselRef.current.scrollBy({
        left: videoWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const videoWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 16; // 1rem gap between videos
      carouselRef.current.scrollBy({
        left: -(videoWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  // Mobile carousel functions (keep existing for mobile)
  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
      
      return () => {
        carousel.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, []);

  const toggleDesktopPlay = async (index: number) => {
    console.log('🖥️ DESKTOP togglePlay called for index:', index);
    const video = desktopVideoRefs.current[index];
    
    if (video) {
      console.log('✅ Desktop video element found, paused state:', video.paused);
      
      try {
        if (video.paused) {
          console.log('▶️ Attempting to play desktop video...');
          // Pause all other desktop videos first
          desktopVideoRefs.current.forEach((v, i) => {
            if (v && i !== index && !v.paused) {
              v.pause();
              setPlayingStates(prev => {
                const newStates = [...prev];
                newStates[i] = false;
                return newStates;
              });
            }
          });
          
          // Play the selected video
          await video.play();
          console.log('✅ Desktop video started playing successfully');
          setPlayingStates(prev => {
            const newStates = [...prev];
            newStates[index] = true;
            return newStates;
          });
        } else {
          console.log('⏸️ Pausing desktop video...');
          video.pause();
          setPlayingStates(prev => {
            const newStates = [...prev];
            newStates[index] = false;
            return newStates;
          });
        }
      } catch (error) {
        console.error('❌ Desktop video play failed:', error);
        setPlayingStates(prev => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      }
    } else {
      console.error('❌ Desktop video element not found for index:', index);
    }
  };

  const toggleMobilePlay = async (index: number) => {
    console.log('📱 MOBILE togglePlay called for index:', index);
    const video = mobileVideoRefs.current[index];
    
    if (video) {
      try {
        if (video.paused) {
          // Pause all other mobile videos first
          mobileVideoRefs.current.forEach((v, i) => {
            if (v && i !== index && !v.paused) {
              v.pause();
              setPlayingStates(prev => {
                const newStates = [...prev];
                newStates[i] = false;
                return newStates;
              });
            }
          });
          
          await video.play();
          setPlayingStates(prev => {
            const newStates = [...prev];
            newStates[index] = true;
            return newStates;
          });
        } else {
          video.pause();
          setPlayingStates(prev => {
            const newStates = [...prev];
            newStates[index] = false;
            return newStates;
          });
        }
      } catch (error) {
        console.error('❌ Mobile video play failed:', error);
        setPlayingStates(prev => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      }
    }
  };

  return (
    <>
      {/* Video Carousel */}
      <section id="portfolio" style={{ backgroundColor: '#000000' }}>
        {/* Header */}
        <div className="text-center py-8 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Top Performing Content
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look at our successful content, with videos reaching <strong className="text-yellow-400">between 500K and 12M+ views</strong> each across Instagram, TikTok, and YouTube Shorts.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative mt-8">
          {/* Desktop: Scrollable Carousel */}
          <div className="hidden md:block">
            {/* Carousel Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 border-white/30 text-white hover:bg-black/90 w-12 h-12 ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={scrollToPrev}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 border-white/30 text-white hover:bg-black/90 w-12 h-12 ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={scrollToNext}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Scrollable Video Container */}
            <div 
              ref={carouselRef}
              className="flex gap-4 px-16 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {videos.map((video, index) => (
                <div key={index} className="flex-shrink-0">
                  <div 
                    className="relative w-72 aspect-9-16 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      console.log('🖱️ DESKTOP VIDEO CLICKED!', index);
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDesktopPlay(index);
                    }}
                  >
                  <video
                    ref={(el) => (desktopVideoRefs.current[index] = el)}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    preload="metadata"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1,
                      zIndex: 1
                    }}
                    onPlay={() => {
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = true;
                        return newStates;
                      });
                    }}
                    onPause={() => {
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = false;
                        return newStates;
                      });
                    }}
                    onEnded={() => {
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = false;
                        return newStates;
                      });
                    }}
                  >
                    <source src={`${video.src}#t=0.001`} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play/Pause Button Overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 pointer-events-none ${
                      playingStates[index] ? 'bg-black/10 hover:bg-black/20' : 'bg-black/20 hover:bg-black/10'
                    }`}
                    style={{
                      zIndex: playingStates[index] ? 0 : 2
                    }}
                  >
                    <div className={`transition-opacity duration-300 ${playingStates[index] ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                      {playingStates[index] ? (
                        <Pause className="w-8 h-8 md:w-6 md:h-6 lg:w-5 lg:h-5 text-white drop-shadow-lg" />
                      ) : (
                        <Play className="w-8 h-8 md:w-6 md:h-6 lg:w-5 lg:h-5 text-yellow-400 drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                  
                  {/* Playing Indicator */}
                  {playingStates[index] && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-green-600/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        LIVE
                      </div>
                    </div>
                  )}

                  {/* Video Info */}
                  <div className="absolute bottom-1 left-1 right-1 md:bottom-2 md:left-2 md:right-2">
                    <h3 className="text-white text-xs md:text-sm font-semibold drop-shadow-lg mb-1">{video.title}</h3>
                    <div className="flex gap-1 items-center">
                      <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur-sm border-white/20 text-xs px-1 py-0">
                        {video.category}
                      </Badge>
                      {playingStates[index] && (
                        <Badge variant="secondary" className="bg-green-600/70 text-white backdrop-blur-sm border-green-400/20 text-xs px-1 py-0">
                          PLAYING
                        </Badge>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: One video at a time */}
          <div className="md:hidden w-full h-[250px] px-4 relative">
            <div className="relative h-full max-w-sm mx-auto">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  className={`w-full h-full rounded-lg overflow-hidden cursor-pointer transition-opacity duration-300 ${
                    index === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0'
                  }`}
                  onClick={() => toggleMobilePlay(index)}
                >
                  <video
                    ref={(el) => (mobileVideoRefs.current[index] = el)}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => {
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = true;
                        return newStates;
                      });
                    }}
                    onPause={() => {
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = false;
                        return newStates;
                      });
                    }}
                    onEnded={() => {
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index] = false;
                        return newStates;
                      });
                    }}
                  >
                    <source src={`${video.src}#t=0.001`} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play/Pause Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
                    playingStates[index] ? 'bg-black/10' : 'bg-black/20'
                  }`}>
                    <div className={`transition-opacity duration-300 ${playingStates[index] ? 'opacity-0' : 'opacity-100'}`}>
                      {playingStates[index] ? (
                        <Pause className="w-20 h-20 text-white drop-shadow-lg" />
                      ) : (
                        <Play className="w-20 h-20 text-yellow-400 drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                  
                  {/* Playing Indicator */}
                  {playingStates[index] && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-green-600/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        LIVE
                      </div>
                    </div>
                  )}

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold drop-shadow-lg mb-2">{video.title}</h3>
                    <div className="flex gap-2 items-center">
                      <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur-sm border-white/20">
                        {video.category}
                      </Badge>
                      {playingStates[index] && (
                        <Badge variant="secondary" className="bg-green-600/70 text-white backdrop-blur-sm border-green-400/20">
                          PLAYING
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Outside video container */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 border-2 border-white text-white hover:bg-red-700 z-50 w-14 h-14"
              onClick={prevVideo}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 border-2 border-white text-white hover:bg-red-700 z-50 w-14 h-14"
              onClick={nextVideo}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
