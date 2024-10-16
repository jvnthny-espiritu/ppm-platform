import * as React from 'react';
import Divider from '@mui/material/Divider';
import Features from './components/Features';
import Footer from './components/Footer';
import { Box, Paper } from '@mui/material';
import SignUpForm from './components/SignUpForm';
import Dialog from './components/Dialog';

export default function PerformerProfile() {
  const [mode, setMode] = React.useState('light');

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

  return (
    <Box sx={{ width: '90%' }}>
      <Dialog />
      <Paper sx={{ minHeight: 400, width: '100%' }}>
        <SignUpForm/>
      </Paper>
      <Features />
      <Divider />
      <Footer />
    </Box>
  );
}
