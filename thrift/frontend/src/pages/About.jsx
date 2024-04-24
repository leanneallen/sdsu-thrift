import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Paper, Card, CardContent, Avatar } from '@mui/material';
import Header from '../components/Header';
import thriftStorePic from '../assets/thriftstorepic.jpg';
import NatureIcon from '@mui/icons-material/Nature';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GhostIcon from '@mui/icons-material/Visibility'; // Simulating a ghost icon

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
        <Card elevation={3} sx={{ marginBottom: '2rem' }}>
          <CardContent>
            <Typography variant="h2" sx={{ mb: 2 }}>About</Typography>
            <Typography variant="body1">
              This is a little about what makes us so special.
            </Typography>
          </CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="1rem"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Card sx={{ width: { xs: '100%', md: '50%' }, margin: { md: '0 1rem 0 0' } }}>
              <CardContent>
                <Typography variant="body1">
                  SDSUthrift is a thrift store dedicated to serving the needs of college students at San Diego State University.
                  Our mission is to provide affordable and sustainable clothing options to students while promoting eco-friendly practices.
                  We strive to create a community where students can buy and sell pre-loved items, reducing waste and supporting sustainability efforts.
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontStyle: 'italic' }}>Get started today!</Typography>
              </CardContent>
            </Card>
            <Box sx={{ width: { xs: '100%', md: '50%' }, padding: { md: '0 0 0 1rem' }, mt: { xs: 2, md: 0 } }}>
              <img src={thriftStorePic} alt="Thrift Store" style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }} />
            </Box>
          </Box>
          <Card elevation={3} sx={{ margin: '1rem' }}>
            <CardContent>
              <Typography variant="h3">Quick Facts</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="We donate 50% of our profits to save endangered pandas." />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <NatureIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="We offer a lifetime warranty on all our products." />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <GhostIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Our store is haunted by friendly ghosts." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Card>
      </Box>
    </>
  );
}

export default AboutPage;
