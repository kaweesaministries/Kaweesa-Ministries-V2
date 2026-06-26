import { Helmet } from 'react-helmet-async';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import PageHeader from './components/PageHeader';

import WorldMapDemo from './components/WorldMapDemo';
import SupportGuide from './SupportGuide';
import SuccessStories from './SuccessStories';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import Programs from './pages/Programs';
import AboutUs from './pages/AboutUs';
import FoundersCircle from './components/v2/FoundersCircle';
import { blogPosts } from './data/blogPosts';
import {
  Search,
  Briefcase,
  MapPin,
  PlaneTakeoff,
  Handshake,
  Home as HomeIcon,
  GraduationCap,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  Menu,
  ChevronDown,
  X,
  Filter,
  Users,
  CheckCircle2,
  FileText,
  Map,
  BookOpen,
  Code2,
  Database,
  Cloud,
  PenTool,
  Sparkles,
  Utensils,
  Sprout,
  Car,
  Wrench,
  Shield,
  Send
} from "lucide-react";
import CombinedFeaturedSection from "./components/ui/combined-featured-section";
import { Timeline } from "./components/ui/timeline";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

const NavDropdown = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-white text-white/90 transition-colors py-2 font-medium">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 bg-white text-gray-800 rounded-xl shadow-xl py-3 min-w-[220px] border border-gray-100 overflow-hidden z-50 mt-2"
          >
            {items.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="block px-5 py-2.5 hover:bg-gray-50 text-sm font-medium transition-colors text-gray-600 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <nav className="absolute top-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <Link className="font-display text-xl md:text-2xl text-white tracking-wide" to="/">KAWEESA CHILDREN'S MINISTRIES</Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/90 items-center">
            <Link className="hover:text-white transition-colors" to="/programs">Our Programs</Link>
            <Link className="hover:text-white transition-colors" to="/impact">Impact</Link>
            <Link className="hover:text-white transition-colors" to="/get-involved">Get Involved</Link>
            <Link className="hover:text-white transition-colors" to="/blog">Blog</Link>
            <Link className="hover:text-white transition-colors" to="/about">About Us</Link>
            <Link className="hover:text-white transition-colors" to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium text-white">
          <a className="hidden sm:block hover:text-white/70 transition-colors" href="#en" onClick={(e) => e.preventDefault()}>EN</a>
          <a className="hidden sm:block hover:text-white/70 transition-colors" href="#search" onClick={(e) => e.preventDefault()}>SEARCH</a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col gap-2">
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/programs" onClick={() => setIsMenuOpen(false)}>Our Programs</Link>

              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/impact" onClick={() => setIsMenuOpen(false)}>Impact</Link>
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>

              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-6">
                <a className="text-white/70 font-medium hover:text-white transition-colors" href="#en" onClick={(e) => e.preventDefault()}>EN</a>
                <a className="text-white/70 font-medium hover:text-white transition-colors" href="#search" onClick={(e) => e.preventDefault()}>SEARCH</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = () => {
  const navigate = useNavigate();

  return (
    <header className="relative min-h-[85vh] py-28 md:py-32 w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="Children in Uganda"
          className="w-full h-full object-cover"
          src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20HERO%20SECTION.jpeg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg"
        >
          Transforming Lives <br/>
          <span className="italic font-light">Through Love and Care</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/90 text-base md:text-xl tracking-wide mb-10 font-medium max-w-2xl mx-auto drop-shadow"
        >
          We are dedicated to nurturing, protecting, and empowering children in Uganda through comprehensive education, health, and development programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/donate" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg min-w-[200px]">
            Donate Now
          </Link>
          <Link to="/sponsor" className="bg-primary text-white border-2 border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-xl text-lg min-w-[200px]">
            Sponsor a Child
          </Link>
          
          <div className="flex flex-wrap justify-center gap-4 w-full mt-4 sm:mt-0 sm:w-auto">
            <a 
              href="https://wa.me/256772477774"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20BE5A] transition-all shadow-xl flex items-center gap-2 group"
            >
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const Values = () => (
  <section className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
      <h2 className="font-display text-5xl md:text-6xl text-primary leading-tight">
        Our Core <br/> Programs
      </h2>
      <div className="md:pt-4">
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">
          Transforming Communities
        </p>
        <p className="text-gray-600 max-w-md leading-relaxed">
          We implement comprehensive programs designed to address the unique needs of children and families in Uganda, ensuring lasting impact and sustainable development.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
      {[
        { icon: GraduationCap, title: "Education Support", desc: "Providing school fees, uniforms, and supplies to ensure every child has access to quality education." },
        { icon: Sparkles, title: "Health & Nutrition", desc: "Ensuring access to medical care, vaccinations, and nutritious food to support healthy development." },
        { icon: Shield, title: "Child Protection", desc: "Creating safe environments and protecting children from harm, abuse, and exploitation." },
        { icon: Users, title: "Family Empowerment", desc: "Supporting families through economic initiatives and skills training to build stable homes." }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group border-t border-gray-200 pt-6"
        >
          <div className="mb-4 text-primary">
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-primary group-hover:text-gray-600 transition-colors">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProgramCards = () => (
  <section className="pt-8 pb-16 px-6 max-w-7xl mx-auto mb-24">
    <div className="flex flex-col md:flex-row justify-between items-start mb-12">
      <div className="max-w-2xl">
        <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Our Impact Programs</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Focused initiatives designed to provide comprehensive support for children's growth and development. We believe in holistic care that transforms lives forever.
        </p>
      </div>
      <Link className="text-sm font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity" to="/programs">VIEW ALL PROGRAMS</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Education Program", location: "Kampala, Uganda", stats: "95% Enrollment Rate", badge: "SCHOOL SUPPORT", badgeColor: "bg-accent-gold", tag: "Education", tagIcon: GraduationCap, img: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(14).jpeg" },
        { title: "Health & Nutrition", location: "Wakiso, Uganda", stats: "78% Malnutrition Reduction", badge: "MEDICAL CARE", badgeColor: "bg-accent-coral text-white", tag: "Health", tagIcon: Sparkles, img: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(15).jpeg" },
        { title: "Family Empowerment", location: "Rural Communities", stats: "150+ Families Supported", badge: "ECONOMY", badgeColor: "bg-accent-lime", tag: "Empowerment", tagIcon: Users, img: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(16).jpeg" }
      ].map((program, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
            {program.badge && (
              <span className={`absolute top-4 right-4 ${program.badgeColor} text-primary text-[10px] font-bold px-2 py-1 rounded-sm z-10 tracking-wider`}>
                {program.badge}
              </span>
            )}
            <img
              alt={program.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={program.img}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <program.tagIcon className="w-3 h-3 text-primary" />
                <span className="text-primary text-[10px] font-bold tracking-tight">{program.tag}</span>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg text-primary mb-1">{program.title}</h3>
          <p className="text-sm text-gray-500 font-medium">{program.location} • <span className="text-gray-400">{program.stats}</span></p>
        </div>
      ))}
    </div>
  </section>
);

const Insights = () => (
  <section className="max-w-7xl mx-auto px-6 pb-24">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-gray-100 pb-12">
      <h2 className="font-display text-5xl md:text-6xl text-primary leading-none">
        Impact Stories <br/> & Updates
      </h2>
      <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase max-w-[240px] mt-6 md:mt-0 leading-relaxed">
        REAL STORIES FROM THE CHILDREN AND FAMILIES WE SUPPORT, PLUS UPDATES ON OUR PROGRAMS.
      </p>
    </div>

    {blogPosts.slice(0, 3).map((article, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="group flex flex-col md:flex-row gap-10 items-center mb-20 last:mb-0"
      >
        <div className="w-full md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0">
          <img
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={article.image}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-4xl md:text-5xl text-primary mb-4 leading-tight">
            {article.title}
          </h3>
          <p className="text-gray-500 text-[11px] font-bold tracking-wider mb-6 leading-relaxed max-w-2xl">
            {article.metaDescription.toUpperCase()}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-accent-lime px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">
              {article.country}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">
              {article.readTime}
            </span>
            {article.secondaryKeywords.slice(0, 1).map((kw, j) => (
              <span key={j} className="bg-primary/5 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">
                {kw}
              </span>
            ))}
          </div>
          <Link to={`/blog/${article.slug}`} className="text-[11px] font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">READ STORY</Link>
        </div>
      </motion.div>
    ))}
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-display text-2xl mb-6 uppercase">KAWEESA CHILDREN'S MINISTRIES</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transforming lives through love and care. Dedicated to nurturing and empowering children in Uganda.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">Our Programs</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link className="hover:text-white transition-colors" to="/programs">Education Support</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/programs">Health & Nutrition</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/impact">Our Impact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">Get Involved</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link className="hover:text-white transition-colors" to="/donate">Donate Now</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/sponsor">Sponsor a Child</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/volunteer">Volunteer</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>info@kaweesaministry.org</li>
            <li>+256 772 477 774</li>
            <li>Kampala, Uganda</li>
            <li><Link className="hover:text-white transition-colors" to="/contact">Contact Form</Link></li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="/" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="mailto:info@kaweesaministry.org" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="tel:+256772477774">
              <Phone className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" href="https://wa.me/256772477774" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 KAWEESA CHILDREN'S MINISTRIES. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white" href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <a className="hover:text-white" href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Partners = () => (
  <section className="py-12 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase text-center mb-8">Our Supporters & Community Partners</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <span className="font-display text-2xl font-bold tracking-tighter">UNITY FUND</span>
        <span className="font-display text-2xl font-bold tracking-tighter">HOPE GLOBAL</span>
        <span className="font-display text-2xl font-bold tracking-tighter">UGANDA TRUST</span>
        <span className="font-display text-2xl font-bold tracking-tighter">KAMPALA AID</span>
        <span className="font-display text-2xl font-bold tracking-tighter">CHILD FIRST</span>
      </div>
    </div>
  </section>
);

const CommunityExplorer = () => {
  const navigate = useNavigate();
  return (
  <section className="py-24 px-6 max-w-7xl mx-auto mb-24">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
      <div className="max-w-xl">
        <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Communities We Serve</h2>
        <p className="text-gray-600 text-lg">We work across various regions in Uganda, bringing hope and support to both urban and rural communities.</p>
      </div>
      <Link className="text-sm font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity" to="/programs">VIEW ALL COMMUNITIES</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: "Kampala", country: "Uganda", children: "200+", focus: "Urban Youth", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800" },
        { name: "Wakiso", country: "Uganda", children: "150+", focus: "Education", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" },
        { name: "Luweero", country: "Uganda", children: "100+", focus: "Health", img: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=800" }
      ].map((community, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
          onClick={() => navigate('/programs')}
        >
          <img
            alt={community.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={community.img}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">{community.country}</p>
            <h3 className="text-white font-display text-4xl mb-4">{community.name}</h3>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                <p className="text-white text-[10px] font-bold">{community.children} Children</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                <p className="text-white text-[10px] font-bold">{community.focus}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto mb-24">
      <div className="bg-accent-lime rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-primary rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-primary rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-8">Join Our Newsletter</h2>
          <p className="text-primary/70 text-lg mb-12">Stay updated with our latest impact stories, program developments, and news from our community in Uganda.</p>

          {isSubscribed ? (
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Send className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-2xl text-primary mb-2">You're Subscribed!</h3>
               <p className="text-primary/70 mb-6">Thanks for joining our community. Keep an eye on your inbox.</p>
               <button
                 onClick={() => setIsSubscribed(false)}
                 className="text-primary font-bold hover:underline text-sm uppercase tracking-wider"
               >
                 Subscribe another email
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/50 backdrop-blur-sm border-2 border-primary/10 rounded-full px-8 py-4 text-primary placeholder-primary/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => (
  <section className="max-w-4xl mx-auto px-6 mb-24">
    <h2 className="font-display text-4xl mb-12 text-center">Common questions</h2>
    <div className="space-y-4">
      {[
        { q: "How can I sponsor a child?", a: "You can choose a child from our waiting list and commit to a monthly donation of $35, which covers their education, health care, and basic needs." },
        { q: "Where does my donation go?", a: "100% of child sponsorship donations go directly to the care and support of the child. Administrative costs are covered by separate general grants." },
        { q: "Can I visit the ministry in Uganda?", a: "Yes! We welcome supporters to visit our centers in Kampala and Wakiso. Please contact our team to arrange a visit." }
      ].map((item, i) => (
        <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
          <h3 className="font-bold text-lg mb-2">{item.q}</h3>
          <p className="text-gray-600">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => {

  
  return (
    <>
      <Helmet>
        <title>KAWEESA CHILDREN'S MINISTRIES - Transforming Lives Through Love and Care</title>
        <meta name="description" content="KAWEESA CHILDREN'S MINISTRY LIMITED is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs." />
      </Helmet>
      <Hero />
      <Partners />
      <Values />

      <FoundersCircle />
      <ProgramCards />
      <CommunityExplorer />
      <CombinedFeaturedSection />

      <Insights />
      <Newsletter />
      <FAQ />
    </>
  );
};


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Programs />} />
        <Route path="/get-involved" element={<SupportGuide />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/support-guide" element={<SupportGuide />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
