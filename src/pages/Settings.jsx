import { Box, Typography, FormGroup, FormControlLabel, Switch, Paper } from '@mui/material';
import { useState } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box sx={{ ml: '240px', p: 3, mt: 8 }}>
      <Typography variant="h4" gutterBottom>Settings</Typography>

      <Paper sx={{ p: 3 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            }
            label="Enable Notifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label="Enable Dark Mode"
          />
        </FormGroup>
      </Paper>
    </Box>
  );
};

export default Settings;
