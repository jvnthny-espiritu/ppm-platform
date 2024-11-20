import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const items = [
  {
    icon: <EmojiEventsIcon />,
    title: 'Award Name 1',
    description:
      'Event Name 1',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Award Name 2',
    description:
      'Event Name 2',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Award Name 3',
    description:
      'Event Name 3',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Award Name 4',
    description:
      'Event Name 4',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Award Name 5',
    description:
      'Event Name 5',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Award Name 6',
    description:
      'Event Name 6',
  },
];

export default function Achievements() {
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
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 2, md: 2, lg: 4},
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '100%', lg: '100%' },
            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left'},
          }}
        >
          <Typography>
            <h1>Achievements</h1>
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h5">
              10
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.400' }}>
              Total number of awards
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
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
        </Grid >
        <Grid sx {...{pb:{xs: 2, sm: 2, md: 2, lg: 2}}} >
          <IconButton aria-label="show-all" size='small'>
          Show all 
          <ArrowForwardIcon/>
          </IconButton>
        </Grid>
      </Container>
    </Box>
  );
}
