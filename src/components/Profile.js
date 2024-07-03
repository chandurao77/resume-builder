import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchData();
  }, [user.token]);

  const handleLogout = () => {
    logout();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <TextField
        label="Email"
        fullWidth
        value={email}
        margin="normal"
        disabled
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        fullWidth
      >
        Logout
      </Button>
    </Container>
  );
}

export default Profile;
