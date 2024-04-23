import * as React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import Header from '../components/Header';

function SupportPage() {
  return (
    <Box
      maxWidth="800px"
      margin="0 auto"
      padding="2rem"
      textAlign="center"
    >
      <Header />
      <Box
        marginTop="1rem" // Added margin top for space
        sx={{
          backgroundColor: '#A6192E',
          borderRadius: '10px',
          padding: '1rem',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>
          Support
        </Typography>
        <TextField
          label="Search help articles"
          variant="outlined"
          fullWidth
          sx={{  borderRadius: '5px' }}
        />
      </Box>
      <Box
        sx={{
      
          borderRadius: '20px',
          padding: '1rem',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h4" sx={{  mb: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Box className="faq-section">
          <Box className="faq-item">
            <Typography variant="h5" >Question 1?</Typography>
            <Typography variant="body1" >Answer to question 1.</Typography>
          </Box>
          <Box className="faq-item">
            <Typography variant="h5" >Question 2?</Typography>
            <Typography variant="body1" >Answer to question 2.</Typography>
          </Box>
          <Box className="faq-item">
            <Typography variant="h5" >Question 3?</Typography>
            <Typography variant="body1" >Answer to question 3.</Typography>
          </Box>
          <Box className="faq-item">
            <Typography variant="h5" >Question 4?</Typography>
            <Typography variant="body1" >Answer to question 4.</Typography>
          </Box>
          <Box className="faq-item">
            <Typography variant="h5" >Question 5?</Typography>
            <Typography variant="body1" >Answer to question 5.</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: '20px',
          padding: '1rem',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>Contact Us</Typography>
        <Box className="contact-inputs">
          <TextField label="Your Phone Number" variant="outlined" fullWidth />
          <TextField label="Your Email Address" variant="outlined" fullWidth sx={{ marginTop: '1rem' }} />
          <TextField
            label="Your Concerns"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{ marginTop: '1rem' }}
          />
        </Box>
        <Button variant="contained" sx={{ bgcolor: '#A6192E' }}>Send Message</Button> {/* Change button color to red */}
      </Box>
    </Box>
  );
}

export default SupportPage;