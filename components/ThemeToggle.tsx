'use client'
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-15 right-4 z-999 p-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 text-xl shadow-lg"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="block transition-transform duration-300 hover:scale-105">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;