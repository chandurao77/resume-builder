import React from 'react';
import { Container, Typography } from '@mui/material';

function Preview() {
  const resumeData = JSON.parse(localStorage.getItem('resumeData'));

  if (!resumeData) {
    return <Typography variant="h6">No resume data available</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Resume Preview
      </Typography>
      <Typography variant="h6">Name: {resumeData.name}</Typography>
      <Typography variant="h6">Email: {resumeData.email}</Typography>
      <Typography variant="h6">Experience: {resumeData.experience}</Typography>
    </Container>
  );
}

export default Preview;
