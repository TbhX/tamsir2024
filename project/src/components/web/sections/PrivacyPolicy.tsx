import React from 'react';
import { motion } from 'framer-motion';
import { Shield, X } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { COMPANY_INFO } from '@/config';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  const { t } = useTranslation();

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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white mb-4">
              {t('privacyTitle')}
            </h1>
            <p className="text-gray-400">
              {t('lastUpdated')}
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataCollection')}
              </h2>
              <p className="mb-4">
                {t('dataCollectionText')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('personalInfo')}</li>
                <li>{t('projectInfo')}</li>
                <li>{t('communicationData')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataUsage')}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('projectManagement')}</li>
                <li>{t('communication')}</li>
                <li>{t('serviceImprovement')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('dataProtection')}
              </h2>
              <p>{t('dataProtectionText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('yourRights')}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('accessRight')}</li>
                <li>{t('rectificationRight')}</li>
                <li>{t('erasureRight')}</li>
                <li>{t('portabilityRight')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('contact')}
              </h2>
              <p>
                {t('contactText')}:{' '}
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}