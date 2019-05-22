import React, {Component} from 'react';
import { Typography, Grid, Paper, Table, TableBody, TableRow, TableCell} from '@material-ui/core';
import styled from 'styled-components';
import Image from '../Images/JFProfile.jpg';
import Image2 from '../Images/Family.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Divider from '../Images/divider.svg';
import Arrow from '@material-ui/icons/ArrowDownward';
import Footer from './Shared/Footer'; 
import WhatsHot  from '@material-ui/icons/Whatshot';
import Public from '@material-ui/icons/Public';
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';
import {Link} from 'react-router-dom';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';



export default function Home() {
  const screenSize = useMediaQuery('(min-width:800px)');







  const HomeContainer = styled.div`
      background-color: #AEB1BF;
      height: ;
      width: ;
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
      <Grid style={{marginTop: '100px'}} 
      container 
      spacing={24}
      alignContent='center'
      justify='center'
      alignItems='center'
      >
        <Grid item xs={12} style={{marginBottom: '50px'}}>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Typography variant='h2' align='center'>About Me</Typography>
        </ScrollAnimation>
        </Grid>
        <Grid item xs={6}>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <img src={Image2} height='75%' width='75%' alt='Family' style={{borderRadius: '20%'}}/>
        </ScrollAnimation>
        </Grid>
        <Grid item xs={6} align='center'>
        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight'>
        <Typography variant='h4'>
        I am the father of two wonderful children, the husband of a delightful wife for over ten years, and a huge fan of sports and pop culture
        </Typography>
        </ScrollAnimation>  
        </Grid>
        {/* <div>
          <a href='#next' style={{float: 'right', position: 'fixed', bottom: '5em', right: '10em', textDecoration: 'none'}}>
          <ScrollAnimation animateIn='bounce'>
          <Arrow color='primary' /> 
          <Typography variant='body1'>
          Click to Continue
          </Typography>
          </ScrollAnimation>
          </a>
        </div> */}
        <Grid item xs={12} align='center'>
        <img src={Divider} />
        </Grid>
        <Grid item xs={4} align='center' style={{marginTop: '250px'}} id="next">
        <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/Utah_Jazz_wordmark_logo_primary_color.png' alt='Utah Jazz Logo' height='65%' width='65%' />
        </ScrollAnimation>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Utah_Utes_-_U_logo.svg/1121px-Utah_Utes_-_U_logo.svg.png' alt='Utah Utes Logo' height='35%' width='35%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={4} style={{marginTop: '250px'}}>
        <ScrollAnimation animateIn='heartBeat' animateOut='bounceOutDown'>
        <Typography variant='h4' align='center'>
        These are my favorite teams
        </Typography>
        </ScrollAnimation>
        </Grid>
        <Grid item xs={4} align='center' style={{marginTop: '250px'}}>
        <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c9/New_york_jets_alternate_logo.gif' alt='NY Jets Logo' height='45%' width='45%' />
        </ScrollAnimation>
        <br></br>
        <br></br>
        <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/851px-Colorado_Rockies_logo.svg.png' alt='Colorado Rockies Logo' height='25%' width='25%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={12} align='center'>
        <img src={Divider} />
        </Grid>
        <Grid item xs={4} style={{marginTop: '200px'}} align='center'>
        <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
        <Typography variant='h4'>
        Here are some of my favorite pop culture subjects
        </Typography>
        </ScrollAnimation>
        </Grid>
        <Grid item xs={4} style={{marginTop: '200px'}} align='center'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={1000}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/1280px-Marvel_Studios_2016_logo.svg.png' alt='marvel logo' height='50%' width='50%'/>
        </ScrollAnimation>
        <br></br>
        <br></br>
        <br></br>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={3000}>
        <img src='https://svgsilh.com/svg/2747289.svg' alt='lost logo' height='35%' width='35%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={4} style={{marginTop: '200px'}} align='center'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={2000}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png' alt='breaking bad logo' height='25%' width='25%' />
        </ScrollAnimation>
        <br></br>
        <br></br>
        <br></br>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={4000}>
        <img src='http://pngimg.com/uploads/batman/batman_PNG47.png' alt='batmanlogo' height='25%' width='25%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={12} align='center'>
        <img src={Divider} />
        </Grid>
        {/* <br></br>
        <br></br>
        <br></br> */}
        <Grid item xs={12} style={{marginTop: '200px'}} align='center'>
        <ScrollAnimation animateIn='rollIn' animateOut='rollOut'>
        <Typography variant='h4'>
        Developer Tools I build with
        </Typography>
        </ScrollAnimation>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <Grid item xs={3} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={1000}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt='react logo' height='100%' width='100%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={3} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={2000}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png' alt='ruby logo' height='50%' width='50%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={3} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={3000}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' alt='git logo' height='50%' width='50%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={3} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={4000}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mac_OS_wordmark_logo.svg/2500px-Mac_OS_wordmark_logo.svg.png' alt='macos logo' height='80%' width='80%' />
        </ScrollAnimation>
        </Grid>
        <Grid item xs={12} style={{marginTop: '200px'}} align='center'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Typography variant='h4'>Other developer tools I'm familiar with</Typography>
        <br></br>
        <br></br>
        <br></br>
        <Paper elevation={4} style={{width: '750px'}}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                <Typography variant='h6' align='center'>HTML</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>CSS</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Javascript</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <Typography variant='h6' align='center'>SQL</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Command Line</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>jQuery</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <Typography variant='h6' align='center'>ES6</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Redux</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Flux</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <Typography variant='h6' align='center'>Node.js</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>MongoDB</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>VSCode</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <Typography variant='h6' align='center'>Bootstrap</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Semantic-UI</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Material-UI</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <Typography variant='h6' align='center'>Heroku</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Netlify</Typography>
                </TableCell>
                <TableCell>
                <Typography variant='h6' align='center'>Azure</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        </ScrollAnimation>
        </Grid>
        <Grid item xs={12} style={{marginTop: '200px'}}>
        <ScrollAnimation animateIn='fadeIn' >
          <Typography variant='h4' align='center'>Want to know more?</Typography>
          <br></br>
          <br></br>
          <Typography variant='h4' align='center'>Explore these areas to discover more about Jonny</Typography>
        </ScrollAnimation>
        </Grid>
        <br></br>
        <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='bounceInRight'>
          <Link to='/projects' style={{textDecoration: 'none', color: 'black'}}>
          <WhatsHot />
          <Typography variant='h6'>Projects</Typography>
          </Link>
          </ScrollAnimation>
        </Grid>
        <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='bounceInUp'>
        <Link to='/blog' style={{textDecoration: 'none', color: 'black'}}>
          <Public />
          <Typography variant='h6'>Blog</Typography>
          </Link>
          </ScrollAnimation>
        </Grid>
        <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
        <ScrollAnimation animateIn='bounceInLeft'>
        <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
          <PhoneInTalk />
          <Typography variant='h6'>Contact Me</Typography>
          </Link>
          </ScrollAnimation>
        </Grid>
        
        </Grid>
    </HomeContainer>
    <Footer />
    </>
  ) } else {
    return (
      <>
      <HomeMobileContainer>
        <Grid style={{marginTop: '100px'}} 
        container 
        spacing={24}
        alignContent='center'
        justify='center'
        alignItems='center'
        >
          <Grid item xs={12} style={{marginBottom: '50px'}}>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <Typography variant='h4' align='center'>About Me</Typography>
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} align='center'>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <img src={Image2} height='75%' width='75%' alt='Family' style={{borderRadius: '20%'}}/>
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} align='center'>
          <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight'>
          <Typography variant='h6' style={{marginBottom: '100px'}}>
          I am the father of two wonderful children, the husband of a delightful wife for over ten years, and a huge fan of sports and pop culture
          </Typography>
          </ScrollAnimation>  
          </Grid>
          <Grid item xs={12} align='center'>
          <img src={Divider} style={{width: '100px'}} />
          </Grid>
          <Grid item xs={12} style={{marginTop: '150px'}}>
          <ScrollAnimation animateIn='heartBeat' animateOut='bounceOutDown'>
          <Typography variant='h4' align='center'>
          These are my favorite teams
          </Typography>
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} align='center' style={{marginTop: '50px'}} id="next">
          <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/Utah_Jazz_wordmark_logo_primary_color.png' alt='Utah Jazz Logo' height='65%' width='65%' />
          </ScrollAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Utah_Utes_-_U_logo.svg/1121px-Utah_Utes_-_U_logo.svg.png' alt='Utah Utes Logo' height='35%' width='35%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} align='center' style={{marginTop: '40px', marginBottom: '100px'}}>
          <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/c9/New_york_jets_alternate_logo.gif' alt='NY Jets Logo' height='45%' width='45%' />
          </ScrollAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ScrollAnimation animateIn='zoomInUp' animateOut='zoomOutDown'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/851px-Colorado_Rockies_logo.svg.png' alt='Colorado Rockies Logo' height='25%' width='25%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} align='center'>
          <img src={Divider} style={{width: '100px'}} />
          </Grid>
          <Grid item xs={12} style={{marginTop: '50px'}} align='center'>
          <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
          <Typography variant='h4'>
          Here are some of my favorite pop culture subjects
          </Typography>
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} style={{marginTop: '50px'}} align='center'>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/1280px-Marvel_Studios_2016_logo.svg.png' alt='marvel logo' height='50%' width='50%'/>
          </ScrollAnimation>
          <br></br>
          <br></br>
          <br></br>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <img src='https://svgsilh.com/svg/2747289.svg' alt='lost logo' height='35%' width='35%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} style={{marginTop: '40px', marginBottom: '100px'}} align='center'>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png' alt='breaking bad logo' height='25%' width='25%' />
          </ScrollAnimation>
          <br></br>
          <br></br>
          <br></br>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <img src='http://pngimg.com/uploads/batman/batman_PNG47.png' alt='batmanlogo' height='25%' width='25%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} align='center'>
          <img src={Divider} style={{width: '100px'}}/>
          </Grid>
          <Grid item xs={12} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='rollIn' animateOut='rollOut'>
          <Typography variant='h4'>
          Developer Tools I build with
          </Typography>
          </ScrollAnimation>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Grid item xs={6} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={1000}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt='react logo' height='100%' width='100%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={6} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={2000}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png' alt='ruby logo' height='50%' width='50%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={6} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={3000}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' alt='git logo' height='50%' width='50%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={6} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' delay={4000}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mac_OS_wordmark_logo.svg/2500px-Mac_OS_wordmark_logo.svg.png' alt='macos logo' height='80%' width='80%' />
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} style={{marginTop: '200px'}} align='center'>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <Typography variant='h4'>Other developer tools I'm familiar with</Typography>
          <br></br>
          <br></br>
          <br></br>
          <Paper elevation={4}>
            <Table style={{width: '200px'}}>
              <TableBody>
                <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>HTML</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>CSS</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Javascript</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>ES6</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Redux</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>Flux</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Heroku</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>Netlify</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Azure</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>SQL</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Command Line</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>jQuery</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Node.js</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>MongoDB</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>VSCode</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>Bootstrap</Typography>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Typography variant='body1' align='center'>Semantic-UI</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='body1' align='center'>Material-UI</Typography>
                  </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </Paper>
          </ScrollAnimation>
          </Grid>
          <Grid item xs={12} style={{marginTop: '200px'}}>
          <ScrollAnimation animateIn='fadeIn' >
            <Typography variant='h4' align='center'>Want to know more?</Typography>
            <br></br>
            <br></br>
            <Typography variant='h4' align='center'>Explore these areas to discover more about Jonny</Typography>
          </ScrollAnimation>
          </Grid>
          <br></br>
          <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='bounceInRight'>
            <Link to='/projects' style={{textDecoration: 'none', color: 'black'}}>
            <WhatsHot />
            <Typography variant='h6'>Projects</Typography>
            </Link>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='bounceInUp'>
          <Link to='/blog' style={{textDecoration: 'none', color: 'black'}}>
            <Public />
            <Typography variant='h6'>Blog</Typography>
            </Link>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={4} style={{marginTop: '100px'}} align='center'>
          <ScrollAnimation animateIn='bounceInLeft'>
          <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
            <PhoneInTalk />
            <Typography variant='h6'>Contact Me</Typography>
            </Link>
            </ScrollAnimation>
          </Grid>
          
          </Grid>
      </HomeMobileContainer>
      <Footer />
      </>

    )
  }
}




