import React, {Component} from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Footer from './Shared/Footer';
import butter from '../Extras/butter-client';
import {Link} from 'react-router-dom';

class Blog extends Component {



//   render() {

    

//     return (
//       <>
//       <HomeContainer>
//         <Typography variant='h2' align='center' style={{marginTop: '100px', paddingBottom: '200px'}}>Coming Soon....</Typography>
//       </HomeContainer>
//       <Footer />
//       </>
//     )
//   }
// }

state = {
  meta: {},
  data: []
}
async componentDidMount () {
  const { match } = this.props
  let page = match.params.page || 1

  const resp = await butter.post.list({ page: page, page_size: 10 })
  this.setState(resp.data)
}
render () {
  const { next_page, previous_page } = this.state.meta

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
      <Typography variant='h2' align='left'style={{marginTop: '50px'}}>&#123;...&#125; the Word</Typography>
      <br></br>
      <Typography variant='h6' align='left'>A Blog Powered By</Typography>
      <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Butter CMS Logo" height='25%' width='25%'/>
      <br></br>
      <br></br>
      {this.state.data.map((post, key) => {
        return (
          <div key={key}>
            <Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
          </div>
        )
      })}

      <br />

      <div>
        {previous_page && (
          <Link to={`/blog/${previous_page}`}>
            <a>Prev</a>
          </Link>
        )}

        {next_page && (
          <Link to={`/blog/${next_page}`}>
            <a>Next</a>
          </Link>
        )}
      </div>
    </HomeContainer>
    <Footer />
    </>
  )
}
}

export default Blog