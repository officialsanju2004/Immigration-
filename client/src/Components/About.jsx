import React from 'react';
import { Users, Award, Target, Heart, Shield, Clock, CheckCircle, Sparkles, Globe, BookOpen, TrendingUp, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Harmeet Bamrah",
      role: "Founder & RCIC Consultant",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=80",
      experience: "15+ Years",
      description: "Licensed RCIC with extensive experience in Canadian immigration law"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80",
      experience: "12+ Years",
      description: "Immigration law specialist with focus on complex cases"
    },
    {
      name: "Priya Sharma",
      role: "Client Success Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&auto=format&fit=crop&q=80",
      experience: "8+ Years",
      description: "Dedicated to ensuring client satisfaction and smooth processing"
    },
    {
      name: "Amit Singh",
      role: "Documentation Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
      experience: "10+ Years",
      description: "Expert in document preparation and verification"
    }
  ];

  const milestones = [
    { year: "2008", title: "Founded SkyBeat Immigration", description: "Started with a vision to provide ethical immigration services" },
    { year: "2012", title: "RCIC Certification", description: "Obtained official RCIC license from CICC" },
    { year: "2015", title: "1000+ Clients Served", description: "Milestone achievement in client success stories" },
    { year: "2018", title: "International Expansion", description: "Opened offices in Canada and India" },
    { year: "2021", title: "95% Success Rate", description: "Achieved industry-leading success rate" },
    { year: "2023", title: "10,000+ Success Stories", description: "Transformed dreams into realities worldwide" }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empathy",
      description: "We understand and care about your immigration journey"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every application we handle"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Commitment",
      description: "We're dedicated to your success from start to finish"
    }
  ];

  return (
    <>
     <Navbar/> 
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
    
    {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&auto=format&fit=crop&q=80"
            alt="About Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">OUR STORY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Our Golden
            </span>
            <br />
            <span className="text-white">Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been transforming immigration dreams into golden realities with expertise, integrity, and compassion.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
              <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-amber-100/80 leading-relaxed mb-6">
                To provide exceptional immigration services that transform dreams into realities through expert guidance, ethical practices, and personalized attention.
              </p>
              <ul className="space-y-3">
                {['Expert Legal Guidance', 'Personalized Strategies', 'Transparent Processes', 'Client Success Focus'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-amber-100">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
              <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6">
                <Globe className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-amber-100/80 leading-relaxed mb-6">
                To be the most trusted and successful immigration consultancy worldwide, known for turning aspirations into achievements with golden results.
              </p>
              <ul className="space-y-3">
                {['Global Excellence', 'Innovative Solutions', 'Sustainable Growth', 'Community Impact'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-amber-100">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Heart className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">OUR VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Principles
              </span>
              {' '}We Live By
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(value.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-amber-100/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">MEET OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Team
              </span>
              {' '}Behind Your Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-amber-600/90 to-yellow-600/90 rounded-full text-sm font-semibold">
                      {member.experience}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-amber-300 mb-3">{member.role}</p>
                  <p className="text-amber-100/70 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Milestones
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-yellow-600 to-amber-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all">
                      <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-amber-100/70 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-md"></div>
                      <div className="relative w-8 h-8 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full border-4 border-gray-900"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
              { number: "95%", label: "Success Rate", icon: <Target className="w-8 h-8" /> },
              { number: "10K+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
              { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl">
                    {React.cloneElement(stat.icon, { className: "w-8 h-8 text-amber-400" })}
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-yellow-800/30 border border-amber-600/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Your Success Story?
              </span>
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands who have achieved their immigration dreams with our golden touch.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;