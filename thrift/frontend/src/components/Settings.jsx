import * as React from 'react';
import { useTheme } from '../components/ThemeContext';
import { Container, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function Settings() {
  const { isDarkMode, toggleTheme } = useTheme();  // Destructure the needed context values
  const [notifications, setNotifications] = React.useState(false);
  const [language, setLanguage] = React.useState('');
  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
          label="Dark Mode"
        />
        <FormControlLabel
          control={<Switch checked={notifications} onChange={handleNotificationsChange} />}
          label="Allow Notifications"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            id="language"
            value={language}
            onChange={handleLanguageChange}
          >
            <MenuItem value="">Select Language</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            {/* Add more languages as needed */}
          </Select>
        </FormControl>
      </FormGroup>
      {/* Add other settings here */}
    </Container>
  );
}
