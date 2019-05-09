import React from 'react';
import { Grid, Typography } from '@material-ui/core';



const Footer =  () => (

  
  <footer style={{
    position: 'absolute', 
    height: '300px',
    width: '100%',
    backgroundColor: '#181D26',
    paddingRight: '10%',
    paddingLeft: '10%',
    paddingTop: '50px',
    }}>
    
    <Grid 
    container
    spacing={24}
    alignContent='center'
    justify='center'
    alignItems='center'
    >
    <Grid item xs={4}>
    <Typography variant='h6' style={{color: 'white'}}>Jonny Fluckey</Typography>
    </Grid>
    <Grid item xs={4}></Grid>
    <Grid item xs={4}></Grid>
    </Grid>

  </footer>

)

export default Footer