import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Achievements from './Achievements';

export default function Features() {

  return (
    <Container id="features"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 8, sm: 16, md: 4, lg: 2 },
      minHeight: '100vh', // Full height to center vertically
    }}>
      <Box sx={{ width: '100%' }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Profile Placeholder
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Linked In-like performer's profile goes here.
        </Typography>
        <Achievements/>
      </Box>
    </Container>
  );
}
