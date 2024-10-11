import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
//import Checkbox from '@mui/material/Checkbox';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { red } from '@mui/material/colors';

export function DashboardAdmin() {
    const [isResponsive, setIsResponsive] = React.useState(false);

  const Container = ResponsiveChartContainer;
  return (
    <Box sx={{ width: '90%' }}>
    <Paper sx={{ width: '100%', height: 300 }} elevation={3}>
        {/* @ts-ignore */}
        <Container
          series={[
            {
              type: 'bar',
              data: [1, 2, 3, 2, 1, 5],
            },
          ]}
          xAxis={[
            {
              data: ['Dance', 'Literary', 'Music', 'Performing Arts', 'Theatre', 'Visual Arts'],
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}
        >
          <BarPlot />
          <ChartsXAxis label="Total Awards per Cultural Group" labelStyle={{color:red}} position="bottom" axisId="x-axis-id" />
        </Container>
      </Paper>
    </Box>
  );
}