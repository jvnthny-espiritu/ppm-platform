import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { culturalgroups, campuses, departments, programs } from '../../../data/registrationValues';
import { useState } from 'react';
import { Divider, Typography } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PersonalInformation() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  // Filter the programs based on the selected department
  const handleDepartmentChange = (event, value) => {
    setSelectedDepartment(value);
    if (value) {
      setFilteredPrograms(programs[value.label] || []); // Assuming programs is an object keyed by department names
    } else {
      setFilteredPrograms([]);
    }
  };

  return (
    <Box
    id="personal-info"
    sx={{
      color: 'white',
      bgcolor: 'grey.900',
    }}>
    <Grid container spacing={3} padding={3}>
      <FormGrid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
        <Typography>
          <h1>Personal Information</h1>
        </Typography>
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="Juan"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Dela Cruz"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
        <FormLabel htmlFor="email" required>
          Email address
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="20-12345@g.batstate-u.edu.ph"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
        <FormLabel htmlFor="cgroup" required>
          Cultural Group
        </FormLabel>
        <Autocomplete
          id="cgroup"
          name="cgroup"
          type="cgroup"
          required
          size="small"
          disablePortal
          options={culturalgroups}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6  }}>
        <FormLabel htmlFor="cgroup" required>
          Campus
        </FormLabel>
        <Autocomplete
          id="campus"
          name="campus"
          type="campus"
          required
          size="small"
          disablePortal
          options={campuses}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6  }}>
        <FormLabel htmlFor="department" required>
          Department
        </FormLabel>
        <Autocomplete
          id="department"
          name="department"
          type="department"
          required
          size="small"
          disablePortal
          options={departments}
          onChange={handleDepartmentChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6  }}>
        <FormLabel htmlFor="program" required>
          Program
        </FormLabel>
        <Autocomplete
          id="program"
          name="program"
          type="program"
          required
          size="small"
          disablePortal
          options={filteredPrograms} // Dynamically filtered programs
          renderInput={(params) => <TextField {...params} />}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, sm: 6, md: 6, lg: 6  }}>
        <FormLabel htmlFor="srcode" required>
          SR-Code
        </FormLabel>
        <OutlinedInput
          id="srcode"
          name="srcode"
          type="srcode"
          placeholder="20-12345"
          required
          size="small"
        />
      </FormGrid>
    </Grid>
    <Divider/>
    <Grid sx {...{py:{xs: 2, sm: 2, md: 2, lg:  2}}} >
      <Button variant="outlined" size="Medium">
      Save
      </Button>
    </Grid>
    </Box>
  );
}
