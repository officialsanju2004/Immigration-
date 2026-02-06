import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Calendar, CheckCircle, Sparkles, Send } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactOffices = [
    {
      location: "Australia Branch (by Appointment Only)",
      address: "2/80 Montana Cct,Logan Reserve,QLD - 4133,Australia",
      phone: "+61 412 141 111",
      email: "enquiries@assitvisaandmigration.com",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=80",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM Sat-Sun:By Appointment Only"
    },
    {
      location: "India Branch (by walk-in)",
      address: "SCO 103,3rd Floor,District Shopping Complex,B Block,Ranjit Avenue,Amritsar,Punjab ,India",
      phone: "+91 92169 50100",
      email: "info@assistvisaandmigration.com",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop&q=80",
      hours: ""
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["Australia: +61 412 141 111", "India: +91 92169 50100"],
      action: "Call Now",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["Australia: enquiries@assitvisaandmigration.com", "India: info@assistvisaandmigration.com"],
      action: "Send Email",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["Instant Messaging", "File Sharing", "Video Calls"],
      action: "Message Now",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book Appointment",
      details: ["Free Consultation", "Video Call Options", "In-Person Meetings"],
      action: "Schedule Now",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get a consultation?",
      answer: "We offer same-day consultations for urgent cases. Typically, appointments are scheduled within 24-48 hours."
    },
    {
      question: "What documents do I need for assessment?",
      answer: "Bring your passport, educational certificates, work experience letters, and language test results for a comprehensive assessment."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans to make our services accessible. We can discuss options during your consultation."
    },
    {
      question: "Can I track my application progress?",
      answer: "Absolutely! We provide a dedicated portal where you can track your application status 24/7."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        country: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&auto=format&fit=crop&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-yellow-800/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-8">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Let's Start Your
            </span>
            <br />
            <span className="text-white">Golden Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Connect with our immigration experts and take the first step towards your dream destination.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${method.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(method.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-amber-100/70 text-sm">{detail}</p>
                  ))}
                </div>
                <button className={`w-full py-3 bg-gradient-to-br ${method.color} hover:opacity-90 rounded-lg text-white font-medium transition-all`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-xl">
                    <Send className="w-6 h-6 text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl mb-6">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-amber-100/80 mb-6">
                      Thank you for contacting Assist Visa and Migration. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-200 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-200 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-200 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="+1 (XXX) XXX-XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-200 mb-2">Service Interested In *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="express-entry">Express Entry</option>
                          <option value="pnp">Provincial Nominee Program</option>
                          <option value="study-permit">Study Permit</option>
                          <option value="work-permit">Work Permit</option>
                          <option value="pr-renewal">PR Card Renewal</option>
                          <option value="family-sponsorship">Family Sponsorship</option>
                          <option value="visitor-visa">Visitor Visa</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-amber-200 mb-2">Target Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      >
                        <option value="">Select a country</option>
                        <option value="canada">Canada</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="australia">Australia</option>
                        <option value="new-zealand">New Zealand</option>
                        <option value="europe">Europe</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-amber-200 mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-amber-600/30 rounded-lg text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                        placeholder="Tell us about your immigration goals and any specific questions..."
                      />
                    </div>

                    <div className="flex items-center gap-3 text-sm text-amber-100/70 mb-6">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span>We respond within 24 hours guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl font-semibold text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-1"
                    >
                      Submit Your Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-4 py-2 rounded-full border border-amber-600/30 mb-4">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm">OUR OFFICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Our{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Golden Locations
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactOffices.map((office, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.location}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-amber-600/90 to-yellow-600/90 rounded-full text-sm font-semibold">
                      {office.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{office.location} Office</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-amber-100/70 text-sm">{office.address}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-amber-100 text-sm font-medium">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-amber-100 text-sm font-medium">{office.email}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-amber-100/70 text-sm">{office.hours}</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-amber-100">Find quick answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/20 hover:border-amber-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-amber-100/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;