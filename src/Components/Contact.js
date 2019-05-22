import React from 'react';
import styled from 'styled-components';
import { Typography, Grid} from '@material-ui/core';
import FBIcon from '../Images/FB.png';
import TwitterIcon from '../Images/Twitter.png';
import LinkedInIcon from '../Images/LinkedIn.png';
import GithubIcon from '../Images/Github.png';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import Footer from './Shared/Footer';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';





export default function Contact() {
  const screenSize = useMediaQuery('(min-width:800px)');

  const HomeContainer = styled.div`
  background-color: #AEB1BF;
  height: 100%;
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  position: absolute;
  padding-bottom: 100px;
  border-style: solid;
  border-left-width: 75px;
  border-left-color: #656773;
  border-right-width: 75px;
  border-right-color: #656773;
  position: relative;
  `

  const HomeMobileContainer = styled.div`
      background-color: #AEB1BF;
      height: ;
      width: ;
      padding-right: 10%;
      padding-left: 10%;
      position: absolute;
      padding-bottom: 100px;
      border-style: solid;
      border-left-width: 25px;
      border-left-color: #656773;
      border-right-width: 25px;
      border-right-color: #656773;
      position: relative;
      `

if (screenSize == true) {

  return (
<>
<HomeContainer>
  <Typography variant='h2' align='center' style={{marginTop: '100px'}}>Contact Jonny through the following channels:</Typography>
  <br></br>
  <br></br>
  <Grid style={{marginTop: '100px'}} 
      container 
      spacing={24}
      alignContent='center'
      justify='center'
      alignItems='center'
      >
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.facebook.com/jfluckey1' target='_blank'>
  <img src={FBIcon} height='50px' width='50px'/>
  </a>
  <Typography variant='body1'>Jonathon Fluckey</Typography>
  </ScrollAnimation>
  </Grid>
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.twitter.com/jonnyfluckey' target='_blank'>
  <img src={TwitterIcon} height='50px' width='50px'/>
  </a>
  <Typography variant='body1'>@jonnyfluckey</Typography>
  </ScrollAnimation>
  </Grid>
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.linkedin.com/in/jonathonfluckey' target='_blank'>
  <img src={LinkedInIcon} height='50px' width='50px' />
  </a>
  <Typography variant='body1'>Jonathon Fluckey</Typography>
  </ScrollAnimation>
  </Grid>
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.github.com/jonnyfluckey' target='_blank'>
  <img src={GithubIcon} height='50px' width='50px' style={{backgroundColor: 'white', borderRadius: '100%'}}/>
  </a>
  <Typography variant='body1'>jonnyfluckey</Typography>
  </ScrollAnimation>
  </Grid>
  </Grid>

</HomeContainer>
<Footer />
</>
)} else {
  return (
    <>
    <HomeMobileContainer>
    <Typography variant='h2' align='center' style={{marginTop: '100px'}}>Contact Jonny through the following channels:</Typography>
  <br></br>
  <br></br>
  <Grid style={{marginTop: '100px'}} 
      container 
      spacing={24}
      alignContent='center'
      justify='center'
      alignItems='center'
      >
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.facebook.com/jfluckey1' target='_blank'>
  <img src={FBIcon} height='50px' width='50px'/>
  </a>
  <Typography variant='body1'>Jonathon Fluckey</Typography>
  </ScrollAnimation>
  </Grid>
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.twitter.com/jonnyfluckey' target='_blank'>
  <img src={TwitterIcon} height='50px' width='50px'/>
  </a>
  <Typography variant='body1'>@jonnyfluckey</Typography>
  </ScrollAnimation>
  </Grid>
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.linkedin.com/in/jonathonfluckey' target='_blank'>
  <img src={LinkedInIcon} height='50px' width='50px' />
  </a>
  <Typography variant='body1'>Jonathon Fluckey</Typography>
  </ScrollAnimation>
  </Grid>
  <Grid item xs={6} sm={3} align='center'>
  <ScrollAnimation animateIn='rollIn'>
  <a href='///www.github.com/jonnyfluckey' target='_blank'>
  <img src={GithubIcon} height='50px' width='50px' style={{backgroundColor: 'white', borderRadius: '100%'}}/>
  </a>
  <Typography variant='body1'>jonnyfluckey</Typography>
  </ScrollAnimation>
  </Grid>
  </Grid>
    </HomeMobileContainer>
    <Footer />
    </>
  )
}
}