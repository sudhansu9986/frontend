import React from 'react';

export default function Architecture() {
  return (
    <div className="page architecture-page">
      <h2>Architecture</h2>
      <p>Designing scalable, secure AWS architectures: multi-account setup, landing zones, VPC design, high-availability patterns, and disaster recovery.</p>
      <ul>
        <li>Multi-region failover with Route53 and health checks</li>
        <li>Multi-account setup using AWS Organizations and SCPs</li>
        <li>Infrastructure as Code with Terraform</li>
      </ul>
    </div>
  );
}
