
import React from 'react';
import './Team.css'; // Import CSS for styling
import linkedinLogo from '../assets/Lucas.png'; // Make sure to have LinkedIn and GitHub logo images
import githubLogo from '../assets/Lucas.png';
import profileImage from '../assets/Lucas.png'; // Add profile image

function ProfileCard(props){
  return (    
    <div className="profile-card">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2 className="name">NOME SOBRENOME</h2>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </a>
        </div>
        <h3 className="role">CARGO</h3>
      </div>
    </div>
  );
}

export default ProfileCard;