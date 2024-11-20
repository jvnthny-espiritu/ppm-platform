import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Button from '@mui/material/Button';
import achievementsData from '../../../data/achievementsData.json';

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);

  // Display either all achievements or only the first 6
  const displayedAchievements = showAll
    ? achievementsData
    : achievementsData.slice(0, 6);

  return (
    <Box
      id="achievements"
      sx={{
        pt: { xs: 2, sm: 2, md: 2, lg: 2 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 2, md: 2, lg: 4 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
          }}
        >
          <Typography>
            <h1>Achievements</h1>
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h5">{achievementsData.length}</Typography>
            <Typography variant="h6" sx={{ color: 'grey.400' }}>
              Total number of awards
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ maxWidth: '100%' }}>
          {displayedAchievements.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                  minWidth: '250px', // Set a minimum width for uniformity
                }}
              >
                <Box sx={{ opacity: '50%' }}>
                  <EmojiEventsIcon />
                </Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ py: 3 }}>
          <Button
            aria-label="show-all"
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show All'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
