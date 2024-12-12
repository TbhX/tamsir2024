import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const stages = [
  {
    id: 'partners',
    title: 'Recherche et Sélection de Partenaires Stratégiques',
    status: 'in-progress'
  },
  {
    id: 'solution',
    title: 'Création de la Solution Innovante pour la Subvention',
    status: 'pending'
  },
  {
    id: 'grant',
    title: 'Demande de Subvention',
    description: 'Réfléchie avec le(s) partenaire(s) pour élaborer une stratégie unique afin d\'obtenir la subvention',
    status: 'pending'
  },
  {
    id: 'construction',
    title: 'Travaux d\'Aménagement et Réaménagement',
    status: 'pending'
  },
  {
    id: 'launch',
    title: 'Préparation à l\'Ouverture et Lancement Officiel',
    status: 'pending'
  }
];

export function ProjectProgress() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusEmoji = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🟢';
      default:
        return '🔴';
    }
  };

  const progress = (stages.filter(stage => 
    stage.status === 'completed' || stage.status === 'in-progress'
  ).length / stages.length) * 100;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-gray-800 rounded-xl p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Progression du Projet
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-64 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-blue-500 rounded-full"
                transition={{ duration: 1 }}
              />
            </div>
            <span className="text-gray-400">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div className="absolute left-3 top-10 bottom-0 w-0.5 bg-gray-700" />
              )}

              <div className="flex gap-4">
                {/* Status Indicator */}
                <div className={`w-6 h-6 rounded-full ${getStatusColor(stage.status)} flex-shrink-0 mt-1`} />

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {stage.title}
                  </h3>
                  {stage.description && (
                    <p className="text-gray-400 text-sm mb-2">
                      {stage.description}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    État : {getStatusEmoji(stage.status)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Télécharger le Projet</span>
        </motion.button>
      </motion.div>
    </div>
  );
}