import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Facebook, Youtube, Instagram, Star, Globe, Users, Award, Calendar, Clock, Shield, CheckCircle, MessageCircle, Zap, Sparkles, User, FileText, TrendingUp, Target, Heart, BookOpen, Briefcase, GraduationCap, Home, Plane, FileCheck, Percent, Globe2, Mail as MailIcon, MessageSquare, Link } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import TestimonialsSection from './Testimonials';
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.png";

const SkyBeatImmigration = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Handle mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll for navbar color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&auto=format&fit=crop&q=80",
      title: "Golden Pathways to Your Dreams",
      subtitle: "Transforming aspirations into realities with expert guidance and unparalleled success rates"
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&auto=format&fit=crop&q=80",
      title: "Embark on Your Canadian Journey",
      subtitle: "95% success rate with personalized immigration strategies tailored to your dreams"
    },
    {
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&auto=format&fit=crop&q=80",
      title: "Premium Immigration Excellence",
      subtitle: "RCIC certified consultants crafting your success story with precision and care"
    }
  ];

  // Auto rotate hero slides
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Express Entry",
      description: "Accelerated permanent residency pathway with comprehensive CRS score optimization strategies",
      features: ["CRS Score Boost", "ITA Optimization", "Documentation Mastery"],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Provincial Nominee",
      description: "Strategic provincial nominations with tailored regional immigration solutions",
      features: ["Province Matching", "Job Offer Support", "Regional Strategies"],
      color: "from-amber-600 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "PR Card Renewal",
      description: "Seamless permanent resident card renewal with compliance guarantee",
      features: ["Fast Processing", "Compliance Check", "Travel Support"],
      color: "from-yellow-600 to-amber-600"
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Family Sponsorship",
      description: "Reunite families with expert sponsorship application management",
      features: ["Relationship Proof", "Financial Planning", "Timeline Management"],
      color: "from-amber-700 to-yellow-600"
    },
    {
      icon: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Study Permit",
      description: "Comprehensive study permit solutions with university placement support",
      features: ["Admission Support", "Financial Planning", "Post-Grad Pathways"],
      color: "from-yellow-700 to-amber-700"
    },
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Work Permit",
      description: "Strategic work permit applications with LMIA and employer compliance",
      features: ["LMIA Support", "Job Market Analysis", "Transition to PR"],
      color: "from-amber-800 to-yellow-700"
    }
  ];

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

  const blogs = [
    {
      date: { day: "27", month: "JUN" },
      title: "Golden Visa Opportunities in 2024",
      author: "Harmeet Bamrah",
      category: "Premium Insights",
      image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&auto=format&fit=crop&q=80",
      readTime: "5 min"
    },
    {
      date: { day: "20", month: "JUN" },
      title: "Canada's Express Entry: The Golden Pathway",
      author: "Assist Visa and Migration Experts",
      category: "Strategy Guide",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
      readTime: "7 min"
    },
    {
      date: { day: "06", month: "JUN" },
      title: "Global Education: The Golden Standard",
      author: "Immigration Visionaries",
      category: "Education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
      readTime: "6 min"
    }
  ];

  const countries = [
    { name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=80", flag: "🇨🇦", visas: ["Express Entry", "PNP", "Study"], link: "/can" },
    { name: "United States", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop&q=80", flag: "🇺🇸", visas: ["H1B", "L1", "EB"], link: "/usa" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&auto=format&fit=crop&q=80", flag: "🇦🇺", visas: ["Skilled", "Student", "Business"], link: "/aus" },
    { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=80", flag: "🇬🇧", visas: ["Tier 2", "Student", "Innovator"], link: "/uk" },
    { name: "New Zealand", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&auto=format&fit=crop&q=80", flag: "🇳🇿", visas: ["Skilled Migrant", "Student", "Partner"], link: "/new" },
    { name: "Europe", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80", flag: "🇪🇺", visas: ["Blue Card", "Student", "Business"], link: "/eu" }
  ];

  const features = [
    { icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />, text: "95% Success Rate" },
    { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, text: "24/7 Support" },
    { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, text: "RCIC Certified" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, text: "10,000+ Clients" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Assessment",
      description: "Detailed evaluation of your profile and eligibility",
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Customized immigration pathway planning",
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
    },
    {
      number: "03",
      title: "Documentation",
      description: "Comprehensive document preparation and review",
      icon: <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
    },
    {
      number: "04",
      title: "Application Submission",
      description: "Precise application filing and tracking",
      icon: <Plane className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
    },
    {
      number: "05",
      title: "Approval & Support",
      description: "Post-approval settlement assistance",
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
    }
  ];

  const successMetrics = [
    { value: "95%", label: "Visa Success Rate", icon: <Percent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> },
    { value: "24-48", label: "Hours Response Time", icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> },
    { value: "10K+", label: "Happy Clients", icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> },
    { value: "15+", label: "Years Experience", icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans overflow-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-l from-amber-600/10 to-yellow-600/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-amber-400/5 via-transparent to-transparent rounded-full"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHero ? 'opacity-100' : 'opacity-0'}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  filter: 'brightness(0.4)',
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10" data-aos="zoom-in">
          <div className="inline-flex mt-4 sm:mt-7 items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-6 sm:mb-8">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-amber-300 text-xs sm:text-sm">RCIC Certified Immigration Experts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Golden Pathways
            </span>
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">To Your Dreams</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-100 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed">
            Transforming immigration dreams into realities with premium expertise and unparalleled success rates
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg shadow-xl sm:shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-0.5 sm:hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Start Your Journey
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-amber-600 hover:border-amber-500 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:bg-gradient-to-r hover:from-amber-600/10 hover:to-yellow-600/10 transition-all">
              Book Free Assessment
            </button>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20"></div>
                <img
                  src={image1}
                  alt="Harmeet Bamrah - Founder"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg sm:rounded-xl">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl md:text-xl font-bold">RCIC Certified</h4>
                      <p className="text-amber-200 text-xs sm:text-sm">License #R707171</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="mt-8 lg:mt-0">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-4 sm:mb-6">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-amber-300 text-xs sm:text-sm">MEET OUR FOUNDER</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                  Harmeet Bamrah
                </span>
                <br />
                <span className="text-lg sm:text-xl md:text-2xl">Your Trusted Immigration Guide</span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-amber-100/90 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  With over 15 years of experience in Canadian immigration law, I founded Assist Visa and Migration with a single mission: to transform dreams into realities.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  As a licensed RCIC consultant, I combine legal expertise with compassionate guidance to navigate the complex immigration landscape.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  My approach is simple: treat every client's dream as if it were my own, providing personalized strategies that deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg sm:rounded-xl border border-amber-600/20">
                    <div className="flex justify-center mb-2">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-md sm:rounded-lg">
                        {React.cloneElement(metric.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" })}
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-amber-100/70">{metric.label}</div>
                  </div>
                ))}
              </div>

              <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">OUR PROCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Path
              </span>
              {' '}to Success
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl sm:max-w-3xl mx-auto px-4">
              A structured approach that ensures your immigration journey is smooth, transparent, and successful
            </p>
          </div>

          <div className="relative">
            {/* Timeline Connector - Hide on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-yellow-600 to-amber-600 transform -translate-x-1/2"></div>

            <div className="space-y-8 sm:space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Step Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-6 lg:pr-12' : 'lg:pl-6 lg:pl-12'} w-full`}>
                    <div className="group p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-0.5 sm:hover:-translate-y-1">
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg sm:rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                          <div className="relative p-3 sm:p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl border border-amber-600/30">
                            <div className="text-amber-400">{step.icon}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                              {step.number}
                            </span>
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-600/30 to-yellow-600/30"></div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                          <p className="text-amber-100/70 text-sm sm:text-base leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Show only on desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-md animate-pulse"></div>
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Standard
              </span>{' '}
              Immigration Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl sm:max-w-3xl mx-auto px-4">
              Comprehensive immigration services designed to transform your dreams into reality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-amber-100 text-sm sm:text-base mb-4 sm:mb-6">{service.description}</p>
                <div className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-amber-300">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all text-sm sm:text-base">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">WHY CHOOSE US</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Assist Visa and Migration Advantage
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
                title: "RCIC Certified",
                description: "Licensed professionals ensuring legal compliance"
              },
              {
                icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
                title: "95% Success Rate",
                description: "Proven track record of visa approvals"
              },
              {
                icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance for clients"
              },
              {
                icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
                title: "Personalized Approach",
                description: "Tailored strategies for every client"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-0.5 sm:hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex p-2.5 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" })}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-amber-100/70 text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <Globe2 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">GLOBAL REACH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Your Passport to{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Global Opportunities
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => { window.location.href = country.link }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-2xl sm:text-3xl">{country.flag}</div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-amber-600/90 to-yellow-600/90 rounded-full text-xs sm:text-sm font-semibold">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{country.name}</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {country.visas.map((visa, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-full text-xs sm:text-sm text-amber-300 border border-amber-600/30"
                      >
                        {visa}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all text-sm sm:text-base font-medium">
                    Explore {country.name} Visa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">FULLY ACCREDITED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Accreditation & Compliance
              </span>
              <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-6 sm:mt-8"></div>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-3xl mx-auto px-4">
              Our Migration Agents are registered with the Migration Agents Registration Authority and meet ongoing professional development requirements In addition to meeting the required education and other requirements to be registered in Australia, we must continue to adhere to the{' '}
              <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors font-semibold">
                Migration Agents Code of Conduct
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Image 1 */}
            <div
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-60 sm:h-80 overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={image2}
                  alt="Visa Approval Celebration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-60 sm:h-80 overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={image3}
                  alt="University Admission Success"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-60 sm:h-80 overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={image4}
                  alt="Work Permit Success"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches & Contact Info Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">OUR BRANCHES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Global Presence{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                & Support
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-3xl mx-auto px-4">
              We're here to serve you across continents with dedicated teams in multiple time zones
            </p>
            <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-6 sm:mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Australia Branch */}
            <div
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-md sm:blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative p-2 sm:p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border border-amber-600/30">
                      <span className="text-xl sm:text-2xl">🇦🇺</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Australia Branch</h3>
                    <p className="text-amber-300 text-xs sm:text-sm">(by appointment only)</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed">
                        2/80 Montana Cct, Logan Reserve,<br />
                        QLD - 4133, Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Phone</h4>
                      <p className="text-amber-100 text-sm sm:text-base">+61 412 141 111</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-amber-100 text-xs sm:text-sm break-all">enquiries@assistvisaandmigration.com</p>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-amber-600/20">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/10 rounded-full">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                      <span className="text-amber-300 text-xs sm:text-sm">By Appointment Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* India Branch */}
            <div
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-md sm:blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative p-2 sm:p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border border-amber-600/30">
                      <span className="text-xl sm:text-2xl">🇮🇳</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">India Branch</h3>
                    <p className="text-amber-300 text-xs sm:text-sm">(by walk-in)</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed">
                        SCO 103, 3rd Floor, District Shopping Complex,<br />
                        B Block, Ranjit Avenue,<br />
                        Amritsar, Punjab, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Phone</h4>
                      <p className="text-amber-100 text-sm sm:text-base">+91 92169 50100</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-amber-100 text-xs sm:text-sm break-all">info@assistvisaandmigration.com</p>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-amber-600/20">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="text-center p-2.5 sm:p-3 bg-gradient-to-br from-amber-600/10 to-yellow-600/5 rounded-lg sm:rounded-xl border border-amber-600/20">
                        <h4 className="font-semibold text-white mb-1 text-xs sm:text-sm">Mon - Fri</h4>
                        <p className="text-amber-300 text-xs sm:text-sm">9am – 5pm</p>
                      </div>
                      <div className="text-center p-2.5 sm:p-3 bg-gradient-to-br from-amber-600/10 to-yellow-600/5 rounded-lg sm:rounded-xl border border-amber-600/20">
                        <h4 className="font-semibold text-white mb-1 text-xs sm:text-sm">Sat – Sun</h4>
                        <p className="text-amber-300 text-xs sm:text-sm">By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-600/30 mb-3 sm:mb-4">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm">GET IN TOUCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Start Your{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-3xl mx-auto px-4">
              Contact us for a free assessment and take the first step towards your dream
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div
              className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              data-aos="fade-up"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-amber-200 mb-1.5 sm:mb-2 text-sm sm:text-base">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-amber-200 mb-1.5 sm:mb-2 text-sm sm:text-base">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-200 mb-1.5 sm:mb-2 text-sm sm:text-base">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm sm:text-base"
                      placeholder="+1 (XXX) XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-200 mb-1.5 sm:mb-2 text-sm sm:text-base">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="express-entry">Express Entry</option>
                    <option value="pnp">Provincial Nominee Program</option>
                    <option value="study-permit">Study Permit</option>
                    <option value="work-permit">Work Permit</option>
                    <option value="pr-renewal">PR Card Renewal</option>
                    <option value="family-sponsorship">Family Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-amber-200 mb-1.5 sm:mb-2 text-sm sm:text-base">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm sm:text-base resize-none"
                    placeholder="Tell us about your immigration goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 sm:hover:-translate-y-1"
                >
                  Submit Free Assessment Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8" data-aos="fade-up" data-aos-delay="100">
              <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Australia Branch (by Appointment Only)</h4>
                      <p className="text-amber-100/70 text-xs sm:text-sm">
                        2/80 Montana Cct, <br />
                        Logan Reserve, QLD - 4133,Australia<br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">India Office (by walk-in)</h4>
                      <p className="text-amber-100/70 text-xs sm:text-sm">
                        SCO 103,3rd Floor,District <br />
                        Shopping Complex,B Block,Ranjit Avenue,<br />
                        Amritsar,Punjab ,India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Phone Numbers</h4>
                      <div className="space-y-1 sm:space-y-2">
                        <p className="text-amber-100 text-xs sm:text-sm">Australia: <span className="font-semibold">+61 412 141 111</span></p>
                        <p className="text-amber-100 text-xs sm:text-sm">India: <span className="font-semibold">+91 92169 50100</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl flex-shrink-0">
                      <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Australian Email</h4>
                      <p className="text-amber-100 text-xs sm:text-sm break-all">enquiries@assitvisaandmigration.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl flex-shrink-0">
                      <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Indian Email</h4>
                      <p className="text-amber-100 text-xs sm:text-sm break-all">info@assistvisaandmigration.com</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-8 border-t border-amber-600/20">
                  <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Connect With Us</h4>
                  <div className="flex gap-2 sm:gap-3">
                    {[Facebook, Youtube, Instagram].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-2.5 sm:p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg sm:rounded-xl border border-amber-600/30 hover:border-amber-500/50 hover:scale-110 transition-all"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Office Hours (Australia Branch)</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-100 text-sm sm:text-base">Monday - Friday</span>
                    <span className="text-amber-300 font-semibold text-sm sm:text-base">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-100 text-sm sm:text-base">Saturday</span>
                    <span className="text-amber-300 font-semibold text-sm sm:text-base">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-100 text-sm sm:text-base">Sunday</span>
                    <span className="text-amber-300 font-semibold text-sm sm:text-base">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp - Responsive positioning */}
      <a
        href="https://wa.me/14169973031"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        data-aos="fade-left"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-md sm:blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative p-3 sm:p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-xl sm:shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/50 transition-all group-hover:scale-110">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full animate-pulse">
            Live
          </div>
        </div>
      </a>

      {/* Scroll to Top - Responsive positioning */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group"
        data-aos="fade-right"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-md sm:blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative p-3 sm:p-4 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full shadow-xl sm:shadow-2xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all group-hover:scale-110">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white rotate-90" />
          </div>
        </div>
      </button>
    </div>
  );
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .bg-gradient-radial {
    background-image: radial-gradient(circle, var(--tw-gradient-stops));
  }
  /* Responsive text sizes */
  @media (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 641px) and (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }
  @media (min-width: 769px) {
    html {
      font-size: 16px;
    }
  }
`;
document.head.appendChild(style);

export default SkyBeatImmigration;
