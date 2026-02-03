import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Plane, GraduationCap, Briefcase, Home, DollarSign, Globe, FileText, Shield, TrendingUp, Sparkles, Trees } from 'lucide-react';

const NewZealandVisa = () => {
  const visaCategories = [
    {
      title: "Skilled Migrant Category",
      subcategories: [
        "Skilled Migrant Category Resident Visa",
        "Green List Residence Pathway",
        "Straight to Residence Visa",
        "Work to Residence Visa"
      ],
      points: "180+ points required",
      processingTime: "6-9 months",
      successRate: "91%",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Student Visa",
      subcategories: [
        "Fee Paying Student Visa",
        "Pathway Student Visa",
        "Exchange Student Visa",
        "Foreign Government Supported Student"
      ],
      processingTime: "4-8 weeks",
      successRate: "95%",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "Work Visa",
      subcategories: [
        "Accredited Employer Work Visa",
        "Essential Skills Work Visa",
        "Working Holiday Visa",
        "Specific Purpose Work Visa"
      ],
      processingTime: "1-3 months",
      successRate: "89%",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Family Visa",
      subcategories: [
        "Partner of a New Zealander Visa",
        "Parent Resident Visa",
        "Dependent Child Resident Visa",
        "Sibling Adult Child Category"
      ],
      processingTime: "12-18 months",
      successRate: "94%",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Business & Investment",
      subcategories: [
        "Entrepreneur Work Visa",
        "Investor Visa (Category 1 & 2)",
        "Global Impact Visa",
        "Long Term Business Visa"
      ],
      investment: "NZD $3-10 million",
      processingTime: "9-15 months",
      successRate: "86%",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Visitor Visa",
      subcategories: [
        "General Visitor Visa",
        "Business Visitor Visa",
        "Parent & Grandparent Visitor Visa",
        "NZeTA (Electronic Travel Authority)"
      ],
      processingTime: "3-6 weeks",
      successRate: "97%",
      icon: <Plane className="w-8 h-8" />
    }
  ];

  const pointsCriteria = [
    { category: "Skilled Employment", points: "50-80 points", description: "Current job offer in NZ" },
    { category: "Work Experience", points: "10-30 points", description: "Years of skilled experience" },
    { category: "Qualifications", points: "40-70 points", description: "Recognized qualifications" },
    { category: "Age", points: "10-30 points", description: "20-39 years optimal" },
    { category: "Partner's Skills", points: "Up to 20 points", description: "Partner's qualifications" },
    { category: "Regional Employment", points: "30 points", description: "Work outside Auckland" }
  ];

  const benefits = [
    "World's most peaceful country",
    "Work-life balance excellence",
    "Free healthcare for residents",
    "Quality education system",
    "Beautiful natural landscapes",
    "Low crime rate society"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&auto=format&fit=crop&q=80"
            alt="New Zealand Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Trees className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">NEW ZEALAND VISA SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              New Zealand
            </span>
            <br />
            <span className="text-white">Visa Pathways</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Discover your pathway to living in one of the world's most beautiful and peaceful countries
          </p>
        </div>
      </section>

      {/* Points Calculator */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">POINTS CALCULATOR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skilled Migrant{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Points System
              </span>
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Minimum 180 points required for Expression of Interest (EOI)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pointsCriteria.map((criteria, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{criteria.category}</h3>
                    <p className="text-amber-100/70 text-sm mt-1">{criteria.description}</p>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-full">
                    <span className="text-amber-300 font-semibold">{criteria.points}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full"
                    style={{ width: `${30 + index * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold">
              Calculate Your Points
            </button>
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">VISA OPTIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              New Zealand{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Categories
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaCategories.map((category, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl group-hover:scale-110 transition-transform">
                    {React.cloneElement(category.icon, { className: "w-8 h-8 text-amber-400" })}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                      {category.successRate}
                    </div>
                    <div className="text-amber-100/70 text-sm">Success Rate</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                
                <div className="space-y-3 mb-6">
                  {category.subcategories.map((sub, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                      <span className="text-amber-100/80 text-sm">{sub}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm mb-6">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Clock className="w-4 h-4" />
                    <span>{category.processingTime}</span>
                  </div>
                  {category.points && (
                    <div className="text-amber-300 font-medium">
                      {category.points}
                    </div>
                  )}
                  {category.investment && (
                    <div className="text-amber-300 font-medium">
                      {category.investment}
                    </div>
                  )}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Explore Visa
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                New Zealand?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:rotate-12 transition-transform">
                  <CheckCircle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Benefit {index + 1}</h3>
                <p className="text-amber-100/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">PROCESS TIMELINE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              New Zealand Visa{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Processing Steps
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { step: "EOI Submission", time: "2-4 weeks", desc: "Submit Expression of Interest" },
                { step: "ITA Received", time: "1-2 months", desc: "Invitation to Apply" },
                { step: "Documentation", time: "1-2 months", desc: "Gather required documents" },
                { step: "Application", time: "3-6 months", desc: "Submit complete application" },
                { step: "Visa Grant", time: "1-2 months", desc: "Receive visa decision" }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-lg"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-amber-600/30 flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                  <div className="text-amber-300 font-semibold mb-2">{item.time}</div>
                  <p className="text-amber-100/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
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
                Kiwi Journey
              </span>
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Experience the beauty and peace of New Zealand with our expert guidance.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewZealandVisa;