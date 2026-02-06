import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Facebook, Youtube, Instagram, Star, Globe, Users, Award, Calendar, Clock, Shield, CheckCircle, MessageCircle, Zap, Sparkles, User, FileText, TrendingUp, Target, Heart, BookOpen, Briefcase, GraduationCap, Home, Plane, FileCheck, Percent, Globe2, Mail as MailIcon, MessageSquare, Link } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../images/logo1.png';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
      const navigate = useNavigate();
   const serviceItems = [
    { name: 'Uk Visa', path: '/uk' },
    { name: 'USA Visa', path: '/usa' },
    { name: 'New Zealand Visa', path: '/new' },
    { name: 'Australia Visa', path: '/aus' },
    { name: 'Europe Visa', path: '/eu' },
    { name: 'Canada Visa', path: '/can' },
  ];
    // Handle service selection
  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  }; // Initialize AOS
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
  return (
     <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl shadow-amber-500/10 border-b border-amber-600/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
          
             <div className="flex items-center ">
                <img
                  src={logo}
                  alt="Northstar Autologistics"
                  className="object-cover h-20 w-40 sm:h-20 sm:w-40  lg:h-25 lg:w-43"
                />
                </div>
             
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-3" >
           
                <a
                
                  href={`/`}
                  className="relative px-4 py-2 text-amber-100 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/10 to-amber-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                   <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center font-medium transition-colors hover:text-primary-400 ${
                    serviceItems.some(item => location.pathname === item.path)
                      ? 'text-primary-400'
                      : 'text-white'
                  }`}
                >
                  Services
                  <FaChevronDown className={`ml-2 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
               
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {serviceItems.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceSelect(service.path)}
                          className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-primary-600 transition-colors text-gray-700 font-medium"
                        >
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
                <a
                
                  href={`/about`}
                  className="relative px-4 py-2 text-amber-100 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/10 to-amber-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                
                  href={`/contact`}
                  className="relative px-4 py-2 text-amber-100 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/10 to-amber-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

         
              <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-lg font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5">
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-amber-300" /> : <Menu className="w-6 h-6 text-amber-300" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-xl border border-amber-600/30 mt-2 p-4 space-y-2">
            
                <a
                
                  href={`/`}
                  className="block px-4 py-3 text-amber-100 hover:text-white hover:bg-gradient-to-r from-amber-600/20 to-yellow-600/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                 Home
                </a>
                  <div className="py-3 px-4">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full font-medium text-white hover:text-primary-600"
                  >
                    <span>Services</span>
                    <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                 
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2 block px-4 py-3 text-amber-100 hover:text-white hover:bg-gradient-to-r from-amber-600/20 to-yellow-600/10 rounded-lg transition-all">
                          {serviceItems.map((service) => (
                            <button
                              key={service.name}
                              onClick={() => handleServiceSelect(service.path)}
                              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-600  font-medium"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <a
                
                  href={`/about`}
                  className="block px-4 py-3 text-amber-100 hover:text-white hover:bg-gradient-to-r from-amber-600/20 to-yellow-600/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                 About Us
                </a>
                <a
                
                  href={`/contact`}
                  className="block px-4 py-3 text-amber-100 hover:text-white hover:bg-gradient-to-r from-amber-600/20 to-yellow-600/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                 Contact Us
                </a>
            
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg font-semibold shadow-lg shadow-amber-500/20">
                Book Consultation
              </button>
            </div>
          )}
        </div>
      </nav>
  )
}