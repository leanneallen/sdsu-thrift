import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CategoryCard({categoryName}) {
  return (
    <Card sx={{alignItems:'center', justifyContent:'center', display:'flex',backgroundColor: '#A6192E', height: '150px' }}>
      <CardContent>
        <Typography sx={{color: 'white',}}component="div">
          {categoryName}
        </Typography>
      </CardContent>
    </Card>
  );
}