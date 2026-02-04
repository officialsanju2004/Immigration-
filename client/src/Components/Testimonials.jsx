
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Pause, Volume2, VolumeX, Maximize2, X } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

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
      name: "Rajesh Patel",
      role: "Canada PR Holder",
      location: "Toronto, Canada",
      duration: "2:45",
      thumbnail: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-happy-man-with-arms-spread-on-a-field-34500-large.mp4",
      quote: "SkyBeat made my Canadian PR process smooth and stress-free."
    },
    {
      name: "Sneha Verma",
      role: "Student in Australia",
      location: "Sydney, Australia",
      duration: "3:20",
      thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-about-her-experiences-in-a-park-34503-large.mp4",
      quote: "The best decision was choosing SkyBeat for my Australian student visa."
    },
    {
      name: "Michael Chen",
      role: "USA H-1B Visa Holder",
      location: "California, USA",
      duration: "4:15",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-talking-about-his-experience-in-a-conference-room-34504-large.mp4",
      quote: "SkyBeat's expertise got me through the H-1B lottery successfully."
    },
    {
      name: "Emma Wilson",
      role: "UK Work Visa Holder",
      location: "London, UK",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-about-her-success-in-business-34502-large.mp4",
      quote: "Professional service from start to finish for my UK work visa."
    }
  ];

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

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

        {/* Video Testimonials Section */}
        <section>
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Play className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">VIDEO TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Watch Their{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Hear directly from our clients about their immigration journey with SkyBeat
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Video Player */}
            <div className="relative group" data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
                {/* Video Player */}
                <div className="relative aspect-video">
                  <video
                    ref={videoRef}
                    src={videoTestimonials[currentVideo].videoUrl}
                    className="w-full h-full object-cover"
                    poster={videoTestimonials[currentVideo].thumbnail}
                    onEnded={() => setIsPlaying(false)}
                  />
                 
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                 
                  {/* Play/Pause Button */}
                  <button
                    onClick={handleVideoPlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleVideoPlay}
                          className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-amber-300" />
                          ) : (
                            <Play className="w-5 h-5 text-amber-300" />
                          )}
                        </button>
                       
                        <button
                          onClick={handleVideoMute}
                          className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-amber-300" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-amber-300" />
                          )}
                        </button>
                       
                        <div className="text-amber-300 font-medium">
                          {videoTestimonials[currentVideo].duration}
                        </div>
                      </div>
                     
                      <button
                        onClick={handleFullscreen}
                        className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all"
                      >
                        <Maximize2 className="w-5 h-5 text-amber-300" />
                      </button>
                    </div>
                  </div>

                  {/* Current Video Info */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-600/90 to-yellow-600/90 rounded-full text-sm font-semibold">
                      Now Playing
                    </div>
                  </div>
                </div>
               
                {/* Video Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {videoTestimonials[currentVideo].name}
                      </h3>
                      <div className="flex items-center gap-4 text-amber-100">
                        <span>{videoTestimonials[currentVideo].role}</span>
                        <span className="text-amber-400">•</span>
                        <span>{videoTestimonials[currentVideo].location}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                 
                  <div className="relative">
                    <div className="text-4xl text-amber-400/20 absolute -top-4 -left-2">"</div>
                    <p className="text-lg text-amber-100 leading-relaxed pl-6">
                      {videoTestimonials[currentVideo].quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Thumbnails List */}
            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-white mb-6">More Success Stories</h3>
             
              {videoTestimonials.map((video, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentVideo(index);
                    setIsPlaying(false);
                  }}
                  className={`w-full group flex items-center gap-4 p-4 rounded-xl transition-all ${
                    index === currentVideo
                      ? 'bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border-2 border-amber-500/50'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20 hover:border-amber-500/50 hover:scale-[1.02]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20"></div>
                     
                      {/* Play Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="p-2 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      </div>
                     
                      {/* Duration */}
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-gray-900/80 rounded text-xs text-white">
                        {video.duration}
                      </div>
                     
                      {/* Current Video Indicator */}
                      {index === currentVideo && (
                        <div className="absolute top-1 left-1 px-2 py-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 rounded text-xs text-white">
                          NOW
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="flex-1 text-left">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-white group-hover:text-amber-300 transition-colors">
                        {video.name}
                      </h4>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-amber-100">{video.role}</p>
                    <p className="text-xs text-amber-400 mt-1">{video.location}</p>
                    <p className="text-sm text-amber-100/80 mt-2 line-clamp-2">
                      "{video.quote}"
                    </p>
                  </div>
                </button>
              ))}

              {/* Video Navigation */}
              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={prevVideo}
                  className="p-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-amber-300" />
                </button>
               
                <div className="flex gap-2 items-center">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentVideo(index);
                        setIsPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentVideo
                          ? 'w-6 bg-gradient-to-r from-amber-400 to-yellow-400'
                          : 'w-2 bg-amber-400/30 hover:bg-amber-400/50'
                      }`}
                    />
                  ))}
                </div>
               
                <button
                  onClick={nextVideo}
                  className="p-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-amber-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-aos="fade-up">
            {[
              { number: "500+", label: "Video Testimonials" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "50K+", label: "Total Views" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-2">
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
                Share Your Success Story
              </h3>
              <p className="text-amber-100/80 mb-6 max-w-2xl mx-auto">
                Join hundreds of clients who have shared their immigration journey. Your story could inspire others!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
                Submit Your Video Testimonial
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={videoTestimonials[currentVideo].videoUrl}
              className="w-full h-full object-contain"
              autoPlay={isPlaying}
              muted={isMuted}
            />
           
            {/* Fullscreen Controls */}
            <div className="absolute top-4 right-4 flex gap-3">
              <button
                onClick={handleVideoMute}
                className="p-3 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-all"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
             
              <button
                onClick={() => {
                  handleFullscreen();
                  setIsFullscreen(false);
                }}
                className="p-3 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Fullscreen Play/Pause */}
            <button
              onClick={handleVideoPlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-gradient-to-br from-amber-600/80 to-yellow-600/80 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-12 h-12 text-white" />
              ) : (
                <Play className="w-12 h-12 text-white ml-1" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;