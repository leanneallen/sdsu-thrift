import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

export default function Listing({title, img, price}) {
  return (
    <Card position = "flex" sx={{  maxWidth: 300 }}>
      <RouterLink to="/IndivListingPage" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
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
          <Typography gutterBottom variant="h6" component="div" align="left">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" align="left">
            {"Price: " + price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </RouterLink>
    </Card>
  );
}