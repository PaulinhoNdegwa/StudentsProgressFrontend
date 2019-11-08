import React from 'react';

import './styles.css';

export default function SplashPage() {
  return (
    <div className="splash-page">
        <h3 className="welcome-text">Welcome to Student's Progress  Monitor</h3><br/>
        <a className="view-details-button" href="#student-details">View Students</a>
    </div>
  );
}
