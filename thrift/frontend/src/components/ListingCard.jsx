import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { CardActionArea } from '@mui/material';

export default function Listing({title, img, desc}) {
  return (
    <Card position = "flex" sx={{ maxWidth: 300 }}style ={{ marginTop: '64px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="345"
          height="200"
          image={img}
          alt="Listing"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" align="left">
            {title}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="body1" color="text.secondary" align="left">
            {"Price: " + desc}
          </Typography>
          <Button>
            Unlist
          </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}