import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function IndivListing({ title, category, owner, description, price, createdAt, updatedAt }) {
  return (
    <div style={{ marginTop: '70px' }}> {/* Adjust the margin here to match the distance from the header to the carousel */}
      <Card sx={{ width: '100%', maxWidth: 1200 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Category: {category}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Owner: {owner}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Price: {price}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Created At: {createdAt}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Updated At: {updatedAt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Contact Seller</Button>
        </CardActions>
      </Card>
    </div>
  );
}
