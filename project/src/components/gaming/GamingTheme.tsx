import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const stages = [
  {
    title: 'Recherche et Sélection de Partenaires Stratégiques',
    status: 'in-progress'
  },
  {
    title: 'Création de la Solution Innovante pour la Subvention',
    status: 'pending'
  },
  {
    title: 'Demande de Subvention',
    status: 'pending'
  },
  {
    title: 'Travaux d\'Aménagement et Réaménagement',
    status: 'pending'
  },
  {
    title: 'Préparation à l\'Ouverture et Lancement Officiel',
    status: 'pending'
  }
];

export function GamingTheme() {
  const [showStages, setShowStages] = useState(false);

  return (
    <div className="min-h-screen bg-[#18181B] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-12">
        {/* Progress Bar */}
        <motion.div
          onHoverStart={() => setShowStages(true)}
          onHoverEnd={() => setShowStages(false)}
          className="relative"
        >
          {/* Background Bar */}
          <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
            {/* Progress */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-purple-600"
            />
          </div>

          {/* Percentage */}
          <div className="absolute top-6 left-0 text-purple-400 font-medium">
            20%
          </div>

          {/* Stages Popup */}
          <AnimatePresence>
            {showStages && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-12 left-0 right-0 bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 mt-4 shadow-xl"
              >
                <div className="space-y-4">
                  {stages.map((stage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                        stage.status === 'in-progress' 
                          ? 'bg-purple-500' 
                          : 'bg-gray-600'
                      }`} />
                      <div>
                        <p className="text-gray-200">{stage.title}</p>
                        <p className="text-sm text-gray-400">
                          {stage.status === 'in-progress' ? 'En cours' : 'À venir'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://le91arena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-300 group hover:scale-105"
          >
            <span className="text-lg">Le Projet Gaming d'une Vie ?</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Instructions */}
        <p className="text-center text-gray-400 text-sm">
          Survolez la barre de progression pour voir les étapes du projet
        </p>
      </div>
    </div>
  );
}