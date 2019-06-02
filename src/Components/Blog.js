import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Footer from './Shared/Footer';
import butter from '../Extras/butter-client';
import {Link} from 'react-router-dom';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';


// class Blog extends Component {


// state = {
//   meta: {},
//   data: []
// }
// async componentDidMount () {
//   const { match } = this.props
//   let page = match.params.page || 1
//   const resp = await butter.post.list({ page: page, page_size: 5 })
//   this.setState(resp.data)
// }
// render () {
//   const { next_page, previous_page } = this.state.meta

//   const HomeContainer = styled.div`
//       background-color: #AEB1BF;
//       height: ;
//       width: ;
//       padding-right: 10%;
//       padding-left: 10%;
//       position: absolute;
//       padding-bottom: 100px;
//       border-style: solid;
//       border-left-width: 75px;
//       border-left-color: #656773;
//       border-right-width: 75px;
//       border-right-color: #656773;
//       position: relative;
//       `

//   return (
//     <>
//     <HomeContainer>
//       <Typography variant='h2' align='left'style={{marginTop: '50px'}}>&#123;...&#125; the Word</Typography>
//       <br></br>
//       <Typography variant='h6' align='left'>A Blog Powered By</Typography>
//       <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Butter CMS Logo" height='25%' width='25%'/>
//       <br></br>
//       <br></br>
//       {this.state.data.map((post, key) => {
//         return (
//           <div key={key}>
//             <img src={post.featured_image} alt='Post Featured Image' height='350px' width='400px' />
//             <br></br>
//             <br></br>
//             <Link to={`/blog/posts/${post.slug}`} style={{textDecoration: 'none'}}><Typography variant='headline'>{post.title}</Typography></Link>
//             <Typography variant='subheading'>By: {post.author.first_name}</Typography>
//             <Typography variant='subheading'>
//             {post.published}
//             </Typography>
//             <br></br>
//             <Typography variant='body1' dangerouslySetInnerHTML={{ __html: post.body }} style={{height: '200px', witdh: '500px', textOverflow: 'ellipsis', overflow: 'hidden'}}/>
//             <br></br>
//             <br></br>
//             <Link to={`/blog/posts/${post.slug}`} style={{textDecoration: 'none'}}><Typography variant='h6' style={{borderBottom: '4px solid black', paddingBottom: '25px'}}>Click Here to Continue Reading...</Typography></Link>
//             <br></br>
//             <br></br>
//           </div>
//         )
//       })}

//       <br />

//       <div>
//         {previous_page && (
//           <Link to={`/blog/${previous_page}`}>
//             <a>Prev</a>
//           </Link>
//         )}

//         {next_page && (
//           <Link to={`/blog/${next_page}`}>
//             <a>Next</a>
//           </Link>
//         )}
//       </div>
//     </HomeContainer>
//     <Footer />
//     </>
//   )
// }
// }

// export default Blog



export default function Blog(props) {
  const [meta, setMeta] = useState({ meta: {}});
  const [data, setData] = useState({ data: []});
  const screenSize = useMediaQuery('(min-width:800px)');
  const { next_page, previous_page } = meta.meta

  useEffect(() => {
    async function fetchData() {
      const { match } = props
      let page = match.params.page || 1
      const resp = await butter.post.list({ page: page, page_size: 5 })
      setData(resp.data)
      }
    fetchData();
  }, []); 
  
  
  

  
  


  if (screenSize === true) {
    const HomeContainer = styled.div`
      background-color: #AEB1BF;
      padding-right: 10%;
      padding-left: 10%;
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
        {data.data.map((post, key) => {
          return (
            <div key={key}>
              <img src={post.featured_image} alt='Post Featured Image' height='350px' width='400px' />
              <br></br>
              <br></br>
              <Link to={`/blog/posts/${post.slug}`} style={{textDecoration: 'none'}}><Typography variant='headline'>{post.title}</Typography></Link>
              <Typography variant='subheading'>By: {post.author.first_name}</Typography>
              <Typography variant='subheading'>
              {post.published}
              </Typography>
              <br></br>
              <Typography variant='body1' dangerouslySetInnerHTML={{ __html: post.body }} style={{height: '200px', witdh: '500px', textOverflow: 'ellipsis', overflow: 'hidden'}}/>
              <br></br>
              <br></br>
              <Link to={`/blog/posts/${post.slug}`} style={{textDecoration: 'none'}}><Typography variant='h6' style={{borderBottom: '4px solid black', paddingBottom: '25px'}}>Click Here to Continue Reading...</Typography></Link>
              <br></br>
              <br></br>
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
  } else {
    const HomeMobileContainer = styled.div`
      background-color: #AEB1BF;
      padding-right: 10%;
      padding-left: 10%;
      padding-bottom: 100px;
      border-style: solid;
      border-left-width: 25px;
      border-left-color: #656773;
      border-right-width: 25px;
      border-right-color: #656773;
      position: relative;
      `
    return (
      <>
      <HomeMobileContainer>
        <Typography variant='h4' align='left'style={{marginTop: '50px'}}>&#123;...&#125; the Word</Typography>
        <br></br>
        <Typography variant='h6' align='left'>A Blog Powered By</Typography>
        <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Butter CMS Logo" height='25px' width='100px'/>
        <br></br>
        <br></br>
        {data.data.map((post, key) => {
          return (
            <div key={key}>
              <img src={post.featured_image} alt='Post Featured Image' height='150px' width='175px' />
              <br></br>
              <br></br>
              <Link to={`/blog/posts/${post.slug}`} style={{textDecoration: 'none'}}><Typography variant='headline'>{post.title}</Typography></Link>
              <Typography variant='subheading'>By: {post.author.first_name}</Typography>
              <Typography variant='subheading'>
              {post.published}
              </Typography>
              <br></br>
              <Typography variant='body1' dangerouslySetInnerHTML={{ __html: post.body }} style={{height: '200px', witdh: '500px', textOverflow: 'ellipsis', overflow: 'hidden'}}/>
              <br></br>
              <br></br>
              <Link to={`/blog/posts/${post.slug}`} style={{textDecoration: 'none'}}><Typography variant='h6' style={{borderBottom: '4px solid black', paddingBottom: '25px'}}>Click Here to Continue Reading...</Typography></Link>
              <br></br>
              <br></br>
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
      </HomeMobileContainer>
      <Footer />
      </>
    )
  }
}