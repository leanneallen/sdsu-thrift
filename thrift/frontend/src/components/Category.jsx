import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from "react-router-dom";

export default function CategoryCard({categoryName, onClick}) {
  return (
    <Card sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#A6192E', height: '150px' }}>
      <RouterLink to="/apparel" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
      <CardActionArea onClick={onClick} sx={{ width: '100%', height: '100%' }}>
        <CardContent>
          <Typography sx={{ color: 'white' }} component="div">
            {categoryName}
          </Typography>
        </CardContent>
      </CardActionArea>
      </RouterLink>
    </Card>
  );
}
