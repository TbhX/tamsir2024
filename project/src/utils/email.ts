// Email template for access code
export const generateAccessCodeEmail = (name: string, code: string) => `
Dear ${name},

Thank you for choosing our web development services! Your project dashboard is ready.

Your access code is: ${code}

Use this code to access your project dashboard where you can:
- Track project progress
- Share files and requirements
- Communicate directly with the development team
- Receive real-time updates

The code is valid for 24 hours. If you need a new code, please contact support.

Best regards,
Your Web Development Team
`;

// In a real application, this would connect to an email service
export const sendEmail = async (to: string, subject: string, body: string) => {
  console.log('Sending email to:', to);
  console.log('Subject:', subject);
  console.log('Body:', body);
  // Simulate email sending
  return new Promise(resolve => setTimeout(resolve, 1000));
};