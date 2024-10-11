import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="Billy"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Salamat"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
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
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="cgroup" required>
          Cultural Group
        </FormLabel>
        <OutlinedInput
          id="cgroup"
          name="cgroup"
          type="cgroup"
          placeholder="Performing Arts"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="campus" required>
          Campus
        </FormLabel>
        <OutlinedInput
          id="campus"
          name="campus"
          type="campus"
          placeholder="Alangilan"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="department" required>
          Department
        </FormLabel>
        <OutlinedInput
          id="department"
          name="department"
          type="department"
          placeholder="CICS"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
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
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="program" required>
          Program
        </FormLabel>
        <OutlinedInput
          id="program"
          name="program"
          type="program"
          placeholder="BS Computer Science"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="I agree to the terms and conditions."
        />
      </FormGrid>
    </Grid>
  );
}
