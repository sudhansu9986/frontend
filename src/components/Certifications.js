import React from 'react';
import awsCertified from '../assets/1000333564.png';

export default function Certifications() {
  return (
    <div className="page certifications-page">
      <h2>Certifications</h2>
      <div className="cert-grid">
        <div className="cert-card">
          <img src={awsCertified} alt="AWS Solutions Architect" className="cert-image" />
          <div className="cert-meta">
            <h3>AWS Certified Solutions Architect — Associate</h3>
            <p>Issued by AWS — Demonstrates ability to design distributed systems on AWS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
