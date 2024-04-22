import React from 'react';
import { Typography, Button, Box, List, ListItem, ListItemText, Paper } from '@mui/material';
import Header from '../components/Header';
import thriftStorePic from '../assets/thriftstorepic.jpg';

function AboutPage() {
  return (
    <>
      <Header />
      <Box
        maxWidth="1280px"
        margin="0 auto"
        padding="2rem"
        textAlign="center"
      >
       <Paper elevation={3} sx={{ padding: '1rem' }}>
          <div className="about-page">
            <Typography variant="h2" sx={{ mb: 2 }}>About</Typography>
            <Paper elevation={0} sx={{ padding: '1rem', marginBottom: '1rem' }}>
              <Typography variant="body1">
                This is a little about what makes us so special.
              </Typography>
            </Paper>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box sx={{ width: '50%', paddingRight: '1rem' }}>
              <Paper elevation={0} sx={{ padding: '1rem', marginBottom: '1rem' }}>
                  <Typography variant="body1">
                    SDSUthrift is a thrift store dedicated to serving the needs of college students at San Diego State University.
                    Our mission is to provide affordable and sustainable clothing options to students while promoting eco-friendly practices.
                    We strive to create a community where students can buy and sell pre-loved items, reducing waste and supporting sustainability efforts.
                  </Typography>
                  </Paper>
                <Typography variant="body1" sx={{ mt: 2 }}>Sound interesting?</Typography>
                <Button variant="contained" sx={{ bgcolor: '#A6192E' }}>Get Started</Button> {/* Changed color to #A6192E */}
              </Box>
              <Box sx={{ width: '50%', paddingLeft: '1rem' }}>
                <img src={thriftStorePic} alt="Thrift Store" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            </Box>
            <Paper elevation={3} sx={{ padding: '1rem', marginBottom: '1rem' }}>
              <div className="quick-facts-section">
                <Typography variant="h3">Quick Facts</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="We donate 50% of our profits to save endangered pandas." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="We offer a lifetime warranty on all our products." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Our store is haunted by friendly ghosts." />
                  </ListItem>
                </List>
              </div>
            </Paper>
          </div>
        </Paper>
      </Box>
    </>
  );
}

export default AboutPage;