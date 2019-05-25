import React from 'react'
import butter from '../Extras/butter-client';
import { Helmet } from 'react-helmet';
import { Typography } from '@material-ui/core';
import Footer from './Shared/Footer';
import styled from 'styled-components';

export default class extends React.Component {
  state = {
    data: {}
  }
  async componentDidMount () {
    const { match } = this.props
    const resp = await butter.post.retrieve(match.params.post)
    this.setState(resp.data)
  }
  render () {
    const post = this.state.data

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
        <Helmet>
          <title>{post.seo_title}</title>
          <meta name='description' content={post.meta_description} />
          <meta name='og:image' content={post.featured_image} />
        </Helmet>
        <Typography variant='h1'>{post.title}</Typography>
        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: post.body }} />
      </HomeContainer>
        <Footer />
        </>
    )
  }
}