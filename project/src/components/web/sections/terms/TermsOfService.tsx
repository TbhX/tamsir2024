import React from 'react';
import { motion } from 'framer-motion';
import { X, Scroll } from 'lucide-react';
import { COMPANY_INFO } from '@/config';
import { getCurrentYear } from '@/utils/date';

interface TermsOfServiceProps {
  onClose: () => void;
}

export function TermsOfService({ onClose }: TermsOfServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close terms of service"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Scroll className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400">
              Last updated: March 1st, 2024
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. General Information</h2>
              <p className="mb-4">
                Welcome to {COMPANY_INFO.name}. By accessing this website and using our services,
                you agree to these terms and conditions. Please read them carefully.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Company: {COMPANY_INFO.name}</li>
                <li>Contact: {COMPANY_INFO.email}</li>
                <li>Support: {COMPANY_INFO.supportEmail}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
              <p className="mb-4">We provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom web development and design</li>
                <li>Project management through our dashboard</li>
                <li>Ongoing maintenance and support</li>
                <li>All-inclusive package for €{COMPANY_INFO.price}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Payment Terms</h2>
              <p className="mb-4">Our pricing structure is transparent:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fixed price of €{COMPANY_INFO.price} per project</li>
                <li>Payment options:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Full payment upfront</li>
                    <li>80% upfront, 20% upon completion</li>
                    <li>Cash payment upon meeting</li>
                  </ul>
                </li>
                <li>Accepted payment methods: Bank transfer, Credit card, Cash</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Project Process</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Initial consultation and requirements gathering</li>
                <li>Project dashboard access provided via secure code</li>
                <li>Regular updates and progress tracking</li>
                <li>Two rounds of revisions included</li>
                <li>Final delivery and handover</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Project Timeline</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Urgent: Less than 1 month</li>
                <li>Normal: 1-2 months</li>
                <li>Relaxed: 2-3 months</li>
                <li>Flexible: Timeline agreed upon consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Support & Maintenance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>30 days of free support after launch</li>
                <li>Bug fixes included in initial price</li>
                <li>Additional features quoted separately</li>
              </ul>
            </section>

            <footer className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm text-center">
                © {getCurrentYear()} {COMPANY_INFO.name}. All rights reserved.
                By using our services, you agree to these terms and conditions.
              </p>
            </footer>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}