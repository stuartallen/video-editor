import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const getStoredTheme = (): Theme | null => {
  const stored = localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' ? stored : null;
};

const getInitialTheme = (): Theme => {
  return getStoredTheme() || getSystemTheme();
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!getStoredTheme()) {
        setTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { theme, toggleTheme };
};
