
 import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Facebook, Youtube, Instagram, Star, Globe, Users, Award, Calendar, Clock, Shield, CheckCircle, MessageCircle, Zap, Sparkles, User, FileText, TrendingUp, Target, Heart, BookOpen, Briefcase, GraduationCap, Home, Plane, FileCheck, Percent, Globe2, Mail as MailIcon, MessageSquare, Link } from 'lucide-react';
import AOS from 'aos';
import logo from '../../images/logo1.png';
import 'aos/dist/aos.css';
 export default function Footer() {
   return (
      <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-amber-600/20 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-5">
                <img
                  src={logo}
                  alt="Northstar Autologistics"
                  className="object-cover h-20 w-40 sm:h-20 sm:w-40  lg:h-25 lg:w-43"
                />
                </div>
              <p className="text-amber-100/70 text-sm mb-4">
                Transforming dreams into realities through expert immigration guidance and unparalleled service excellence.
              </p>
              <div className="flex gap-3">
                {[Facebook, Youtube, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 hover:scale-110 transition-all"
                  >
                    <Icon className="w-4 h-4 text-amber-300" />
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Quick Links",
                links: ["Home", "About Us", "Contact"],
                path: ["/", "/about", "/contact"]
              },
              {
                title: "Services",
                links: ["Uk Visa" ,"USA Visa","Europe Visa","New Zealand Visa","Canada Visa" ,"Australia Visa "],
                path:["/uk","/usa","/eu","/new","/ca","/aus"]
              },
              {
                title: "Contact",
                links: ["Australian Address - 2/80 Montana Cct,Logan Reserve,QLD - 4133,Australia", "Australian Number- +61 412 141 111", "Australian Email - enquiries@assitvisaandmigration.com,Indian Address - SCO 103,3rd Floor,District Shopping Complex,B Block,Ranjit Avenue,Amritsar,Punjab ,India","Indian Number - +91 92169 50100", "Indian Email - info@assistvisaandmigration.com"],
                path:["/","/","/","/","/","/"]
              }
            ].map((column, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-amber-200 mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={column.path[i]}
                        className="text-amber-100/70 hover:text-amber-300 hover:pl-2 transition-all text-sm flex items-center gap-2 cursor-pointer"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                      
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

             <div className="border-t border-white/20 px-4 md:px-20 py-4
flex flex-col items-center gap-2 text-[#F2E9D8]">

  {/* LINE 1 */}
  <div className="
    flex items-center justify-center gap-1
    text-xs md:text-base
    whitespace-nowrap
    text-center
  ">
    <span>© {new Date().getFullYear()}</span>
    <span
      onClick={() => window.location.href = 'https://assistvisaandmigration.com'}
      className="cursor-pointer text-[#B23A2F] font-semibold"
    >
     assistvisaandmigration.com
    </span>
  </div>

  {/* LINE 2 */}
  {/* <div className="
    flex items-center justify-center gap-1
    text-xs md:text-base
    text-center
  ">
    <span>Developed and Managed by</span>
    <span
      onClick={() => window.location.href = 'https://growthflowmedia.com'}
      className="cursor-pointer text-[#B23A2F] font-semibold"
    >
      GROWTH FLOW MEDIA
    </span>
  </div> */}

</div>
        </div>
      </footer>
   )
 }
 
 
 

     