import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReactPic from '../../Images/React.png';
import MaterialLogo from '../../Images/Material-UI.png';
import Stencil from '../../Images/StencilImage.png';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';



export default function Footer() {
  const screenSize = useMediaQuery('(min-width:800px)');
  

  if (screenSize == true ){
  
    return (
  <footer style={{
    position: 'absolute', 
    height: '350px',
    width: '100%',
    backgroundColor: '#181D26',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '50px',
    }}>
    
    <Grid 
    container
    spacing={24}
    >
    <Grid item xs={5}>
    <Typography variant='h6' style={{color: 'white'}}>&#9400;2019 Jonny Fluckey
    <br></br>
    <a href="https://www.iubenda.com/privacy-policy/20510818" target='_blank' style={{textDecoration: 'none'}}>Privacy Policy</a>
    <br></br>
    <br></br>
    Built with React <img src={ReactPic} width='10%' height='10%' style={{float: 'unset'}} />
    <br></br>
    <br></br>
    Styled with Material-UI &nbsp; &nbsp; <img src={MaterialLogo} width='5%' height='5%' style={{float: 'unset'}}/>
    <br></br>
    <br></br>
    Blog Powered by: &nbsp; &nbsp; <img src='https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo' width='25%' height='25%' style={{float: 'unset'}}/>
    </Typography>
    </Grid>
    <Grid item xs={2} style={{borderLeft: '4px solid white', height: '200px'}}></Grid>
    <Grid item xs={5}>
    <img src={Stencil} height='80%' width='50%' />
    </Grid>
 
    </Grid>

  </footer>
    )} else {
      return (
        <footer style={{
          position: 'absolute', 
          height: '350px',
          width: '100%',
          backgroundColor: '#181D26',
          paddingRight: '5%',
          paddingLeft: '5%',
          paddingTop: '50px',
          }}>
          
          <Grid 
          container
          spacing={24}
          >
          <Grid item xs={12}>
          <Typography variant='h6' style={{color: 'white'}}>&#9400;2019 Jonny Fluckey
          <br></br>
          <a href="https://www.iubenda.com/privacy-policy/20510818" target='_blank' style={{textDecoration: 'none'}}>Privacy Policy</a>
          <br></br>
          <br></br>
          Built with React <img src={ReactPic} width='10%' height='10%' style={{float: 'unset'}} />
          <br></br>
          <br></br>
          Styled with Material-UI &nbsp; &nbsp; <img src={MaterialLogo} width='5%' height='5%' style={{float: 'unset'}}/>
          <br></br>
          <br></br>
          Blog Powered by: &nbsp; &nbsp; <img src='https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo' width='25%' height='25%' style={{float: 'unset'}}/>
          </Typography>
          </Grid>       
          </Grid>
          </footer>
      )
    }
}