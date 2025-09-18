// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-20 lg:px-32">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">A LEGAL DISCLAIMER</h2>
        <p className="text-gray-300 leading-relaxed">
          While Tech Ember Solutions takes reasonable measures to protect your personal information, no method of data transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data and are not liable for any unauthorized access, use, or disclosure beyond our reasonable control. By using our services, you acknowledge and accept these inherent risks.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">PRIVACY POLICY - THE BASICS</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          At Tech Ember Solutions, we value your privacy and are committed to protecting your personal information. We may collect basic details such as your name, email address, phone number, and project requirements when you contact us or use our services. This information is used solely to communicate with you, deliver our services, and improve your experience. We do not sell or share your personal information with third parties except as required by law or to trusted partners who assist us in providing our services.
        </p>
        <p className="text-gray-300 leading-relaxed">
          While we take reasonable steps to safeguard your information, no online transmission or storage method is completely secure. We cannot guarantee absolute security and are not responsible for breaches beyond our control. By using our services, you consent to the collection and use of your information in accordance with this Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-300 leading-relaxed">
          Your trust is important to us, and we are committed to handling your personal information responsibly and transparently. If you have any questions or concerns about our Privacy Policy or how your data is managed, please contact us at <span className="text-orange-400">Info@techember.in</span> or <span className="text-orange-400">+919343789798</span>. By continuing to use our website or services, you acknowledge that you have read and understood this policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
