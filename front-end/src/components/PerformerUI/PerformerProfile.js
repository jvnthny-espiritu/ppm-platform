import * as React from 'react';
import Divider from '@mui/material/Divider';
import Features from './components/Features';
import Footer from './components/Footer';
import { Box } from '@mui/material';

export default function PerformerProfile() {
  const [mode, setMode] = React.useState('light');
  const [setShowCustomTheme] = React.useState(true);

  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <Box>
      <Features />
      <Divider />
      <Footer />
    </Box>
  );
}
