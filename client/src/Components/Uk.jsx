import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Plane, GraduationCap, Briefcase, Home, DollarSign, Globe, FileText, Shield, TrendingUp, Sparkles, Crown } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const UKVisa = () => {
  const pointsBasedSystem = [
    {
      route: "Skilled Worker",
      points: "70 points required",
      requirements: [
        { item: "Job Offer", points: "20", mandatory: true },
        { item: "Skill Level", points: "20", mandatory: true },
        { item: "English Language", points: "10", mandatory: true },
        { item: "Salary Threshold", points: "20", mandatory: false },
        { item: "PhD Qualification", points: "10", mandatory: false },
        { item: "Shortage Occupation", points: "20", mandatory: false }
      ],
      processing: "3 weeks",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      route: "Student",
      points: "70 points required",
      requirements: [
        { item: "CAS from Sponsor", points: "50", mandatory: true },
        { item: "Financial Requirement", points: "10", mandatory: true },
        { item: "English Language", points: "10", mandatory: true }
      ],
      processing: "3 weeks",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      route: "Global Talent",
      points: "Endorsement required",
      fields: ["Academia", "Arts & Culture", "Digital Technology", "Research", "Engineering"],
      processing: "3 weeks",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const workVisas = [
    {
      type: "Skilled Worker Visa",
      duration: "Up to 5 years",
      extension: "Yes",
      settlement: "After 5 years",
      salary: "£26,200+",
      sponsor: "Required",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      type: "Health & Care Worker",
      duration: "Up to 5 years",
      extension: "Yes",
      settlement: "After 5 years",
      salary: "£20,960+",
      sponsor: "Required",
      icon: <Users className="w-8 h-8" />
    },
    {
      type: "Intra-Company Transfer",
      duration: "2-5 years",
      extension: "Yes",
      settlement: "After 5 years",
      salary: "£42,400+",
      sponsor: "Required",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      type: "Scale-up Worker",
      duration: "2 years",
      extension: "3 years",
      settlement: "After 5 years",
      salary: "£33,000+",
      sponsor: "Required",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const studentVisas = [
    {
      type: "Student Visa",
      levels: ["Bachelor's", "Master's", "PhD"],
      workHours: "20 hours/week",
      dependents: "Postgraduate only",
      extension: "Yes",
      processing: "3 weeks",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      type: "Graduate Visa",
      duration: "2-3 years",
      work: "Any work allowed",
      requirements: "UK degree",
      settlement: "No",
      processing: "8 weeks",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      type: "Child Student",
      ages: "4-17 years",
      education: "Private school",
      guardianship: "Required",
      extension: "Yes",
      processing: "3 weeks",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const businessVisas = [
    {
      type: "Innovator Founder",
      investment: "No minimum",
      business: "Innovative/viable",
      endorsement: "Required",
      settlement: "3 years",
      processing: "3 weeks",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      type: "Start-up Visa",
      investment: "No minimum",
      business: "Innovative idea",
      endorsement: "Required",
      settlement: "No",
      processing: "3 weeks",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      type: "Investor Visa",
      investment: "£2 million",
      duration: "3 years 4 months",
      settlement: "Yes",
      endorsement: "Not required",
      processing: "3 weeks",
      icon: <DollarSign className="w-8 h-8" />
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
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&auto=format&fit=crop&q=80"
            alt="UK Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">UK VISA SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              United Kingdom
            </span>
            <br />
            <span className="text-white">Visa Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Navigate the UK Points-Based System with expert guidance for work, study, and business visas
          </p>
        </div>
      </section>

      {/* Points Based System */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">POINTS-BASED SYSTEM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Immigration Points
              </span>
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Minimum 70 points required for Skilled Worker and Student routes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pointsBasedSystem.map((route, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(route.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{route.route}</h3>
                  <div className="text-amber-300 font-semibold">{route.points}</div>
                </div>

                {route.requirements ? (
                  <div className="space-y-3 mb-6">
                    {route.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 ${req.mandatory ? 'text-amber-400' : 'text-amber-600'}`} />
                          <span className="text-amber-100/80">{req.item}</span>
                        </div>
                        <span className={`font-semibold ${req.mandatory ? 'text-amber-300' : 'text-amber-600'}`}>
                          {req.points}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2 mb-6">
                    {route.fields.map((field, idx) => (
                      <div key={idx} className="text-amber-100/80 text-sm">• {field}</div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Clock className="w-4 h-4" />
                    <span>{route.processing}</span>
                  </div>
                  <button className="text-amber-400 hover:text-amber-300 transition-colors">
                    Calculate Points →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Visas */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">WORK VISAS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK Work{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Options
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workVisas.map((visa, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6">
                  {React.cloneElement(visa.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{visa.type}</h3>
                
                <div className="space-y-4 mb-6">
                  {Object.entries(visa).slice(2).map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-amber-100/70 capitalize">{key}:</span>
                      <span className="text-amber-300 font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Visas */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">STUDENT VISAS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK Study{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Programs
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studentVisas.map((visa, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:rotate-12 transition-transform">
                  {React.cloneElement(visa.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{visa.type}</h3>
                
                <div className="space-y-3 mb-6">
                  {Object.entries(visa).slice(2).map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-amber-100/70 capitalize">{key}:</span>
                      <span className="text-amber-300 font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Get CAS Support
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Visas */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">BUSINESS & INVESTMENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK Business{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Routes
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessVisas.map((visa, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6">
                  {React.cloneElement(visa.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{visa.type}</h3>
                
                <div className="space-y-3 mb-6">
                  {Object.entries(visa).slice(2).map(([key, value], idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-amber-300 font-medium capitalize">{key}</div>
                        <div className="text-amber-100">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Get Endorsement
                </button>
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
              Begin Your{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                UK Journey
              </span>
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let our UK immigration experts guide you through the Points-Based System with confidence.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Start Your Points Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/></>
  );
};

export default UKVisa;