import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import profilePic from "../assets/profilepic.jpg";


export default function Profile() {
  const { firstName, lastName, addressLine1, addressLine2, city, state, zipCode, email } = useParams();

  const initialData = {
    firstName: 'Jane',
    lastName: 'Doe',
    addressLine1: '123 Mary Street',
    addressLine2: '',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92115',
    email: 'janedoe@gmail.com',
  };

  const [formData, setFormData] = React.useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      addressLine1: data.get('addressLine1'),
      addressLine2: data.get('addressLine2'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zipCode'),
      email: data.get('email'),
    });
    // You can add logic here to update the user information
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '2rem' }}>
      <div style={{ marginTop: '2rem' }}>
      <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 100, height: 100, margin: '0 auto 1rem auto' }} />
        <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#A6192E' }}>
          User Profile
        </Typography>
        <form noValidate onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue={formData.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                defaultValue={formData.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="addressLine1"
                label="Address Line 1"
                name="addressLine1"
                defaultValue={formData.addressLine1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="addressLine2"
                label="Address Line 2"
                name="addressLine2"
                defaultValue={formData.addressLine2}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                defaultValue={formData.city}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                defaultValue={formData.state}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                id="zipCode"
                label="Zip Code"
                name="zipCode"
                defaultValue={formData.zipCode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                defaultValue={formData.email}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#A6192E', '&:hover': { backgroundColor: '#CC3333' } }}
          >
            Save Changes
          </Button>
        </form>
      </div>
    </Container>
  );
}
