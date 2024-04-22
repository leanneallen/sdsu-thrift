import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import { Link as RouterLink} from "react-router-dom";


export default function IndivListing({ title, category, owner, description, price, createdAt, updatedAt, }) {
  return (

    <Card className= 'listing-info' sx={{
      width: '100%', // full width of the grid column
      height: '100%', // full height of the grid column
      display: 'flex',
      flexDirection: 'column',
      marginY: 0,
      justifyContent: 'space-between'}}>

      <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {price}
            </Typography>
        </Box>

        <Box sx={{ display: 'flex',  alignItems: 'center'}}>
            {/* <IconButton onClick={handleOpenUserMenu}sx={{ p:0 }}  > */}
          <Button sx={{textTransform: 'none'}} varient='contained' component={RouterLink} to={"/"+owner}>
            <Avatar alt="Mr.Fluffy" src="./src/assets/SpookyChair.png" />
            <Typography sx={{ marginLeft: '5px'}}variant="body1" color="text.secondary">
              {owner}
            </Typography>
          </Button>
        </Box>
        <Box sx={{ marginTop:'10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography textAlign='left' variant="subtitle1" color="text.secondary">
            <b>Description:</b>
          </Typography> 
        </Box>
        <Box sx={{ marginTop:'10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography textAlign='left' variant="subtitle1" color="text.secondary">
            {description}
          </Typography>
        </Box>

      
      </CardContent>

      <CardContent style={{ padding: '16px', justifyContent: 'space-evenly',flexDirection: 'column' }}>
        <Box sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>  
        <Typography variant="caption" color="text.secondary">
          Updated at: {updatedAt}
        </Typography>
          <Typography textAlign='left' variant="caption" color="text.secondary">
            Created at: {createdAt}
          </Typography>
        </Box>
      

      <CardActions style={{ marginTop: '7px', padding: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
        <Button style={{padding: '0px'}} size="medium">Share Item</Button>
        <Button style={{padding: '0px'}} size="medium">Contact Seller</Button>
      </CardActions>

      </CardContent>

    </Card>

  );
}


