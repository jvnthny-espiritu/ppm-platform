import React, { useState, useContext, useEffect } from "react";
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
  fetchRegistrationValues,
} from "../../data/registrationValues.js";
import { UserContext } from "../../_context/UserContext";

// Styled components for consistent UI styling
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const ProfileHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#3f51b5",
  padding: theme.spacing(4),
  textAlign: "center",
  color: "#fff",
}));

const DisplayField = styled("div")(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  padding: theme.spacing(1, 0),
  backgroundColor: "#f4f4f4",
  borderRadius: theme.shape.borderRadius,
  textAlign: "left",
  paddingLeft: theme.spacing(2),
  color: "#333", // Ensure font color is visible
}));

export default function PerformerProfile() {
  // State to toggle edit mode
  const [editable, setEditable] = useState(false);

  // States for dropdowns and user data
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  // State to hold saved user data (non-editable mode)
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

  // State to hold editable data (temporary changes during edit mode)
  const [editableUserData, setEditableUserData] = useState({ ...userData });

  // State for achievements
  const [achievements, setAchievements] = useState([]); // List of achievements
  const [editableAchievements, setEditableAchievements] = useState([]); // Editable version of achievements

  // Fetch user profile data from backend
  const fetchProfile = async () => {
    try {
      const email = "user@example.com"; // Replace with the logged-in user's email
      const response = await fetch(`http://localhost:4000/api/profile?email=${email}`);

      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Set the saved data
        setEditableUserData(data); // Sync editable data
        setSelectedDepartment(data.department); // Update dependent dropdowns
        setSelectedProgram(data.program);
        setAchievements(data.achievements || []); // Load achievements
        setEditableAchievements(data.achievements || []);
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
        body: JSON.stringify({ ...editableUserData, achievements: editableAchievements }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Update displayed data with the response
        setAchievements(data.achievements || []); // Update achievements
        setEditable(false); // Exit edit mode
        console.log("Profile updated:", data);
      } else {
        console.error("Failed to save profile");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes in achievements
  const handleAchievementChange = (index, field, value) => {
    const updatedAchievements = [...editableAchievements];
    updatedAchievements[index][field] = value;
    setEditableAchievements(updatedAchievements);
  };

  // Add a new achievement
  const addAchievement = () => {
    setEditableAchievements([...
      editableAchievements,
      { awardName: "", eventName: "", date: "" },
    ]);
  };

  // Fetch user profile data on component mount
  useEffect(() => {
    fetchProfile();
  }, []);

  // Helper function to render individual form fields
  const renderField = (label, name, options = null) => (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle2">{label}</Typography>
      {editable ? (
        options ? (
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
              name={name}
              value={editableUserData[name]}
              onChange={handleInputChange}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <TextField
            fullWidth
            variant="outlined"
            name={name}
            value={editableUserData[name]}
            onChange={handleInputChange}
          />
        )
      ) : (
        <DisplayField>{userData[name] || "N/A"}</DisplayField>
      )}
    </Grid>
  );

  // Render achievements section
  const renderAchievements = () => (
    <StyledCard>
      <Typography variant="h6">Achievements</Typography>
      <Divider sx={{ my: 2 }} />
      {editable ? (
        <>
          {editableAchievements.map((achievement, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Award Name"
                  fullWidth
                  value={achievement.awardName}
                  onChange={(e) =>
                    handleAchievementChange(index, "awardName", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Event Name"
                  fullWidth
                  value={achievement.eventName}
                  onChange={(e) =>
                    handleAchievementChange(index, "eventName", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={achievement.date}
                  onChange={(e) =>
                    handleAchievementChange(index, "date", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          ))}
          <Button
            variant="outlined"
            sx={{ marginTop: 2 }}
            onClick={addAchievement}
          >
            Add Achievement
          </Button>
        </>
      ) : (
        achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <DisplayField key={index}>
              <strong>Award Name:</strong> {achievement.awardName || "N/A"} <br />
              <strong>Event Name:</strong> {achievement.eventName || "N/A"} <br />
              <strong>Date:</strong> {achievement.date || "N/A"}
            </DisplayField>
          ))
        ) : (
          <Typography>No achievements added yet.</Typography>
        )
      )}
    </StyledCard>
  );

  return (
    <Grid container spacing={3} padding={3}>
      {/* Profile Header */}
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
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            {userData.firstName || ""} {userData.lastName || ""}
          </Typography>
          <Button
            variant="outlined"
            sx={{ marginTop: 2 }}
            onClick={() => {
              if (editable) setEditableUserData(userData); // Revert changes if canceled
              setEditable(!editable);
            }}
          >
            Add Achievement
          </Button>
        </>
      ) : (
        achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <DisplayField key={index}>
              <strong>Award Name:</strong> {achievement.awardName || "N/A"} <br />
              <strong>Event Name:</strong> {achievement.eventName || "N/A"} <br />
              <strong>Date:</strong> {achievement.date || "N/A"}
            </DisplayField>
          ))
        ) : (
          <Typography>No achievements added yet.</Typography>
        )
      )}
    </StyledCard>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProfileHeader>
          <Avatar alt={user?.firstName} src={user?.image} />
          <Typography variant="h4">{`${user?.firstName} ${user?.lastName}`}</Typography>
          <Typography variant="subtitle1">{user?.email}</Typography>
        </ProfileHeader>
      </Grid>

      {/* Profile Details */}
      <Grid item xs={12}>
        <StyledCard>
          <Typography variant="h6">Profile Details</Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            {renderField("First Name", "firstName")}
            {renderField("Last Name", "lastName")}
            {renderField("Email Address", "email")}
            {renderField("SR Code", "srCode")}
            {renderField("Cultural Group", "culturalGroup", culturalgroups)}
            {renderField("Campus", "campus", campuses)}
            {renderField("Department", "department", departments)}
            {renderField("Program", "program", programs[selectedDepartment] || [])}
          </Grid>

         
        </StyledCard>
      </Grid>

      {/* Achievements Section */}
      <Grid item xs={12}>
        {renderAchievements()}

      </Grid>

      {/* Save Button */}
{editable && (
  <Grid item xs={12} container justifyContent="center" alignItems="center">
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: 3 }}
      onClick={saveProfile}
    >
      Save
    </Button>
  </Grid>
)}
    </Grid>
  );
}