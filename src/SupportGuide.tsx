import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from './components/PageHeader';
import { Shield, FileCheck, Info, CheckCircle2, FileText, Globe, Heart, Users, CheckSquare, GraduationCap, Sparkles } from 'lucide-react';
import { Badge } from './components/ui/Badge';

const SupportGuide = () => {

  const [activeTab, setActiveTab] = useState(0);

  const supportTypes = [
    {
      id: "child-sponsorship",
      title: "Child Sponsorship",
      icon: <Heart className="w-5 h-5" />,
      desc: "Connect directly with a child and support their education, health, and holistic development.",
      features: ["Monthly letters & updates", "Birthday & holiday cards", "Academic progress reports"],
      requirements: [
        "Commitment to monthly support ($35/month)",
        "Willingness to encourage and pray for your student",
        "Consistent communication through our platform",
        "At least 1-year sponsorship commitment preferred"
      ]
    },
    {
      id: "project-funding",
      title: "Project Funding",
      icon: <Sparkles className="w-5 h-5" />,
      desc: "Support specific initiatives like building classrooms, mobile clinics, or vocational training centers.",
      features: ["One-time or recurring gifts", "Impact reports for the project", "Named recognition for major gifts"],
      requirements: [
        "Donation to a specific active project fund",
        "Participation in fundraising campaigns",
        "Spreading awareness within your network"
      ]
    },
    {
      id: "corporate-partnership",
      title: "Corporate Partnership",
      icon: <Users className="w-5 h-5" />,
      desc: "Strategic partnerships for companies to fulfill their CSR goals and make a global impact.",
      features: ["Employee engagement programs", "Joint marketing initiatives", "Tax-deductible contributions"],
      requirements: [
        "Alignment with our core mission and values",
        "Annual partnership agreement",
        "Collaboration on sustainability goals"
      ]
    }
  ];

  const steps = [
    {
      title: "Choose a Program",
      desc: "Select between child sponsorship, project funding, or general support based on your heart for the mission.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Secure Donation",
      desc: "Set up your secure recurring or one-time contribution through our vetted payment partners.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Welcome Package",
      desc: "Receive your student's profile or project details and a welcome kit from our team in Uganda.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Ongoing Impact",
      desc: "Stay connected through regular updates and see how your support is transforming lives.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sponsorship & Support Guide - KAWEESA CHILDREN'S MINISTRIES</title>
        <meta name="description" content="Comprehensive guide on how to support KAWEESA CHILDREN'S MINISTRIES through sponsorship, donations, and partnership." />
      </Helmet>
      <div className="min-h-screen bg-white">
      <PageHeader
        title="Support & Sponsorship Guide"
        subtitle="How you can make a lasting difference in Uganda"
        bgImage="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/HERO%20SECTION%20IMAGE%20TWO.jpeg"
      />

      {/* Introduction Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="new" className="mb-4">Impact Guidance</Badge>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">Transforming lives together</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe that every child deserves a chance to thrive. Your support provides the foundation for success through education, health care, and spiritual nourishment. We've simplified the process so you can focus on the impact you're making.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Financial Integrity</h3>
                  <p className="text-gray-600">We are committed to full transparency and accountability in how every dollar is utilized for the children.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <FileCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Direct Impact</h3>
                  <p className="text-gray-600">Our local team in Uganda ensures that your support reaches the children and families who need it most, without delay.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl mb-8 flex items-center gap-3 text-gray-900">
                <CheckSquare className="w-8 h-8 text-primary" /> Sponsorship Checklist
              </h3>
              <ul className="space-y-6">
                {[
                  "Select a child or program to support",
                  "Choose your monthly or one-time gift amount",
                  "Complete the secure online sponsorship form",
                  "Receive your student's profile and welcome kit",
                  "Start your journey of transformation together"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 font-medium">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent-lime/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-4 bg-primary/5 rounded-2xl border border-primary/10 flex gap-4 items-start">
                <Info className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-600">Have specific questions about sponsorship? Our donor care team is here to help you every step of the way.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">The Journey</Badge>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Simple Steps to Support</h2>
          <p className="text-gray-600 text-lg">A clear roadmap from your first gift to seeing lasting change in Uganda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10 group-hover:bg-primary/30 transition-colors"></div>
              )}
              <div className="bg-white w-24 h-24 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 group-hover:shadow-md group-hover:border-primary/20">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                  {i + 1}
                </div>
                <div className="text-gray-400 group-hover:text-primary transition-colors">
                  {step.icon}
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="font-bold text-xl mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Types Tabs */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ways to Give</h2>
          <p className="text-gray-600 text-lg">Explore the different ways you can support our mission in Uganda.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden">
          <div className="flex flex-col sm:flex-row border-b border-gray-100 bg-gray-50/50">
            {supportTypes.map((support, index) => (
              <button
                key={support.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-6 px-6 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors ${
                  activeTab === index
                    ? 'text-primary bg-white shadow-[0_-2px_0_0_currentColor_inset]'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {support.icon} {support.title}
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 text-center">
                  <h3 className="font-display text-3xl mb-4 text-primary">{supportTypes[activeTab].title}</h3>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">{supportTypes[activeTab].desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-900 border-b pb-2">
                      <Shield className="w-5 h-5 text-accent-lime" /> Benefits
                    </h4>
                    <ul className="space-y-4">
                      {supportTypes[activeTab].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-900 border-b pb-2">
                      <FileCheck className="w-5 h-5 text-accent-lime" /> Commitment Details
                    </h4>
                    <ul className="space-y-4">
                      {supportTypes[activeTab].requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SupportGuide;
