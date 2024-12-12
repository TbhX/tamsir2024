import { COMPANY_INFO } from '@/config';
import { getCurrentYear } from '@/utils/date';

export const generateAccessCodeEmail = (name: string, code: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 30px; }
    .code { background: #f5f5f5; padding: 15px; text-align: center; font-size: 24px; font-family: monospace; margin: 20px 0; }
    .features { margin: 20px 0; }
    .feature { margin: 10px 0; }
    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Bienvenue sur ${COMPANY_INFO.name}</h1>
    </div>

    <p>Cher(e) ${name},</p>
    
    <p>Merci d'avoir choisi nos services ! Votre tableau de bord projet est prêt.</p>

    <p>Votre code d'accès est :</p>
    <div class="code">${code}</div>

    <div class="features">
      <p>Avec votre tableau de bord, vous pouvez :</p>
      <div class="feature">✓ Suivre l'avancement du projet en temps réel</div>
      <div class="feature">✓ Partager des fichiers en toute sécurité</div>
      <div class="feature">✓ Communiquer directement avec l'équipe</div>
      <div class="feature">✓ Recevoir des mises à jour instantanées</div>
    </div>

    <p><strong>Important :</strong> Ce code est valable pendant 24 heures. Si vous avez besoin d'un nouveau code, contactez support@tamsir.fr</p>

    <div class="footer">
      <p>© ${getCurrentYear()} ${COMPANY_INFO.name}. Tous droits réservés.</p>
      <p>Localisation : ${COMPANY_INFO.location} | Horaires : ${COMPANY_INFO.hours}</p>
      <p>Support : ${COMPANY_INFO.supportEmail}</p>
    </div>
  </div>
</body>
</html>
`;