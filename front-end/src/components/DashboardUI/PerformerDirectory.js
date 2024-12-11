import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'srcode', headerName: 'SR-Code', type: 'string' },
  { field: 'cgroup', headerName: 'Cultural Group', width: 150 },
  { field: 'campus', headerName: 'Campus', type: 'string' },
  { field: 'department', headerName: 'Department', type: 'string' },
  { field: 'program', headerName: 'Program', type: 'string', width: 180 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [rows, setRows] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPerformers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/all-users'));
        setLoading(false); 
        console.error('Error fetching performers data:', error);
        setLoading(false);
      }
    };

    fetchPerformers();
  }, []);

  return (
    <Box sx={{ width: '90%' }}>
      <h1>Performers Directory</h1>
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading} // DataGrid loading indicator
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
}
