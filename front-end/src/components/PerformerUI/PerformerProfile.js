import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Avatar,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  culturalgroups,
  campuses,
  departments,
  programs,
} from "../../data/registrationValues.js";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#AF1740",
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const ProfileHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#AF1740",
  padding: theme.spacing(4),
  textAlign: "center",
  color: "#fff",
}));

export default function PerformerProfile() {
  const [editable, setEditable] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    culturalGroup: "",
    campus: "",
    department: "",
    program: "",
    srCode: "",
  });

  // Fetch performer profile data from backend
  const fetchProfile = async () => {
    try {
      const email = "user@example.com"; // Replace with the logged-in user's email
      const response = await fetch(`http://localhost:4000/api/profile?email=${email}`);
  
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setSelectedDepartment(data.department);
        setSelectedProgram(data.program);
      } else {
        console.error("Failed to fetch profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Save updated profile data to backend
  const saveProfile = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Send the entire userData object
      });
  
      if (response.ok) {
        const data = await response.json();
        setEditable(false); // Exit edit mode
        console.log("Profile updated:", data);
      } else {
        console.error("Failed to save profile");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
        <ProfileHeader>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              border: "3px solid white",
            }}
            src={userData.image || "/path-to-placeholder-image.jpg"}
          />
          <Typography variant="h5" sx={{ marginTop: 10 }}>
            {userData.firstName || ""} {userData.lastName || ""}
          </Typography>
          <Button
            variant="outlined"
            sx={{ marginTop: 5 }}
            onClick={() => setEditable(!editable)}
          >
            {editable ? "Cancel" : "Edit Profile"}
          </Button>
        </ProfileHeader>
      </Grid>

      <Grid item xs={12}>
        <StyledCard>
          <Typography variant="h6">Update Your Details</Typography>
          <Divider sx={{ my: 2 }} />
          <form>
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                  disabled={!editable}
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  disabled={!editable}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  disabled={!editable}
                />
              </Grid>

              {/* SR Code */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SR-Code"
                  variant="outlined"
                  fullWidth
                  name="srCode"
                  value={userData.srCode}
                  onChange={handleInputChange}
                  disabled={!editable}
                />
              </Grid>

              {/* Cultural Group */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth disabled={!editable}>
                  <InputLabel>Cultural Group</InputLabel>
                  <Select
                    name="culturalGroup"
                    value={userData.culturalGroup}
                    onChange={handleInputChange}
                  >
                    {culturalgroups.map((group, index) => (
                      <MenuItem key={index} value={group.label}>
                        {group.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Campus */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth disabled={!editable}>
                  <InputLabel>Campus</InputLabel>
                  <Select
                    name="campus"
                    value={userData.campus}
                    onChange={handleInputChange}
                  >
                    {campuses.map((campus, index) => (
                      <MenuItem key={index} value={campus.label}>
                        {campus.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Department */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth disabled={!editable}>
                  <InputLabel>Department</InputLabel>
                  <Select
                    name="department"
                    value={selectedDepartment}
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value);
                      setSelectedProgram("");
                      handleInputChange(e);
                    }}
                  >
                    {departments.map((department, index) => (
                      <MenuItem key={index} value={department.label}>
                        {department.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Program */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth disabled={!editable || !selectedDepartment}>
                  <InputLabel>Program</InputLabel>
                  <Select
                    name="program"
                    value={selectedProgram}
                    onChange={(e) => {
                      setSelectedProgram(e.target.value);
                      setUserData((prevData) => ({
                        ...prevData,
                        program: e.target.value,
                      }));
                    }}
                  >
                    {programs[selectedDepartment]?.map((program, index) => (
                      <MenuItem key={index} value={program.label}>
                        {program.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {editable && (
              <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{ marginTop: 3 }}
                onClick={saveProfile}
              >
                Save
              </Button>
            )}
          </form>
        </StyledCard>
      </Grid>
    </Grid>
  );
}
