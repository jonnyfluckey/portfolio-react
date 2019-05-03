import React, {Component} from 'react';
import { Typography, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Image from '../Images/JFProfile.jpg';
import Roll from 'react-reveal/Roll';
import Image2 from '../Images/Family.jpg';


class Home extends Component {





render() {

  const HomeContainer = styled.div`
      background-image: url('');
      height: 100%;
      width: 100%;
      position: absolute;
      `



  return (
    <HomeContainer>
      <Grid style={{marginTop: '100px'}} 
      container 
      spacing={24}
      alignContent='center'
      justify='center'
      alignItems='center'
      >
        {/* <Grid item xs={4}></Grid>
        <Grid item xs={4} align='center'>
        <img src={Image} height='200px' width='200px' />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
        <Typography align='center' variant='h1'>Jonny Fluckey</Typography>
        </Grid> */}
        {/* <Roll bottom> */}
        <Grid item xs={6} align='center'>
        <img src={Image2} height='75%' width='75%' alt='Picture of Family'/>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='h4'>
        Hi, my name is Jonny Fluckey. I am the father of two wonderful children, the husband of a delightful wife for over 10 years, and a huge fan of pop culture and sports.
        </Typography>
        </Grid>
        <Grid item xs={4} align='center' style={{marginTop: '100px'}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/Utah_Jazz_wordmark_logo_primary_color.png' alt='Utah Jazz Logo' height='65%' width='65%' />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Utah_Utes_-_U_logo.svg/1121px-Utah_Utes_-_U_logo.svg.png' alt='Utah Utes Logo' height='35%' width='35%' />
        </Grid>
        <Grid item xs={4} style={{marginTop: '100px'}}>
        <Typography variant='h4'>
        These are my favorite teams
        </Typography>
        </Grid>
        <Grid item xs={4} align='center' style={{marginTop: '100px'}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c9/New_york_jets_alternate_logo.gif' alt='NY Jets Logo' height='45%' width='45%' />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/851px-Colorado_Rockies_logo.svg.png' alt='Colorado Rockies Logo' height='25%' width='25%' />
        </Grid>
        <Grid item xs={4} style={{marginTop: '100px'}}>
        <Typography variant='h4'>
        Here are some of my favorite pop culture subjects
        </Typography>
        </Grid>
        <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/1280px-Marvel_Studios_2016_logo.svg.png' alt='marvel logo' height='50%' width='50%'/>
        <br></br>
        <br></br>
        <br></br>
        <img src='https://svgsilh.com/svg/2747289.svg' alt='lost logo' height='35%' width='35%' />
        </Grid>
        <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png' alt='breaking bad logo' height='25%' width='25%' />
        <br></br>
        <br></br>
        <br></br>
        <img src='http://pngimg.com/uploads/batman/batman_PNG47.png' alt='batmanlogo' height='25%' width='25%' />
        </Grid>
        {/* </Roll> */}
      </Grid>
    </HomeContainer>
  )
}
}




export default Home