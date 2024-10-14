import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUpForm from './components/SignUpForm';
import getFormTheme from './theme/getFormTheme';
import TemplateFrame from './components/TemplateFrame';

export default function PerfomerLanding() {
  const [mode, setMode] = React.useState('light');
  const formTheme = createTheme(getFormTheme(mode));
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

  return (
    <TemplateFrame
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={formTheme}>
        <CssBaseline enableColorScheme />
        <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
          <Grid
            size={{ xs: 12, sm: 5, lg: 4 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              borderRight: { sm: 'none', md: '1px solid' },
              borderColor: { sm: 'none', md: 'divider' },
              alignItems: 'start',
              pt: 10,
              px: 10,
              gap: 4,
            }}
          >
          </Grid>
          <Grid
            size={{ sm: 12, md: 7, lg: 8 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '100%',
              width: '100%',
              backgroundColor: { xs: 'transparent', sm: 'background.default' },
              alignItems: 'start',
              pt: { xs: 6, sm: 4, md: 8, lg:  6},
              px: { xs: 3, sm: 4, md: 8, lg: 8 },
              gap: { xs: 4, sm: 4, md: 8 },
            }}
          >
            <Box>
            <SignUpForm />
            </Box>
            
          </Grid>
        </Grid>
      </ThemeProvider>
    </TemplateFrame>
  );
}
