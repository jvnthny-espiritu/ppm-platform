import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export function DashboardAdmin() {
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
          <ChartsXAxis label="Total Awards per Cultural Group" position="bottom" axisId="x-axis-id" />
        </Container>
      </Paper>

      <Paper sx={{ width: '100%', height: 300, mt: 2}} elevation={3} stack>
        {/* @ts-ignore */}
        <Container
          series={[
            {
              type: 'bar',
              data: [61, 72, 55, 41, 46, 53],
            },
          ]}
          xAxis={[
            {
              data: ['Pablo Borbon', 'Alangilan', 'Lobo', 'Rosario', 'Lipa', 'Malvar'],
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}
        >
          <BarPlot />
          <ChartsXAxis label="Total Number of Student-Performers Per Campus" position="bottom" axisId="x-axis-id" />
        </Container>
      </Paper>

    </Box>
  );
}