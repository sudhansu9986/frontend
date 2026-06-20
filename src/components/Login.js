import React from 'react';
import { ReactComponent as AvatarIcon } from '../assets/avatar.svg';

export default function Login({ handleLogin, loading, navigate }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-avatar">
          <AvatarIcon aria-hidden="true" />
        </div>
        <h2 className="login-title">Welcome — Sudhansu</h2>
        <p className="login-subtitle">Sign in to manage your portfolio and certifications</p>
        <div className="login-actions">
          <button className="google-btn" onClick={() => handleLogin()} disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign in with Google'}
          </button>
        </div>
        <div className="login-footer">
          <button className="resume-btn" onClick={() => navigate('/about')}>Continue as guest</button>
        </div>
      </div>
    </div>
  );
}
