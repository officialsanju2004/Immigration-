import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Plane, GraduationCap, Briefcase, Home, DollarSign, Globe, FileText, Shield, TrendingUp, Sparkles, Leaf } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const CanadaVisa = () => {
  const expressEntryPrograms = [
    {
      name: "Federal Skilled Worker Program",
      points: "Minimum 67/100",
      processing: "6 months",
      requirements: ["1+ year skilled work", "Language test", "Education assessment"],
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      name: "Federal Skilled Trades Program",
      points: "No minimum score",
      processing: "6-8 months",
      requirements: ["Trade certification", "Job offer/experience", "Language test"],
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      name: "Canadian Experience Class",
      points: "CRS based",
      processing: "3-4 months",
      requirements: ["1+ year Canada work", "Language test", "Valid status"],
      icon: <Users className="w-8 h-8" />
    }
  ];

  const provincialPrograms = [
    {
      province: "Ontario",
      programs: ["OINP - Human Capital", "OINP - Employer Job Offer", "OINP - French Speaking"],
      processing: "3-6 months",
      icon: "🇨🇦"
    },
    {
      province: "British Columbia",
      programs: ["BC PNP - Skills Immigration", "BC PNP - Express Entry", "BC PNP - Tech Pilot"],
      processing: "3-4 months",
      icon: "🇨🇦"
    },
    {
      province: "Alberta",
      programs: ["AINP - Express Entry", "AINP - Opportunity Stream", "AINP - Farm Stream"],
      processing: "4-6 months",
      icon: "🇨🇦"
    },
    {
      province: "Quebec",
      programs: ["Quebec Skilled Worker", "Quebec Experience", "Quebec Investor"],
      processing: "12-18 months",
      icon: "🇨🇦"
    }
  ];

  const visaCategories = [
    {
      category: "Study Visa",
      options: ["Study Permit", "Post-Graduation Work Permit", "Student Direct Stream"],
      processing: "4-12 weeks",
      success: "94%",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      category: "Work Visa",
      options: ["LMIA Work Permit", "Intra-Company Transfer", "Start-up Visa", "CUSMA"],
      processing: "2-4 months",
      success: "91%",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      category: "Family Sponsorship",
      options: ["Spouse/Partner", "Parents/Grandparents", "Dependent Children", "Other Relatives"],
      processing: "12-24 months",
      success: "96%",
      icon: <Users className="w-8 h-8" />
    },
    {
      category: "Visitor Visa",
      options: ["Tourist Visa", "Super Visa", "Business Visitor", "Transit Visa"],
      processing: "2-4 weeks",
      success: "97%",
      icon: <Plane className="w-8 h-8" />
    }
  ];

  const crsPoints = [
    { factor: "Core/Human Capital", points: "Maximum 600", items: ["Age", "Education", "Work Experience", "Language"] },
    { factor: "Skill Transferability", points: "Maximum 100", items: ["Education + Language", "Education + Work", "Foreign Work + Language"] },
    { factor: "Additional Points", points: "Maximum 600", items: ["PNP Nomination", "Job Offer", "French Language", "Siblings in Canada"] }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&auto=format&fit=crop&q=80"
            alt="Canada Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Leaf className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">CANADA VISA SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Canada
            </span>
            <br />
            <span className="text-white">Immigration Pathways</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to Canadian immigration with Express Entry, PNP, and work/study options
          </p>
        </div>
      </section>

      {/* Express Entry */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">EXPRESS ENTRY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Express Entry{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                CRS System
              </span>
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Comprehensive Ranking System determines your eligibility for permanent residence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expressEntryPrograms.map((program, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(program.icon, { className: "w-8 h-8 text-amber-400" })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{program.name}</h3>
                
                <div className="mb-6">
                  <div className="text-amber-300 font-semibold mb-2">Minimum Points: {program.points}</div>
                  <div className="text-amber-100/70 text-sm">Processing: {program.processing}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {program.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-100/80 text-sm">{req}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Check Eligibility
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRS Points Breakdown */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CRS Points{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Distribution
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {crsPoints.map((section, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                    {section.points}
                  </div>
                  <div className="text-amber-300 font-semibold">{section.factor}</div>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-amber-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincial Programs */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">PROVINCIAL NOMINEE PROGRAMS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Provincial{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Pathways
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {provincialPrograms.map((program, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl">{program.icon}</div>
                  <div className="text-amber-300 font-semibold">{program.processing}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{program.province}</h3>
                
                <div className="space-y-2 mb-6">
                  {program.programs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="text-amber-100/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all text-sm">
                  Explore {program.province}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">OTHER VISA CATEGORIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Visa Options
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaCategories.map((category, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl">
                    {React.cloneElement(category.icon, { className: "w-8 h-8 text-amber-400" })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{category.success}</div>
                    <div className="text-amber-100/70 text-sm">Success</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                
                <div className="space-y-2 mb-6">
                  {category.options.map((option, idx) => (
                    <div key={idx} className="text-amber-100/80 text-sm">• {option}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Clock className="w-4 h-4" />
                    <span>{category.processing}</span>
                  </div>
                  <button className="text-amber-400 hover:text-amber-300 transition-colors">
                    Details →
                  </button>
                </div>
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
              Your{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Canadian Dream
              </span>
              {' '}Awaits
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let us help you navigate the Canadian immigration system with expert guidance.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Calculate Your CRS Score
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default CanadaVisa;