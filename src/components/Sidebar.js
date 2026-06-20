import React from 'react';

export default function Sidebar({ activePage, navigate }) {
  const items = [
    { key: 'about', label: 'About Me', path: '/about' },
    { key: 'certifications', label: 'Certifications', path: '/certifications' },
    { key: 'contacts', label: 'Contacts', path: '/contacts' },
    { key: 'architecture', label: 'Architecture', path: '/architecture' },
    { key: 'skillset', label: 'Skillset', path: '/skillset' },
    { key: 'experience', label: 'Experience', path: '/experience' },
    { key: 'expertise', label: 'Expertise', path: '/expertise' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {items.map(it => (
            <li key={it.key} className={activePage === it.key ? 'active' : ''} onClick={() => navigate(it.path)}>
              {it.label}
            </li>
          ))}
          <li className="external-link"><a href="https://www.linkedin.com/in/sudhansu-miet/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li className="external-link"><a href="https://github.com/sudhansu-miet" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li className="external-link"><a href="https://www.sudhansu.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
          <li className="external-link"><a href="https://www.sudhansu.com/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>
    </aside>
  );
}
