import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import styled from 'styled-components';



class Splash extends React.Component {


  

  render() {


    const SplashContainer = styled.div`
      background-image: url('https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2029&q=80');
      height: 100%;
      width: 100%;
      position: absolute;
      `

    return (
      <SplashContainer> 
      <Grid style={{marginTop: '200px'}} container spacing={24}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
      <Typography variant="h3" align="center">Welcome to my Website</Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
      <Button variant="outlined" color="secondary" size="large" href='/home'>Click Here to Enter</Button>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
      </SplashContainer>
    )
  }
}

export default Splash