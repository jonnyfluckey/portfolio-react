import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Footer from './Shared/Footer';
import { Link } from 'react-router-dom';

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
text-align: center;
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


const NoMatch = () => (
<>
<HomeContainer>
  <img src='https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307350_960_720.png' alt='404 pic' height='100px' width='100px' style={{marginTop: '50px'}} />
<br></br>
<br></br>
<Typography variant='h6'>Woah There, Something Went Wrong!?</Typography>
<br></br>
<br></br>
<Link to='/home'><Typography variant='h6'>Click Here to Return Home</Typography></Link>
</HomeContainer>
<Footer />
</>
)

export default NoMatch