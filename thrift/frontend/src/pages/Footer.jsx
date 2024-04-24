// Footer.jsx
import React from 'react';
import { Box, TextField, Button, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box sx={{ width: '100%', padding: 3, backgroundColor: '#f0f0f0', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
                Subscribe to Our Newsletter
            </Typography>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, justifyContent: 'center', display: 'flex' }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Email Address" variant="outlined" />
                <Button variant="contained" color="primary">Subscribe</Button>
            </Box>
            <Box sx={{ padding: 2 }}>
                <IconButton aria-label="Instagram">
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label="Facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="Twitter">
                    <TwitterIcon />
                </IconButton>
            </Box>
            <Typography variant="body2" color="textSecondary">
                © 2024 SDSU Thrift. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
