import React from "react";
import "./GithubModal.css";
import avatar from '../assets/images/avatar.png';

export default function GithubModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Mon profil GitHub</h2>

        <div className="modal-content">
          <img src={avatar} alt="Avatar GitHub" />

          <div className="modal-text">
            <p><a href="https://github.com/khadidj-aba" target="_blank" rel="noreferrer">John Doe</a></p>
            <p>📍 Lyon, France</p>
            <p>📝 « Je souhaite contribuer tout en gardant l’anonymat »</p>
            <ul>
              <li>📦 Repositories : 1</li>
              <li>👥 Followers : 16</li>
              <li>🔗 Following : 0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

