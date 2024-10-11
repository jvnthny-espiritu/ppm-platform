import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { awardsData, studentPerformersData } from '../data/dashboardData'; // Importing the data

export function DashboardAdmin() {
  const Container = ResponsiveChartContainer;
  return (
    <Box sx={{ width: '90%' }}>
      <Paper sx={{ width: '100%', height: 300 }} elevation={3}>
        {/* @ts-ignore */}
        <Container series={awardsData.series} xAxis={awardsData.xAxis}>
          <BarPlot />
          <ChartsXAxis label="Total Awards per Cultural Group" position="bottom" axisId="x-axis-id" />
        </Container>
      </Paper>

      <Paper sx={{ width: '100%', height: 300, mt: 2 }} elevation={3}>
        {/* @ts-ignore */}
        <Container series={studentPerformersData.series} xAxis={studentPerformersData.xAxis}>
          <BarPlot />
          <ChartsXAxis label="Total Number of Student-Performers Per Campus" position="bottom" axisId="x-axis-id" />
        </Container>
      </Paper>
    </Box>
  );
}
