import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment, ListSubheader } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import VisuallyHiddenInput from '@mui/material/InputBase';

const drawerWidth = 400;

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#A6192E',
    },
    ...(mode === 'dark' && {
      background: {
        default: '#121212',
        paper: '#121212',
      },
      text: {
        primary: '#fff',
        secondary: '#e0e0e0',
      },
    }),
  },
});

export default function NewListing() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')),
    [prefersDarkMode],
  );

  const [open, setOpen] = useState(false);
  const [imgListing, setImgListing] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [category, setCategory] = useState('');

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawer = () => setOpen(!open);
  const handleChange = (event) => setCategory(event.target.value);

  useEffect(() => {
    if (imgListing) {
      setImgUrl(URL.createObjectURL(imgListing));
    }
  }, [imgListing]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }} height={70}>
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
              Your Listings
            </Typography>
            <Button color="primary"
                    onClick={handleDrawer}
                    sx={{ ...(open && { display: 'none' }) }}
                    startIcon={<AddIcon />}>
              New Listing
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ marginTop: '64px' }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
          >
            <Toolbar />
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="title-input"
                  label="Title"
                  variant="outlined"
                  sx={{width:200, display:'flex', margin:"auto"}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="category-select-label">Category</InputLabel>
                  <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    onChange={handleChange}
                    label="Category"
                    sx={{width:200, display:'flex', margin:"auto"}}
                    MenuProps={{ 
                      PaperProps: {
                        style: {
                          maxHeight: 224,
                        },
                      },
                    }}
                  >
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="furniture">Furniture</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                    <MenuItem value="books">Books</MenuItem>
                    <MenuItem value="sports">Sports</MenuItem>
                    <ListSubheader>More Categories</ListSubheader>
                    <MenuItem value="garden">Garden</MenuItem>
                    <MenuItem value="beauty">Beauty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  component="label"
                  sx={{ width: 200, display: 'flex', margin: 'auto', justifyContent: 'space-between', padding: '10px' }}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    accept="image/*"
                    type="file"
                    onChange={e => setImgListing(e.target.files[0])}
                  />
                  <AddIcon />
                </Button>
                {imgUrl && imgListing && (
                  <Box>
                    <img src={imgUrl} alt={imgListing.name} style={{ width: 200, display: 'flex', margin: 'auto' }}/>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description-input"
                  label="Description"
                  variant="outlined"
                  multiline
                  sx={{width:200, display:'flex', margin:"auto"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="price-input"
                  label="Price"
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  sx={{width:200, display:'flex', margin:"auto"}}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  sx={{width:200, display:'flex', margin:"auto"}}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
