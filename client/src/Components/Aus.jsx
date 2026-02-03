import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Plane, GraduationCap, Briefcase, Home, DollarSign, Globe, FileText, Shield, TrendingUp, Sparkles } from 'lucide-react';

const AustraliaVisa = () => {
  const visaCategories = [
    {
      title: "Skilled Migration Visa",
      subcategories: [
        "Skilled Independent Visa (Subclass 189)",
        "Skilled Nominated Visa (Subclass 190)",
        "Skilled Work Regional Visa (Subclass 491)",
        "Employer Nomination Scheme (Subclass 186)",
        "Regional Sponsored Migration Scheme (Subclass 187)"
      ],
      processingTime: "6-12 months",
      successRate: "92%",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Student Visa",
      subcategories: [
        "Student Visa (Subclass 500)",
        "Student Guardian Visa (Subclass 590)",
        "Training Visa (Subclass 407)",
        "Graduate Temporary Visa (Subclass 485)"
      ],
      processingTime: "1-3 months",
      successRate: "94%",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "Work Visa",
      subcategories: [
        "Temporary Skill Shortage Visa (Subclass 482)",
        "Working Holiday Visa (Subclass 417)",
        "Work and Holiday Visa (Subclass 462)",
        "Temporary Graduate Visa (Subclass 485)"
      ],
      processingTime: "2-4 months",
      successRate: "90%",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Family & Partner Visa",
      subcategories: [
        "Partner Visa (Subclass 820/801)",
        "Prospective Marriage Visa (Subclass 300)",
        "Parent Visa (Subclass 103)",
        "Child Visa (Subclass 101)"
      ],
      processingTime: "12-24 months",
      successRate: "96%",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Business & Investment Visa",
      subcategories: [
        "Business Innovation Visa (Subclass 188)",
        "Business Talent Visa (Subclass 132)",
        "Investor Visa (Subclass 891)",
        "Significant Investor Visa"
      ],
      processingTime: "8-14 months",
      successRate: "88%",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Visitor Visa",
      subcategories: [
        "Tourist Visa (Subclass 600)",
        "Electronic Travel Authority (ETA)",
        "eVisitor Visa (Subclass 651)",
        "Transit Visa (Subclass 771)"
      ],
      processingTime: "2-4 weeks",
      successRate: "98%",
      icon: <Plane className="w-8 h-8" />
    }
  ];

  const requirements = [
    {
      category: "Skilled Migration",
      points: "Minimum 65 points required",
      age: "Under 45 years",
      english: "Competent English (IELTS 6.0+)",
      skills: "Positive Skills Assessment",
      health: "Medical Examination Required"
    },
    {
      category: "Student Visa",
      enrollment: "Confirmed Enrollment (CoE)",
      funds: "Sufficient Financial Capacity",
      english: "IELTS 5.5+ or equivalent",
      insurance: "Overseas Student Health Cover",
      genuine: "Genuine Temporary Entrant"
    },
    {
      category: "Work Visa",
      sponsor: "Approved Sponsor Required",
      skills: "Relevant Qualifications & Experience",
      english: "Vocational English (IELTS 5.0+)",
      salary: "Meet Minimum Salary Threshold",
      labor: "Labor Market Testing"
    }
  ];

  const benefits = [
    "High quality of life and education",
    "Strong economy and job opportunities",
    "Universal healthcare system",
    "Multicultural society",
    "Beautiful natural environment",
    "Pathway to permanent residency"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&auto=format&fit=crop&q=80"
            alt="Australia Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">AUSTRALIA VISA SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Australia
            </span>
            <br />
            <span className="text-white">Visa Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Your pathway to living, working, studying, and settling in Australia with expert guidance
          </p>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">VISA CATEGORIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Australian Visa
              </span>{' '}
              Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaCategories.map((category, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(category.icon, { className: "w-8 h-8 text-amber-400" })}
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

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Clock className="w-4 h-4" />
                    <span>{category.processingTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>{category.successRate} Success</span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">ELIGIBILITY REQUIREMENTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{req.category}</h3>
                <div className="space-y-4">
                  {Object.entries(req).slice(1).map(([key, value], idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-amber-300 text-sm font-medium capitalize">{key}</div>
                        <div className="text-amber-100">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Australian Migration
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl mb-4">
                  <CheckCircle className="w-6 h-6 text-amber-400" />
                </div>
                <p className="text-amber-100 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">APPLICATION PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                5-Step Process
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Free eligibility check" },
              { step: "02", title: "Strategy", desc: "Personalized visa plan" },
              { step: "03", title: "Documentation", desc: "Complete paperwork" },
              { step: "04", title: "Application", desc: "Submission & tracking" },
              { step: "05", title: "Approval", desc: "Visa grant & support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-amber-600/30 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-amber-100/70 text-sm">{item.desc}</p>
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
              Ready for Your{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Australian Adventure?
              </span>
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the Australian visa process with confidence.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Start Your Free Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AustraliaVisa;