import React, {Component} from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Footer from './Shared/Footer';

class Blog extends Component {

  render() {

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

    return (
      <>
      <HomeContainer>
        <Typography variant='h2' align='center' style={{marginTop: '100px', paddingBottom: '200px'}}>Coming Soon....</Typography>
      </HomeContainer>
      <Footer />
      </>
    )
  }
}

export default Blog