import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, BanknoteIcon, AlertCircle, FileText, Calendar } from 'lucide-react';

const paymentOptions = [
  {
    id: 'full',
    title: 'Paiement Intégral',
    description: 'Payez 1 000€ à l\'avance',
    icon: CreditCard
  },
  {
    id: 'split',
    title: 'Paiement 80/20',
    description: '800€ à l\'avance + 200€ à la livraison',
    icon: Wallet
  },
  {
    id: 'cash',
    title: 'Paiement en Espèces',
    description: 'Payez en espèces lors de la rencontre',
    icon: BanknoteIcon
  }
];

const timelineOptions = [
  { id: 'urgent', title: 'Urgent', description: 'Moins d\'un mois', icon: Calendar },
  { id: 'normal', title: 'Normal', description: '1-2 mois', icon: Calendar },
  { id: 'relaxed', title: 'Détendu', description: '2-3 mois', icon: Calendar }
];

interface SimpleProjectFormProps {
  onSubmit: (data: any) => void;
}

export function SimpleProjectForm({ onSubmit }: SimpleProjectFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    timeline: '',
    paymentOption: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    description: false,
    timeline: false,
    paymentOption: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Le nom est requis' : '';
      case 'email':
        return !value.trim() 
          ? 'L\'email est requis' 
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Veuillez entrer une adresse email valide'
          : '';
      case 'description':
        return !value.trim() ? 'La description du projet est requise' : '';
      case 'timeline':
        return !value ? 'Veuillez sélectionner une timeline' : '';
      case 'paymentOption':
        return !value ? 'Veuillez sélectionner une option de paiement' : '';
      default:
        return '';
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field as keyof typeof touched]) {
      const error = validateField(field, value);
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const validateStep = () => {
    const fieldsToValidate = {
      0: ['name', 'email'],
      1: ['description', 'timeline'],
      2: ['paymentOption']
    }[step] || [];

    const stepErrors: Record<string, string> = {};
    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        stepErrors[field] = error;
      }
    });

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden"
    >
      <div className="px-8 py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {step === 0 && 'Vos Informations'}
            {step === 1 && 'Détails du Projet'}
            {step === 2 && 'Option de Paiement'}
          </h2>
          <p className="text-gray-400">
            {step === 0 && 'Commençons par vos coordonnées'}
            {step === 1 && 'Parlez-nous de votre projet'}
            {step === 2 && 'Choisissez votre mode de paiement préféré'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-700 rounded-full">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Contact Information */}
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Nom Complet <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 bg-gray-700/75 border rounded-lg text-white placeholder-gray-400
                    ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Entrez votre nom complet"
                />
                {touched.name && errors.name && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Adresse Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 bg-gray-700/75 border rounded-lg text-white placeholder-gray-400
                    ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Entrez votre adresse email"
                />
                {touched.email && errors.email && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-2">
                  Description du Projet <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  onBlur={() => handleBlur('description')}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-700/75 border rounded-lg text-white placeholder-gray-400
                    ${errors.description ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Décrivez votre projet et vos besoins..."
                />
                {touched.description && errors.description && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.description}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-4">
                  Timeline du Projet <span className="text-red-400">*</span>
                </label>
                <div className="grid gap-4">
                  {timelineOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`relative flex items-center p-4 cursor-pointer rounded-lg border-2 transition-all duration-300
                        ${formData.timeline === option.id 
                          ? 'bg-indigo-600/20 border-indigo-500' 
                          : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'}`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.id}
                        checked={formData.timeline === option.id}
                        onChange={(e) => handleChange('timeline', e.target.value)}
                        onBlur={() => handleBlur('timeline')}
                        className="sr-only"
                      />
                      <option.icon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="text-white font-medium">{option.title}</p>
                        <p className="text-gray-400 text-sm">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {touched.timeline && errors.timeline && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.timeline}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Payment Options */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-4">
                  Option de Paiement <span className="text-red-400">*</span>
                </label>
                <div className="grid gap-4">
                  {paymentOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`relative flex items-center p-4 cursor-pointer rounded-lg border-2 transition-all duration-300
                        ${formData.paymentOption === option.id 
                          ? 'bg-indigo-600/20 border-indigo-500' 
                          : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'}`}
                    >
                      <input
                        type="radio"
                        name="paymentOption"
                        value={option.id}
                        checked={formData.paymentOption === option.id}
                        onChange={(e) => handleChange('paymentOption', e.target.value)}
                        onBlur={() => handleBlur('paymentOption')}
                        className="sr-only"
                      />
                      <option.icon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="text-white font-medium">{option.title}</p>
                        <p className="text-gray-400 text-sm">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {touched.paymentOption && errors.paymentOption && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.paymentOption}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
              >
                Retour
              </button>
            )}
            
            {step < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                Continuer
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                Finaliser
              </button>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
}