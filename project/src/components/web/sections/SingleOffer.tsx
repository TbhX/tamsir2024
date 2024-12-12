import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const features = [
  "Custom Web Development & Design",
  "Responsive Mobile-First Layout",
  "Personal Project Dashboard",
  "Secure File Sharing System",
  "Real-time Project Updates",
  "Direct Communication Channel",
  "Post-launch Support & Maintenance",
  "SEO Optimization",
  "Performance Optimization",
  "Security Hardening"
];

interface SingleOfferProps {
  onStartProject: () => void;
}

export function SingleOffer({ onStartProject }: SingleOfferProps) {
  const handleCtaClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onStartProject();
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">All-Inclusive Package</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white animate-gradient">
            One Price, Everything Included
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get your professional web presence with our comprehensive solution.
            No hidden fees, no surprises - just everything you need for €1000.
          </p>
        </div>

        {/* Price Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity" />
            
            <div className="relative bg-gray-900 rounded-xl p-8 shadow-2xl">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold">€1000</span>
                  <div className="text-left text-gray-400">
                    <div>one-time</div>
                    <div>payment</div>
                  </div>
                </div>
                <p className="text-gray-400">Everything you need, nothing you don't</p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCtaClick}
                className="group relative w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center text-gray-400">
            <p className="text-sm">
              Trusted by freelancers and small businesses worldwide.
              100% satisfaction guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}