import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 animate-float">
          <Code2 className="w-24 h-24 mx-auto text-indigo-400" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white animate-gradient">
          Web Development
          <br />
          Reimagined
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          One comprehensive solution for your digital presence.
          All-inclusive package for €1000.
        </p>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
        >
          <span>Start Your Journey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 -z-10 bg-white/20 blur-xl rounded-full group-hover:blur-2xl transition-all" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
    </div>
  );
}