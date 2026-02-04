
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Pause, Volume2, VolumeX, Maximize2, X, Sparkles, MapPin, Calendar } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
   const videoRef = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const videos = [
    {
      name: "Rajesh Patel",
      role: "Canada PR Holder",
      video: "https://assets.mixkit.co/videos/preview/mixkit-happy-man-with-arms-spread-on-a-field-34500-large.mp4",
      thumb: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=400",
      quote: "SkyBeat made my PR journey smooth and stress-free."
    },
    {
      name: "Sneha Verma",
      role: "Student Visa – Australia",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-about-her-experiences-in-a-park-34503-large.mp4",
      thumb: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      quote: "Best consultancy for student visas. 100% recommended."
    },
    {
      name: "Michael Chen",
      role: "USA H1B Visa",
      video: "https://assets.mixkit.co/videos/preview/mixkit-man-talking-about-his-experience-in-a-conference-room-34504-large.mp4",
      thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
      quote: "Professional service with real results."
    }
  ];

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

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
      text: "SkyBeat's golden service made my Canadian dream a reality. The personalized guidance was worth every moment.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      flag: "🇺🇸"
    },
    {
      name: "Priya Sharma",
      role: "International Student",
      rating: 5,
      text: "From admission to arrival, SkyBeat's golden touch made my study journey seamless and successful.",
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
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-happy-man-with-arms-spread-on-a-field-34500-large.mp4",
      quote: "SkyBeat made my Canadian PR process smooth and stress-free."
    },
    {
      id: 2,
      name: "Sneha Verma",
      role: "Student in Australia",
      location: "Sydney, Australia",
      date: "February 28, 2024",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-about-her-experiences-in-a-park-34503-large.mp4",
      quote: "The best decision was choosing SkyBeat for my Australian student visa."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "USA H-1B Visa Holder",
      location: "California, USA",
      date: "January 10, 2024",
      rating: 4,
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-talking-about-his-experience-in-a-conference-room-34504-large.mp4",
      quote: "SkyBeat's expertise got me through the H-1B lottery successfully."
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "UK Work Visa Holder",
      location: "London, UK",
      date: "December 5, 2023",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-about-her-success-in-business-34502-large.mp4",
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
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-talking-about-his-travel-experiences-34505-large.mp4",
      quote: "SkyBeat helped me secure New Zealand residency in record time."
    },
    {
      id: 6,
      name: "Sophie Martin",
      role: "Europe Blue Card Holder",
      location: "Berlin, Germany",
      date: "October 15, 2023",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-about-her-career-34506-large.mp4",
      quote: "Got my EU Blue Card through SkyBeat."
    }
  ];

  // Get visible videos based on current index
  const getVisibleVideos = () => {
    const videos = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % videoTestimonials.length;
      videos.push(videoTestimonials[index]);
    }
    return videos;
  };

  // Auto scroll every 5 seconds
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % videoTestimonials.length);
      setActiveVideo(0); // Reset active video when scrolling
      setIsPlaying(false);
    }, 5000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [videoTestimonials.length]);

  const handleVideoPlay = (index) => {
    if (videoRefs.current[index]) {
      if (isPlaying && activeVideo === index) {
        videoRefs.current[index].pause();
        setIsPlaying(false);
      } else {
        // Pause all other videos
        videoRefs.current.forEach((video, i) => {
          if (video && i !== index) {
            video.pause();
          }
        });
       
        videoRefs.current[index].play();
        setIsPlaying(true);
        setActiveVideo(index);
      }
    }
  };

  const handleVideoMute = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = !isMuted[index];
      const newMuted = [...isMuted];
      newMuted[index] = !newMuted[index];
      setIsMuted(newMuted);
    }
  };

  const handleFullscreen = (videoElement) => {
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % videoTestimonials.length);
    setActiveVideo(0);
    setIsPlaying(false);
    resetAutoScroll();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setActiveVideo(0);
    setIsPlaying(false);
    resetAutoScroll();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setActiveVideo(0);
    setIsPlaying(false);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % videoTestimonials.length);
      setActiveVideo(0);
      setIsPlaying(false);
    }, 5000);
  };

  const visibleVideos = getVisibleVideos();
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setIsPlaying(false);
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
              {visibleVideos.map((video, index) => (
                <div
                  key={`${video.id}-${currentIndex}-${index}`}
                  className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border transition-all duration-500 ${
                    activeVideo === index
                      ? 'border-2 border-amber-500/50 scale-105 shadow-2xl shadow-amber-500/20'
                      : 'border-amber-600/20 hover:border-amber-500/30 hover:scale-[1.02]'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Video Container */}
                  <div className="relative aspect-video">
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                      onClick={() => handleVideoPlay(index)}
                      onEnded={() => {
                        if (activeVideo === index) setIsPlaying(false);
                      }}
                    />
                   
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                   
                    {/* Play Button */}
                    <button
                      onClick={() => handleVideoPlay(index)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                      {isPlaying && activeVideo === index ? (
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
                              handleVideoPlay(index);
                            }}
                            className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all"
                          >
                            {isPlaying && activeVideo === index ? (
                              <Pause className="w-4 h-4 text-amber-300" />
                            ) : (
                              <Play className="w-4 h-4 text-amber-300" />
                            )}
                          </button>
                         
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoMute(index);
                            }}
                            className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all"
                          >
                            {isMuted[index] ? (
                              <VolumeX className="w-4 h-4 text-amber-300" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-amber-300" />
                            )}
                          </button>
                         
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (videoRefs.current[index]) {
                                handleFullscreen(videoRefs.current[index]);
                              }
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
                    {activeVideo === index && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full text-sm font-semibold animate-pulse">
                        Playing
                      </div>
                    )}
                  </div>
                 
                  {/* Testimonial Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{video.name}</h3>
                        <div className="flex items-center gap-2 text-amber-100 text-sm mb-2">
                          <span>{video.role}</span>
                          <span className="text-amber-400">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {video.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {video.date}
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(video.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                   
                    <div className="relative">
                      <div className="text-3xl text-amber-400/20 absolute -top-3 -left-1">"</div>
                      <p className="text-amber-100 text-sm leading-relaxed pl-4">
                        {video.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
            <div
              ref={containerRef}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              data-aos="zoom-in"
            >
              <div className="relative aspect-video">
                <video
                  ref={el => videoRefs.current[0] = el}
                  src={videoTestimonials[currentIndex].videoUrl}
                  className="w-full h-full object-cover"
                  poster={videoTestimonials[currentIndex].thumbnail}
                  onClick={() => handleVideoPlay(0)}
                  onEnded={() => setIsPlaying(false)}
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
               
                <button
                  onClick={() => handleVideoPlay(0)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all hover:scale-110"
                >
                  {isPlaying ? (
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
                          handleVideoPlay(0);
                        }}
                        className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-amber-300" />
                        ) : (
                          <Play className="w-5 h-5 text-amber-300" />
                        )}
                      </button>
                     
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoMute(0);
                        }}
                        className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                      >
                        {isMuted[0] ? (
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
              </div>
             
              {/* Mobile Testimonial Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {videoTestimonials[currentIndex].name}
                    </h3>
                    <div className="flex items-center gap-2 text-amber-100 text-sm mb-2">
                      <span>{videoTestimonials[currentIndex].role}</span>
                      <span className="text-amber-400">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {videoTestimonials[currentIndex].location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      {videoTestimonials[currentIndex].date}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(videoTestimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
               
                <div className="relative">
                  <div className="text-3xl text-amber-400/20 absolute -top-3 -left-1">"</div>
                  <p className="text-amber-100 text-sm leading-relaxed pl-4">
                    {videoTestimonials[currentIndex].quote}
                  </p>
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
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-full">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-300 text-sm">Auto-scrolling every 5 seconds</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-aos="fade-up">
          {[
            { number: "6+", label: "Countries", icon: "🌍" },
            { number: "98%", label: "Success Rate", icon: "⭐" },
            { number: "200+", label: "Video Stories", icon: "🎥" },
            { number: "4.9", label: "Avg Rating", icon: "🏆" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20 hover:border-amber-500/50 transition-all"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-amber-100/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-amber-900/20 via-amber-800/10 to-yellow-800/20 border border-amber-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Share Your Story?
            </h3>
            <p className="text-amber-100/80 mb-6 max-w-2xl mx-auto">
              Join our community of successful immigrants and inspire others with your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
                Share Your Video
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-xl font-semibold border border-amber-600/30 transition-all">
                View All Testimonials
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>

     
     
    </div>
  );
};

export default TestimonialsSection;