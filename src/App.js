import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import avatar from './assets/avatar.svg';
import { ReactComponent as AvatarIcon } from './assets/avatar.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Login from './components/Login';
import About from './components/About';
import Architecture from './components/Architecture';
import Contacts from './components/Contacts';
import Skillset from './components/Skillset';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Certifications from './components/Certifications';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState('about');
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = useGoogleLogin({
    onSuccess: async (authResult) => {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:8000/api/auth/google', {
          code: authResult.code,
        });
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        // hide login and navigate to about after successful sign-in
        setShowLogin(false);
        navigate('/about');
      } catch (err) {
        console.error(err);
        alert('Login validation failed.');
      } finally {
        setLoading(false);
      }
    },
    onError: () => alert('Google Sign-In failed.'),
    flow: 'auth-code',
  });

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // navigate to login route
    navigate('/login');
  };

  const pathToKey = (path) => {
    if (!path) return 'about';
    const map = {
      '/certifications': 'certifications',
      '/contacts': 'contacts',
      '/architecture': 'architecture',
      '/about': 'about',
      '/skillset': 'skillset',
      '/experience': 'experience',
      '/expertise': 'expertise',
    };
    return map[path] || null;
  };

  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    if (path === '/login') {
      setShowLogin(true);
      // clear active page when on login
      setActivePage('about');
      return;
    }
    // any non-login route should hide login
    setShowLogin(false);
    const key = pathToKey(path);
    setActivePage(key || 'about');
  };

  useEffect(() => {
    const onPop = () => {
      const p = window.location.pathname;
      if (p === '/' ) {
        // replace to login
        window.history.replaceState({}, '', '/login');
        setShowLogin(true);
      } else if (p === '/login') {
        setShowLogin(true);
      } else {
        setShowLogin(false);
        const key = pathToKey(p);
        setActivePage(key || 'about');
      }
    };
    window.addEventListener('popstate', onPop);
    // initial
    onPop();
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (showLogin && !user) return <Login handleLogin={handleLogin} loading={loading} navigate={navigate} />;

  return (
    <div className="site-root">
      <header className="navbar">
        <div className="brand">Sudhansu - AWS Certified Solutions Architect</div>

        <div className="nav-right">
          {user ? (
            <div className="profile-badge">
              <span className="avatar-wrap">
                <img
                  src={user.picture || avatar}
                  alt="Avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = avatar;
                  }}
                  className="avatar-img"
                />
              </span>
              <span className="username">{user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <span className="avatar-wrap">
                <AvatarIcon className="avatar-svg" aria-hidden="true" />
              </span>
              <button className="google-btn" onClick={() => handleLogin()} disabled={loading}>
                {loading ? 'Authenticating...' : 'Sign in with Google'}
              </button>
            </>
          )}
        </div>
      </header>

      <div className="content-area">
        <div className="layout">
          <Sidebar activePage={activePage} navigate={navigate} />

          <main className="main-area">
            {activePage === 'certifications' && <Certifications />}
            {activePage === 'contacts' && <Contacts />}
            {activePage === 'architecture' && <Architecture />}
            {activePage === 'about' && <About />}
            {activePage === 'skillset' && <Skillset />}
            {activePage === 'experience' && <Experience />}
            {activePage === 'expertise' && <Expertise />}
          </main>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} Sudhansu — Freelance AWS Architect</div>
          <div>
            Contact: <a href="mailto:sudhansu.miet@gmail.com">sudhansu.miet@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
