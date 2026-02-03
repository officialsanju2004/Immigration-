import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Plane, GraduationCap, Briefcase, Home, DollarSign, Globe, FileText, Shield, TrendingUp, Sparkles, Flag } from 'lucide-react';

const USAVisa = () => {
  const workVisas = [
    {
      category: "H-1B Visa",
      description: "Specialty Occupations",
      requirements: ["Bachelor's degree", "Specialized knowledge", "Employer sponsor"],
      quota: "85,000/year",
      processing: "3-6 months",
      lottery: "Yes",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      category: "L-1 Visa",
      description: "Intra-Company Transfer",
      requirements: ["Managerial role", "1 year overseas employment", "Same employer"],
      quota: "No limit",
      processing: "2-4 months",
      lottery: "No",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      category: "O-1 Visa",
      description: "Extraordinary Ability",
      requirements: ["National/international acclaim", "Evidence of achievements", "US employer"],
      quota: "No limit",
      processing: "2-3 months",
      lottery: "No",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const immigrantVisas = [
    {
      category: "EB-1",
      title: "Extraordinary Ability",
      priority: "First",
      processing: "6-8 months",
      requirements: ["International recognition", "Awards", "Memberships"],
      icon: <Award className="w-8 h-8" />
    },
    {
      category: "EB-2",
      title: "Advanced Degree",
      priority: "Second",
      processing: "1-2 years",
      requirements: ["Advanced degree", "Exceptional ability", "National interest waiver"],
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      category: "EB-3",
      title: "Skilled Workers",
      priority: "Third",
      processing: "2-3 years",
      requirements: ["Bachelor's degree", "2+ years experience", "Labor certification"],
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      category: "EB-5",
      title: "Investor Visa",
      priority: "Fifth",
      processing: "2-3 years",
      requirements: ["$900,000 investment", "Create 10 jobs", "Business plan"],
      icon: <DollarSign className="w-8 h-8" />
    }
  ];

  const studentVisas = [
    {
      type: "F-1 Visa",
      description: "Academic Students",
      requirements: ["SEVIS fee payment", "Form I-20", "Sufficient funds"],
      workOptions: ["CPT", "OPT", "STEM OPT"],
      processing: "2-3 months",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      type: "J-1 Visa",
      description: "Exchange Visitors",
      requirements: ["DS-2019 form", "Sponsor program", "Two-year rule"],
      categories: ["Professor", "Researcher", "Specialist"],
      processing: "1-2 months",
      icon: <Globe className="w-8 h-8" />
    },
    {
      type: "M-1 Visa",
      description: "Vocational Students",
      requirements: ["Non-academic program", "Form I-20", "Practical training"],
      limitations: ["Limited work", "No OPT", "Specific programs"],
      processing: "2-3 months",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const visaWaiver = {
    countries: ["UK", "Germany", "France", "Japan", "Australia", "South Korea"],
    duration: "90 days",
    requirements: ["ESTA approval", "Valid passport", "Return ticket"],
    restrictions: ["No work", "No study", "No extension"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1600&auto=format&fit=crop&q=80"
            alt="USA Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Flag className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">USA VISA SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              United States
            </span>
            <br />
            <span className="text-white">Visa Categories</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive US visa solutions for work, study, investment, and family immigration
          </p>
        </div>
      </section>

      {/* Work Visas */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">WORK VISAS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              US Work{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Options
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workVisas.map((visa, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(visa.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{visa.category}</h3>
                    <p className="text-amber-300 text-sm">{visa.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${visa.lottery === 'Yes' ? 'bg-red-600/20 text-red-400' : 'bg-green-600/20 text-green-400'}`}>
                    {visa.lottery}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {visa.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-100/80 text-sm">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-amber-300 font-semibold">{visa.quota}</div>
                    <div className="text-amber-100/70 text-xs">Annual Quota</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-amber-300 font-semibold">{visa.processing}</div>
                    <div className="text-amber-100/70 text-xs">Processing</div>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Check Eligibility
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigrant Visas */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Home className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">EMPLOYMENT-BASED GREEN CARDS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              EB Category{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Priority Workers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {immigrantVisas.map((visa, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all"
              >
                <div className="absolute top-4 right-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                    {visa.category}
                  </div>
                </div>
                
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6">
                  {React.cloneElement(visa.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{visa.title}</h3>
                <div className="text-amber-300 text-sm mb-4">Priority: {visa.priority}</div>
                
                <div className="space-y-2 mb-6">
                  {visa.requirements.slice(0, 2).map((req, idx) => (
                    <div key={idx} className="text-amber-100/80 text-sm">• {req}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-amber-300 font-semibold">{visa.processing}</div>
                  <button className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                    Details →
                  </button>
                </div>
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
              US Study{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Programs
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studentVisas.map((visa, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl">
                    {React.cloneElement(visa.icon, { className: "w-8 h-8 text-amber-400" })}
                  </div>
                  <div className="text-right">
                    <div className="text-amber-300 font-semibold">{visa.processing}</div>
                    <div className="text-amber-100/70 text-sm">Processing</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{visa.type}</h3>
                <p className="text-amber-300 mb-6">{visa.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-amber-100 font-medium mb-2">Requirements:</div>
                    {visa.requirements.map((req, idx) => (
                      <div key={idx} className="text-amber-100/80 text-sm ml-4">• {req}</div>
                    ))}
                  </div>
                  <div>
                    <div className="text-amber-100 font-medium mb-2">
                      {visa.type === 'F-1' ? 'Work Options:' : visa.type === 'J-1' ? 'Categories:' : 'Limitations:'}
                    </div>
                    {(visa.workOptions || visa.categories || visa.limitations).map((item, idx) => (
                      <div key={idx} className="text-amber-100/80 text-sm ml-4">• {item}</div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Waiver Program */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Plane className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">VISA WAIVER PROGRAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ESTA &{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                VWP Countries
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Country List */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Eligible Countries</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {visaWaiver.countries.map((country, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20 text-center"
                  >
                    <div className="text-lg font-semibold text-amber-300">{country}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Program Details</h3>
              <div className="space-y-6">
                {Object.entries(visaWaiver).slice(1).map(([key, value], index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-amber-300 font-semibold capitalize mb-1">{key}:</div>
                      {Array.isArray(value) ? (
                        <div className="space-y-1">
                          {value.map((item, idx) => (
                            <div key={idx} className="text-amber-100/80 text-sm">• {item}</div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-amber-100">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-yellow-800/30 border border-amber-600/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Achieve Your{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                American Dream
              </span>
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let us guide you through the complex US immigration process with expert legal support.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Start H-1B Lottery Registration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USAVisa;