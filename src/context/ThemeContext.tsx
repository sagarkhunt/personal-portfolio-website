'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightThemeVars = {
  '--background': '#ffffff',
  '--foreground': '#0f172a', // Dark text on light background
  '--heading': '#0f172a',
  '--text': '#475569',
  '--subtext': '#64748b',
  '--primary': '#2563eb',
  '--primary-dark': '#1e40af',
  '--accent': '#7c3aed',
  '--border': '#dee2e6',
  '--card-background': '#e9ecef', // Slightly darker light gray for cards
};

const darkThemeVars = {
  '--background': '#0a0a0a', // Darker background inspired by Roda
  '--foreground': '#e2e8f0', // Light text on dark background
  '--heading': '#e2e8f0',
  '--text': '#cbd5e1',
  '--subtext': '#94a3b8',
  '--primary': '#6366f1', // Indigo 500, a vibrant blue/purple
  '--primary-dark': '#4f46e5', // Indigo 600
  '--accent': '#a855f7', // Purple 500, a vibrant purple
  '--border': '#334155',
  '--card-background': '#1f2937', // Slightly lighter than background for dark cards
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const currentThemeVars = theme === 'light' ? lightThemeVars : darkThemeVars;
    for (const [key, value] of Object.entries(currentThemeVars)) {
      document.documentElement.style.setProperty(key, value);
    }
    // Ensure the data-theme attribute is still set for any potential CSS selectors
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
