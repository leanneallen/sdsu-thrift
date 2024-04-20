import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Listing({title, img, price}) {
  return (
    <Card position = "flex" sx={{ maxWidth: 300 }}style ={{ marginTop: '64px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="345"
          height="150"
          image={img}
          alt="Listing"
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" align="left">
            {"Price: " + price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}