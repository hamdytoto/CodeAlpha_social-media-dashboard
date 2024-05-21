import React from 'react';

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header>
      <div className="main-header">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: <span id="total_followers">23,004</span></p>
      </div>
      <div className="side-header">
        <div className="switch">
          <input
            id="theme-type"
            type="checkbox"
            className="switch-input"
            checked={!isDarkTheme}
            onChange={handleThemeChange}
          />
          <label htmlFor="theme-type" className="switch-label"></label>
        </div>
        <div>
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
