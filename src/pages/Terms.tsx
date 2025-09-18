// src/pages/Terms.tsx
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-20 lg:px-32">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
        Terms & Conditions
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">A LEGAL DISCLAIMER</h2>
        <p className="text-gray-300 leading-relaxed">
          The information, services, and materials provided by Tech Ember Solutions are for general informational purposes only and do not constitute legal, financial, or professional advice. While we strive for accuracy, we make no warranties or guarantees regarding completeness, reliability, or suitability. We are not liable for any loss or damage arising from the use of our website, services, or materials. Third‑party links or references are provided for convenience and do not imply endorsement. All content is subject to change without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">TERMS & CONDITIONS - THE BASICS</h2>
        <p className="text-gray-300 leading-relaxed">
          By using the services of Tech Ember Solutions, you agree to comply with and be bound by these terms. All projects, timelines, and deliverables will be outlined in a written agreement prior to commencement. Payments must be made as per agreed terms, and ownership of work transfers to the client only upon full payment. We are not liable for any indirect losses or damages arising from the use of our services. All content, designs, and materials remain our intellectual property unless otherwise agreed in writing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Deadlines</h2>
        <p className="text-gray-300 leading-relaxed">
          At Tech Ember Solutions, we commit to delivering projects within the agreed timelines outlined in our proposal or contract. Deadlines may be adjusted if there are delays in receiving necessary information, content, feedback, or approvals from the client. While we strive to meet all timelines, we are not liable for delays caused by unforeseen circumstances, third‑party dependencies, or changes requested after project commencement. Any timeline extensions will be communicated and agreed upon in writing.
        </p>
      </section>
    </div>
  );
};

export default Terms;
