import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Achievements from './Achievements';

export default function Features() {

  return (
    <>
    <Container id="features"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, sm: 2, md: 2, lg: 2 },
      maxHeight: '100vh', // Full height to center vertically
    }}>
    </Container>
    <Achievements/>
    </>
  );
}
