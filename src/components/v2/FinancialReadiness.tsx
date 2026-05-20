import React from 'react';
import { motion } from 'motion/react';
import { Wallet, Info, CheckCircle2, Euro, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

const FinancialReadiness = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-primary/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Summary */}
        <div className="lg:col-span-5 p-8 md:p-10 bg-primary text-white flex flex-col justify-center">
          <Badge variant="new" className="mb-6 w-fit bg-accent-lime text-primary border-none">Financial Planning</Badge>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight text-white">
            Relocation <br /> <span className="text-accent-lime">Readiness.</span>
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            While OpenDoor connects you with sponsorship, having a personal "migration fund" ensures a stress-free transition before your first paycheck arrives.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-lime mb-2">Recommended Budget</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display text-white">€1,500</span>
              <span className="text-xl text-white/60">to</span>
              <span className="text-4xl font-display text-white">€2,000</span>
            </div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">What this covers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Visa Processing", desc: "Government fees & consulate appointments", icon: <ShieldCheck className="w-4 h-4 text-accent-lime" /> },
              { title: "Document Prep", desc: "Apostille, translations & legalizations", icon: <CheckCircle2 className="w-4 h-4 text-accent-lime" /> },
              { title: "Housing Deposit", desc: "Initial rent deposit for your new apartment", icon: <Euro className="w-4 h-4 text-accent-lime" /> },
              { title: "Landing Costs", desc: "First 30 days of local transport & SIM cards", icon: <Info className="w-4 h-4 text-accent-lime" /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 flex gap-4 items-start">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500 dark:text-gray-400 italic leading-relaxed">
              * Note: Many partner companies offer relocation bonuses to reimburse these costs after you start, but having this liquid capital is essential for the initial relocation phase.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FinancialReadiness;
