import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Plane, GraduationCap, Briefcase, Home, DollarSign, Globe, FileText, Shield, TrendingUp, Sparkles, Flag } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const EuropeVisa = () => {
  const schengenCountries = [
    "Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland",
    "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands",
    "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain",
    "Sweden", "Switzerland"
  ];

  const workPermits = [
    {
      country: "Germany",
      types: ["EU Blue Card", "ICT Card", "Job Seeker Visa"],
      processing: "2-3 months",
      requirements: ["University degree", "Job offer", "Salary threshold"],
      icon: "🇩🇪"
    },
    {
      country: "France",
      types: ["Talent Passport", "EU Blue Card", "Salarié Visa"],
      processing: "1-2 months",
      requirements: ["Job contract", "Qualifications", "Salary criteria"],
      icon: "🇫🇷"
    },
    {
      country: "Netherlands",
      types: ["Highly Skilled Migrant", "EU Blue Card", "ICT Permit"],
      processing: "2-4 weeks",
      requirements: ["Sponsor company", "Salary criteria", "Knowledge test"],
      icon: "🇳🇱"
    },
    {
      country: "Spain",
      types: ["Highly Qualified", "EU Blue Card", "Work & Residence"],
      processing: "1-3 months",
      requirements: ["Job offer", "Professional degree", "Clean record"],
      icon: "🇪🇸"
    }
  ];

  const studentVisas = [
    {
      country: "Germany",
      benefits: ["Low tuition fees", "Post-study work", "EU residence"],
      duration: "2+ years",
      workHours: "120 full days",
      processing: "4-8 weeks",
      icon: "🇩🇪"
    },
    {
      country: "France",
      benefits: ["Affordable education", "French language", "EU mobility"],
      duration: "Varies",
      workHours: "964 hours/year",
      processing: "3-6 weeks",
      icon: "🇫🇷"
    },
    {
      country: "Netherlands",
      benefits: ["English programs", "Orientation year", "EU access"],
      duration: "Program length",
      workHours: "16 hours/week",
      processing: "4-8 weeks",
      icon: "🇳🇱"
    },
    {
      country: "Italy",
      benefits: ["Historic universities", "EU recognition", "Cultural experience"],
      duration: "Program length",
      workHours: "20 hours/week",
      processing: "1-2 months",
      icon: "🇮🇹"
    }
  ];

  const goldenVisas = [
    {
      country: "Portugal",
      investment: "€280,000+",
      type: "Real estate",
      residency: "5 years",
      citizenship: "After 5 years",
      icon: "🇵🇹"
    },
    {
      country: "Greece",
      investment: "€250,000",
      type: "Real estate",
      residency: "5 years",
      citizenship: "After 7 years",
      icon: "🇬🇷"
    },
    {
      country: "Spain",
      investment: "€500,000",
      type: "Real estate",
      residency: "5 years",
      citizenship: "After 10 years",
      icon: "🇪🇸"
    },
    {
      country: "Malta",
      investment: "€600,000+",
      type: "Contribution",
      residency: "Immediate",
      citizenship: "12-36 months",
      icon: "🇲🇹"
    }
  ];

  const euBlueCard = {
    requirements: [
      "Higher education qualification",
      "Work contract 1+ year",
      "Salary threshold met",
      "Health insurance",
      "Valid travel document"
    ],
    benefits: [
      "Work & residence EU-wide",
      "Family reunification",
      "Permanent residence after 33 months",
      "Unrestricted work rights",
      "Social security benefits"
    ],
    salaryThresholds: [
      { country: "Germany", amount: "€45,300" },
      { country: "France", amount: "€43,836" },
      { country: "Spain", amount: "€30,000" },
      { country: "Netherlands", amount: "€5,008/month" }
    ]
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&auto=format&fit=crop&q=80"
            alt="Europe Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <Flag className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">EUROPE VISA SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Europe
            </span>
            <br />
            <span className="text-white">Immigration Pathways</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Schengen visas, EU Blue Card, work permits, study programs, and golden visa opportunities across Europe
          </p>
        </div>
      </section>

      {/* Schengen Countries */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Globe className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">SCHENGEN AREA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                26 Countries
              </span>{' '}
              One Visa
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Single visa for travel across 26 European countries in the Schengen Area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {schengenCountries.map((country, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-amber-600/20 text-center hover:border-amber-500/50 transition-all"
              >
                <div className="text-lg font-semibold text-amber-300">{country}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { type: "Tourist Visa", duration: "90/180 days", processing: "15 calendar days" },
              { type: "Business Visa", duration: "90/180 days", processing: "10-15 days" },
              { type: "Medical Visa", duration: "As needed", processing: "Priority processing" }
            ].map((visa, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
                <h3 className="text-xl font-bold text-white mb-3">{visa.type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-amber-100/70">Duration:</span>
                    <span className="text-amber-300 font-semibold">{visa.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-100/70">Processing:</span>
                    <span className="text-amber-300 font-semibold">{visa.processing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU Blue Card */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">EU BLUE CARD</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              European Union{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Blue Card
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Requirements</h3>
              <div className="space-y-4">
                {euBlueCard.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-amber-100">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
              <div className="space-y-4">
                {euBlueCard.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg">
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-amber-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Salary Thresholds */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Salary Thresholds</h3>
              <div className="space-y-4">
                {euBlueCard.salaryThresholds.map((threshold, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-semibold text-amber-300">{threshold.country}</div>
                      <div className="text-amber-400 font-bold">{threshold.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Permits */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              European{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Work Permits
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workPermits.map((country, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">{country.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{country.country}</h3>
                    <div className="text-amber-300 text-sm">{country.processing}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-amber-100 font-medium mb-2">Visa Types:</div>
                    {country.types.map((type, idx) => (
                      <div key={idx} className="text-amber-100/80 text-sm ml-4">• {type}</div>
                    ))}
                  </div>
                  <div>
                    <div className="text-amber-100 font-medium mb-2">Requirements:</div>
                    {country.requirements.map((req, idx) => (
                      <div key={idx} className="text-amber-100/80 text-sm ml-4">• {req}</div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Apply for {country.country}
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
              <span className="text-amber-300 text-sm">STUDY IN EUROPE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              European{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Study Programs
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentVisas.map((country, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">{country.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{country.country}</h3>
                    <div className="text-amber-300 text-sm">{country.processing}</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-amber-100 font-medium mb-2">Benefits:</div>
                    {country.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-amber-100/80 text-sm ml-4">• {benefit}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-amber-100 font-medium">Duration</div>
                      <div className="text-amber-300">{country.duration}</div>
                    </div>
                    <div>
                      <div className="text-amber-100 font-medium">Work Hours</div>
                      <div className="text-amber-300">{country.workHours}</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Study in {country.country}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visas */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <DollarSign className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">GOLDEN VISA PROGRAMS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              European{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Investment Visas
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goldenVisas.map((program, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{program.country}</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                      {program.investment}
                    </div>
                    <div className="text-amber-100/70">Minimum Investment</div>
                  </div>
                  
                  <div className="space-y-3">
                    {Object.entries(program).slice(2).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-amber-100/70 capitalize">{key}:</span>
                        <span className="text-amber-300 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  Invest in {program.country}
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
              Explore{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                European Opportunities
              </span>
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              From Schengen visas to EU Blue Cards and Golden Visas, we guide you through European immigration.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1">
              Book Schengen Visa Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default EuropeVisa;