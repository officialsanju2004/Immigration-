import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
 
  const videoRefs = useRef([]);
  const autoScrollRef = useRef(null);

  const testimonials = [
    {
      name: "Deepak Kumar",
      role: "Software Engineer in Canada",
      rating: 5,
      text: "Harmeet Kaur's expertise transformed my work permit journey. Her strategic approach and attention to detail made the impossible possible.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      flag: "🇨🇦"
    },
    {
      name: "Aman Padam",
      role: "Permanent Resident",
      rating: 5,
      text: "Assist Visa and Migration golden service made my Canadian dream a reality. The personalized guidance was worth every moment.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      flag: "🇺🇸"
    },
    {
      name: "Priya Sharma",
      role: "International Student",
      rating: 5,
      text: "From admission to arrival, Assist Visa and Migration golden touch made my study journey seamless and successful.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=80",
      flag: "🇬🇧"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      role: "Canada PR Holder",
      location: "Toronto, Canada",
      date: "March 15, 2024",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://youtube.com/shorts/dWvMv62F2kQ?si=kJMHHpf0srhmHX1Z",
      quote: "Assist Visa and Migration made my Canadian PR process smooth and stress-free."
    },
    {
      id: 2,
      name: "Sneha Verma",
      role: "Student in Australia",
      location: "Sydney, Australia",
      date: "February 28, 2024",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://youtube.com/shorts/dWvMv62F2kQ?si=kJMHHpf0srhmHX1Z",
      quote: "The best decision was choosing Assist Visa and Migration for my Australian student visa."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "USA H-1B Visa Holder",
      location: "California, USA",
      date: "January 10, 2024",
      rating: 4,
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      quote: "Assist Visa and Migration expertise got me through the H-1B lottery successfully."
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "UK Work Visa Holder",
      location: "London, UK",
      date: "December 5, 2023",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      quote: "Outstanding service for my UK work visa."
    },
    {
      id: 5,
      name: "Aarav Singh",
      role: "New Zealand Resident",
      location: "Auckland, New Zealand",
      date: "November 20, 2023",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      quote: "Assist Visa and Migration helped me secure New Zealand residency in record time."
    },
    {
      id: 6,
      name: "Sophie Martin",
      role: "Europe Blue Card Holder",
      location: "Berlin, Germany",
      date: "October 15, 2023",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      quote: "Got my EU Blue Card through Assist Visa and Migration."
    }
  ];

  // Get visible videos based on current index
  const getVisibleVideos = () => {
    const videos = [];
    for (let i = 0; i < Math.min(3, videoTestimonials.length); i++) {
      const index = (currentIndex + i) % videoTestimonials.length;
      videos.push({
        ...videoTestimonials[index],
        globalIndex: index
      });
    }
    return videos;
  };

 

 

  // Handle video play/pause
  const handleVideoPlay = (globalIndex) => {
    const videoElement = videoRefs.current[globalIndex];
    if (!videoElement) return;

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== globalIndex) {
        video.pause();
      }
    });

    if (activeVideo === globalIndex && isPlaying) {
      // Pause current video
      videoElement.pause();
      setIsPlaying(false);
    } else {
      // Play new video
      videoElement.play()
        .then(() => {
          setActiveVideo(globalIndex);
          setIsPlaying(true);
          // Reset auto scroll timer when user interacts
          resetAutoScroll();
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    }
  };

  // Handle video mute/unmute
  const handleVideoMute = (globalIndex) => {
    const videoElement = videoRefs.current[globalIndex];
    if (!videoElement) return;

    videoElement.muted = !videoElement.muted;
    // Force re-render of the component
    videoRefs.current = [...videoRefs.current];
  };

  // Check if video is currently muted
  const isVideoMuted = (globalIndex) => {
    const videoElement = videoRefs.current[globalIndex];
    return videoElement ? videoElement.muted : false;
  };

  const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

  const getYouTubeEmbedUrl = (url) => {
    if (url.includes("/shorts/")) {
      const id = url.split("/shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    const id = url.split("v=")[1]?.split("&")[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  };

  const nextSlide = () => {
    // Pause current video if playing
    if (activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].pause();
    }
   
    setCurrentIndex(prev => (prev + 1) % videoTestimonials.length);
    setActiveVideo(null);
    setIsPlaying(false);
    resetAutoScroll();
  };

  const prevSlide = () => {
    // Pause current video if playing
    if (activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].pause();
    }
   
    setCurrentIndex(prev => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setActiveVideo(null);
    setIsPlaying(false);
    resetAutoScroll();
  };

  const goToSlide = (index) => {
    // Pause current video if playing
    if (activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].pause();
    }
   
    setCurrentIndex(index);
    setActiveVideo(null);
    setIsPlaying(false);
    resetAutoScroll();
  };

 

  const handleFullscreen = (globalIndex) => {
    const videoElement = videoRefs.current[globalIndex];
    if (!videoElement) return;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleVideos = getVisibleVideos();

  // Handle video ended event
  const handleVideoEnded = (globalIndex) => {
    if (activeVideo === globalIndex) {
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Text Testimonials Section */}
        <section className="mb-32">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Take it from{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-12"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-amber-600/20 p-8 md:p-12 shadow-2xl shadow-amber-500/10" data-aos="flip-up">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
            
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-xl opacity-50"></div>
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-gray-800 mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 text-3xl bg-gradient-to-br from-amber-600 to-yellow-600 p-3 rounded-full">
                      {testimonials[currentTestimonial].flag}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mt-8 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-amber-300 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              
                <div className="relative">
                  <div className="text-6xl text-amber-400/20 mb-4 absolute -top-6 -left-2">"</div>
                  <p className="text-xl text-amber-100 leading-relaxed pt-8">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="text-6xl text-amber-400/20 mb-4 absolute -bottom-6 -right-2">"</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-4 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-amber-300" />
              </button>
            
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-400'
                        : 'w-2 bg-amber-400/30 hover:bg-amber-400/50'
                    }`}
                  />
                ))}
              </div>
            
              <button
                onClick={nextTestimonial}
                className="p-4 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-amber-300" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm">VIDEO SUCCESS STORIES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                See Their{' '}
                <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                  Dreams Come True
                </span>
              </h2>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                Watch real clients share their immigration success stories
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-8"></div>
            </div>

            {/* Desktop: 3 Videos in a Row */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-4 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-300" />
                </button>
              
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-4 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-110 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-amber-300" />
                </button>

                {/* 3 Videos Container */}
                <div className="grid grid-cols-3 gap-8 px-12">
                  {visibleVideos.map((video, localIndex) => {
                    const globalIndex = video.globalIndex;
                    const isActive = activeVideo === globalIndex && isPlaying;
                    const isMuted = isVideoMuted(globalIndex);

                    return (
                      <div
                        key={`${video.id}-${currentIndex}-${localIndex}`}
                        className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border transition-all duration-500 ${
                          activeVideo === globalIndex
                            ? 'border-2 border-amber-500/50 scale-105 shadow-2xl shadow-amber-500/20'
                            : 'border-amber-600/20 hover:border-amber-500/30 hover:scale-[1.02]'
                        }`}
                        data-aos="fade-up"
                        data-aos-delay={localIndex * 100}
                      >
                        {/* Video Container */}
                        <div className="relative aspect-[9/16] w-full max-w-[360px] mx-auto">
                          {isYouTube(video.videoUrl) ? (
                            <iframe
                              src={getYouTubeEmbedUrl(video.videoUrl)}
                              className="w-full h-full rounded-2xl"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              title={video.name}
                            />
                          ) : (
                            <>
                              <video
                                ref={el => (videoRefs.current[globalIndex] = el)}
                                src={video.videoUrl}
                                poster={video.thumbnail}
                                className="w-full h-full object-cover rounded-2xl"
                                onClick={() => handleVideoPlay(globalIndex)}
                                onEnded={() => handleVideoEnded(globalIndex)}
                                muted={isMuted}
                                preload="metadata"
                              />
                             
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                            
                              {/* Play Button */}
                              <button
                                onClick={() => handleVideoPlay(globalIndex)}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                              >
                                {isActive ? (
                                  <Pause className="w-6 h-6 text-white" />
                                ) : (
                                  <Play className="w-6 h-6 text-white ml-0.5" />
                                )}
                              </button>

                              {/* Video Controls */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleVideoPlay(globalIndex);
                                      }}
                                      className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all"
                                    >
                                      {isActive ? (
                                        <Pause className="w-4 h-4 text-amber-300" />
                                      ) : (
                                        <Play className="w-4 h-4 text-amber-300" />
                                      )}
                                    </button>
                                  
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleVideoMute(globalIndex);
                                      }}
                                      className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all"
                                    >
                                      {isMuted ? (
                                        <VolumeX className="w-4 h-4 text-amber-300" />
                                      ) : (
                                        <Volume2 className="w-4 h-4 text-amber-300" />
                                      )}
                                    </button>
                                  
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleFullscreen(globalIndex);
                                      }}
                                      className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all"
                                    >
                                      <Maximize2 className="w-4 h-4 text-amber-300" />
                                    </button>
                                  </div>
                                
                                  <div className="text-amber-300 text-sm font-medium">
                                    {video.rating}/5
                                  </div>
                                </div>
                              </div>

                              {/* Active Video Indicator */}
                              {isActive && (
                                <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full text-sm font-semibold animate-pulse">
                                  Playing
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      
                        {/* Video Info */}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">{video.name}</h3>
                              <p className="text-amber-300 text-sm">{video.role}</p>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(video.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-amber-100 text-sm mb-3">{video.quote}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <span className="w-4 h-4">📍</span>
                              <span>{video.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-4 h-4">📅</span>
                              <span>{video.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-3 mt-12">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-400'
                          : 'w-2 bg-amber-400/30 hover:bg-amber-400/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Single Video Carousel */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Single Video Container */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
                  data-aos="zoom-in"
                >
                  <div className="relative aspect-[9/16] w-full max-w-[360px] mx-auto">
                    {isYouTube(videoTestimonials[currentIndex].videoUrl) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(videoTestimonials[currentIndex].videoUrl)}
                        className="w-full h-full rounded-2xl"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={videoTestimonials[currentIndex].name}
                      />
                    ) : (
                      <>
                        <video
                          ref={el => (videoRefs.current[currentIndex] = el)}
                          src={videoTestimonials[currentIndex].videoUrl}
                          poster={videoTestimonials[currentIndex].thumbnail}
                          className="w-full h-full object-cover rounded-2xl"
                          onClick={() => handleVideoPlay(currentIndex)}
                          onEnded={() => handleVideoEnded(currentIndex)}
                          muted={isVideoMuted(currentIndex)}
                          preload="metadata"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                      
                        <button
                          onClick={() => handleVideoPlay(currentIndex)}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all hover:scale-110"
                        >
                          {activeVideo === currentIndex && isPlaying ? (
                            <Pause className="w-8 h-8 text-white" />
                          ) : (
                            <Play className="w-8 h-8 text-white ml-0.5" />
                          )}
                        </button>

                        {/* Mobile Video Controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleVideoPlay(currentIndex);
                                }}
                                className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                              >
                                {activeVideo === currentIndex && isPlaying ? (
                                  <Pause className="w-5 h-5 text-amber-300" />
                                ) : (
                                  <Play className="w-5 h-5 text-amber-300" />
                                )}
                              </button>
                            
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleVideoMute(currentIndex);
                                }}
                                className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                              >
                                {isVideoMuted(currentIndex) ? (
                                  <VolumeX className="w-5 h-5 text-amber-300" />
                                ) : (
                                  <Volume2 className="w-5 h-5 text-amber-300" />
                                )}
                              </button>
                            </div>
                          
                            <div className="text-amber-300 font-medium">
                              {currentIndex + 1}/{videoTestimonials.length}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                
                  {/* Mobile Video Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{videoTestimonials[currentIndex].name}</h3>
                        <p className="text-amber-300 text-sm">{videoTestimonials[currentIndex].role}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(videoTestimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-amber-100 text-sm mb-3">{videoTestimonials[currentIndex].quote}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <span className="w-4 h-4">📍</span>
                        <span>{videoTestimonials[currentIndex].location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-4 h-4">📅</span>
                        <span>{videoTestimonials[currentIndex].date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-amber-300" />
                  </button>
                
                  <div className="flex gap-2 items-center">
                    {videoTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? 'w-6 bg-gradient-to-r from-amber-400 to-yellow-400'
                            : 'w-2 bg-amber-400/30 hover:bg-amber-400/50'
                        }`}
                      />
                    ))}
                  </div>
                
                  <button
                    onClick={nextSlide}
                    className="p-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-amber-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Auto Scroll Indicator */}
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsSection;