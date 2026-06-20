import React from 'react';

export default function Contacts() {
  return (
    <div className="page contacts-page">
      <h2>Contacts</h2>
      <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
      <p>Phone: +91-XXXXXXXXXX</p>
      <h3>Corporate Directory</h3>
      <table>
        <thead>
          <tr><th>Name</th><th>Role</th><th>Email</th></tr>
        </thead>
        <tbody>
          <tr><td>Jane Doe</td><td>Lead Designer</td><td>jane.doe@company.com</td></tr>
          <tr><td>John Smith</td><td>Backend Architect</td><td>john.smith@company.com</td></tr>
        </tbody>
      </table>
    </div>
  );
}
