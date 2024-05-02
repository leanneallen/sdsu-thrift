import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment, ListSubheader } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { lighten } from '@mui/material/styles';

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

const drawerWidth = 400;


export default function NewListing() {

  const [open, setOpen] = useState(false);
  const [imgListing, setImgListing] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawer = () => setOpen(!open);
  const handleChange = (event) => setCategory(event.target.value);

  useEffect(() => {
    if (imgListing) {
      setImgUrl(URL.createObjectURL(imgListing));
    }
  }, [imgListing]);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleImageChange = (event) => setImgListing(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title,
      category,
      description,
      price,
      image:imgUrl,
    };    
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('category', category);
    // formData.append('description', description);
    // formData.append('price', price);
    // if (imgListing) {
    //   formData.append('image', imgListing);
    // }
      console.log('Form Data:', formData); // Console log to see the data before sending
    
      axios.post('http://127.0.0.1:8000/listings/create/', formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('Form Data pt:', formData);
        console.log('Response: ', response);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };


  return (
      <Box sx={{ display: 'flex' }} height={70}>

        <AppBar position="static" color='inherit'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              Your Listings
            </Typography>
            <Button onClick={handleDrawer}
                    sx={{ ...(open && { display: 'none' }), color:'white'}}>
              New Listing
              <AddIcon />
            </Button>
          </Toolbar>
        </AppBar>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                flexDirection: 'column',
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
            <Grid container spacing={1} /*component="form" onSubmit={handleSubmit}*/>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="title-input"
                  label="Title"
                  variant="outlined"
                  sx={{width:200, display:'flex', margin:"auto"}}
                  value={title}
                  onChange={handleTitleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
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
                <TextField
                  fullWidth
                  id="description-input"
                  label="Description"
                  variant="outlined"
                  multiline
                  sx={{width:200, display:'flex', margin:"auto"}}
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="price-input"
                  type='text'
                  label="Price"
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  sx={{width:200, display:'flex', margin:"auto"}}
                  value={price}
                  onChange={handlePriceChange}
                />
              </Grid>
              <Grid item xs={12}>

              <Button
                component="label"
                variant="contained"
                sx={{
                  width: 200,
                  display: 'flex',
                  margin: 'auto',
                  color: 'white',
                  backgroundColor: '#A6192E',
                  justifyContent: 'space-between',
                  padding: '10px',
                  mb: 2,
                  '&:hover': {
                    backgroundColor: lighten('#A6192E', 0.2), 
                      }
                    }}
                  >
                Upload Image
                <AddIcon />
                {<VisuallyHiddenInput type="file" onChange={handleImageChange} /* onChange={(e) => setImgListing(e.target.files[0])} */ /> }
              </Button>

                {imgUrl && imgListing && (
                  <Box>
                    <img src={imgUrl} alt={imgListing.name} style={{ width: 200, display: 'flex', margin: 'auto' }}/>
                  </Box>
                )}
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  size="small"
                  sx={{ color: 'white', backgroundColor:'#A6192E', width:200, display:'flex', margin:"auto",
                    '&:hover': {
                      backgroundColor: lighten('#A6192E', 0.2),
                    }}}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Drawer>
      </Box>
  );
}