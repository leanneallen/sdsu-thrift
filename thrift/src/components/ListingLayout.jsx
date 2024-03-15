import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListingList from './ListingGrid';
import NewListing from './NewListing';
export default function ListingLayout() {
  return (
    <Paper sx={{padding: 5}}>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <NewListing/>
      </Grid>
      <Grid item xs={12}>
        <ListingList/>
      </Grid>
    </Grid>
    </Paper>
  );
}
