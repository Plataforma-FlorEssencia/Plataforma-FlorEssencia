import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Team.css';




function ProfileCard({ imagem, name, role, linkedin, github }) {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={imagem} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2 className="name">{name}</h2>
        <div className="social-icons">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin-icon" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github-icon" />
          </a>
        </div>
        <h3 className="role">{role}</h3>
      </div>
    </div>
  );
}

export default ProfileCard;