'use client'
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-15 right-[55px] md:right-3 z-999  rounded-full  backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200  shadow-lg  h-7 w-7 ${theme === 'dark' ? 'bg-white/10': 'bg-white/90'}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="block transition-transform duration-300 hover:scale-105 text-[14px] flex justify-center items-center ">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;