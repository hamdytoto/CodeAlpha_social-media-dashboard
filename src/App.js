import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Overview from './components/Overview';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('SOCIAL_DASHBOARD_THEME');
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('is_dark');
      localStorage.setItem('SOCIAL_DASHBOARD_THEME', 'dark');
    } else {
      document.documentElement.classList.remove('is_dark');
      localStorage.setItem('SOCIAL_DASHBOARD_THEME', 'light');
    }
  }, [isDarkTheme]);

  return (
    <div className="container">
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <section className="hero">
        <Card platform="facebook" username="@hamdytoto" followers="1987" change="12" />
        <Card platform="twitter" username="@hamdytoto" followers="1044" change="99" />
        <Card platform="instagram" username="hamdytoto" followers="11k" change="1099" />
        <Card platform="youtube" username="hamdytoto" followers="8239" change="-144" />
      </section>
      <Overview />
    </div>
  );
}

export default App;
