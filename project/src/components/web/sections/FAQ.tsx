import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQItem } from './faq/FAQItem';
import { faqs } from './faq/faqData';

export function FAQ() {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Quick answers to common questions about our web development services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}