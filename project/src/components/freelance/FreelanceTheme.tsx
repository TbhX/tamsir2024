import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SkillBar } from './SkillBar';
import { ContactForm } from './ContactForm';
import { services, skills } from '../../data/freelanceData';

export function FreelanceTheme() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Freelance Development & Design</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Turning your ideas into reality with modern web solutions
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Start a Project</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}