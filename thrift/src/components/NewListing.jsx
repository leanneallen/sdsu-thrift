import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputAdornment from '@mui/material/InputAdornment';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function NewListing() {
  const [open, setOpen] = React.useState(false);
  const [imgListing, setImgListing] = React.useState(null);
  const [imgUrl, setImgUrl] = React.useState(null);

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawer = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if(imgListing){
      setImgUrl(URL.createObjectURL(imgListing));
    }
  }, [imgListing]);
  

  return (
    <Box sx={{ display: 'flex' }} height={70}>
      <CssBaseline />
      <AppBar position="static" open={open}sx={{ backgroundColor: '#A6192E' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Your Listings
          </Typography>
          <Button color="inherit"
                  onClick={handleDrawer}
                  sx={{ ...(open /*&& { display: 'none' }*/) }}
                  startIcon={<AddIcon/>}>
            New Listing
            
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: '64px' }}>
        <Main open={open}>
          
          
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
          onClose={handleDrawerClose} // Close drawer when clicking outside
        >
          <Toolbar />
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <Grid container spacing={1}>

        {/* New listing fields */}    
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{width:200,
                    display:'flex',
                    padding:'20',
                    margin:"auto"}}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                /* startIcon={<CloudUploadIcon />} */
                sx={{width:200,
                    display:'flex',
                    padding:'10',
                    margin:"auto",
                    marginBottom: 2}}
              >
                Upload image
                <VisuallyHiddenInput 
                  type="file"
                  onChange = {x => setImgListing(x.target.files[0])} />
              </Button>
              {imgUrl && imgListing && (
                <Box>
                  <img src={imgUrl} alt={imgListing.name} style={{width:200, display:'flex', padding:'10', margin:"auto"}}/>
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline
                sx={{width:200,
                    display:'flex',
                    padding:'10',
                    margin:"auto"}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Price"
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} 
                sx={{width:200,
                    display:'flex',
                    padding:'10',
                    margin:"auto"}}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="small"
                sx={{width:200,
                    display:'flex',
                    padding:'10',
                    margin:"auto"}}
              >
                Submit
              </Button>
              </Grid>
          </Grid>
        </Drawer>
      </Box>
    </Box>
  );
}
