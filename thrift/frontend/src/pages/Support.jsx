import * as React from 'react';
import { Typography, Box, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';
import Footer from './Footer'; // Ensure this path is correct based on your project structure

function SupportPage() {
  return (
    <Box
      maxWidth="800px"
      margin="0 auto"
      padding="2rem"
      textAlign="center"
    >
      <Header />
      <Typography variant="h4" sx={{ color: '#fff', mb: 2, mt: 1 }}>
        Support
      </Typography>
      <TextField
        label="Search help articles"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          style: { color: '#000' } // Label text color
        }}
        inputProps={{
          style: { color: '#000' } // Input text color
        }}
        sx={{
          borderRadius: '5px',
          backgroundColor: '#fff', // Set the background color to white
          mb: 2 // Adds margin bottom for spacing
        }}
      />

      <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">How do I safely pick up my item?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We do not guarantee safety of either you or your item.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">How do I get paid or pay for my item?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SDSU Thrift are big believers in the finders keepers method.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">What is SDSU Thrift's return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SDSU Thrift is a one-time sale website.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>Contact Us</Typography>
      <Box className="contact-inputs">
        <TextField label="Your Phone Number" variant="outlined" fullWidth />
        <TextField label="Your Email Address" variant="outlined" fullWidth sx={{ mt: 1 }} />
        <TextField
          label="Your Concerns"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ mt: 1 }}
        />
      </Box>
      <Button variant="contained" sx={{ bgcolor: '#A6192E', mt: 2 }}>Send Message</Button>
      <Footer /> {/* Added Footer here */}
    </Box>
  );
}

export default SupportPage;
