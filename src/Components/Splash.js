import React from 'react';
import { Typography, Button, GridList } from '@material-ui/core';
import styled from 'styled-components';
import Image from '../Images/JFProfile.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';


export default function Splash() {
  const screenSize = useMediaQuery('(min-width:600px)');


// class Splash extends React.Component {


  

//   render() {


    const SplashContainer = styled.div`
      background-image: url('https://images.unsplash.com/photo-1472273133229-096f0e5116e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
      height: 100%;
      width: 100%;
      position: absolute;
      `
    if (screenSize == true) {
    return (
      <SplashContainer> 
      <img src={Image} height='200px' width='200px' style={{float: 'left', marginTop: '13%', borderRadius: '50%', marginLeft: '25%'}} />
      <GridList cols={1} style={{marginTop: '15%', marginLeft: '45%'}} cellHeight='100px'>
        <ScrollAnimation animateIn='lightSpeedIn'>
        <Typography variant="h3" direction='row'>Hi, I'm Jonny Fluckey</Typography>
        <Link to='/home' style={{textDecoration: 'none'}}>
        <Button variant="outlined" color="primary" size="large" style={{width: '200px', marginTop: '25px', marginLeft: '15%'}}>Learn More</Button>
        </Link>
        </ScrollAnimation>
      </GridList>
      </SplashContainer>
    )} else {
      return (
        <SplashContainer> 
      <img src={Image} height='200px' width='200px' style={{marginTop: '13%', borderRadius: '50%', marginLeft: '25%'}} />
      <GridList cols={1} style={{marginTop: '15%'}} cellHeight='100px'>
        <ScrollAnimation animateIn='lightSpeedIn'>
        <Typography variant="h3" direction='row' align='center'>Hi, I'm Jonny Fluckey</Typography>
        <Link to='/home' style={{textDecoration: 'none'}}>
        <Button variant="outlined" color="primary" size="large" style={{width: '200px', marginTop: '25px', marginLeft: '25%'}}>Learn More</Button>
        </Link>
        </ScrollAnimation>
      </GridList>
      </SplashContainer>
      )
    }
  }
// export default Splash