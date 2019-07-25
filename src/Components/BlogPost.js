import React, {useState, useEffect} from 'react'
import butter from '../Extras/butter-client';
import { Helmet } from 'react-helmet';
import { Typography } from '@material-ui/core';
import Footer from './Shared/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import '../Extras/prism.css';
import Prism from 'prismjs';



export default function BlogPost(props) {
  const [data, setData] = useState({ data: {}});
  const screenSize = useMediaQuery('(min-width:800px)');


  useEffect(() => {
    const { match } = props
    async function fetchData() {
      const resp = await butter.post.retrieve(match.params.post)
      setData(resp.data)
    }
    fetchData();
    Prism.highlightAll();
  }, [],
  )


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

    const post = data.data

if (screenSize === true) {
  return (
    <>
    <HomeContainer>
      <Helmet>
        <title>{post.seo_title}</title>
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:title" content={post.seo_title} />
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3&appId=314968622768611&autoLogAppEvents=1"></script>
        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5cecb1f5757f0a83"></script>
      </Helmet>
      <div id="fb-root">
      <Typography variant='h2' align='left'style={{marginTop: '50px'}}>&#123;...&#125; the Word</Typography>
      <br></br>
      <Typography variant='h6' align='left'>A Blog Powered By</Typography>
      <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Butter CMS Logo" height='25%' width='25%'/>
      <br></br>
      <br></br>
      <img src={post.featured_image} alt="Post Image" height='350px' width='450px' style={{marginTop: '50px'}} />
      <br></br>
      <br></br>
      <Typography variant='h4'>{post.title}</Typography>
      <br></br>
      <div class="addthis_inline_share_toolbox"></div>
      <br></br>
      <Typography variant='body1' dangerouslySetInnerHTML={{ __html: post.body }} />
      <br></br>
      <br></br>
      <br></br>
      <Typography variant='h6'>Comments are Welcome Below<br></br>or<br></br></Typography>
      <Link to ='/blog' style={{textDecoration: 'none'}}><Typography variant='h6'>Return Back to Blog</Typography></Link>
      <br></br>
      <div class="fb-comments" data-href="https://www.jonnyfluckey.com" data-width="600" data-numposts="5"></div>
      </div>  
    </HomeContainer>
    <Footer />

      </>
  )
} else {
  return (
    <>
    <HomeMobileContainer>
      <Helmet>
        <title>{post.seo_title}</title>
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:title" content={post.seo_title} />
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3&appId=314968622768611&autoLogAppEvents=1"></script>
        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5cecb1f5757f0a83"></script>
      </Helmet>
      <div id="fb-root">
      <Typography variant='h4' align='left'style={{marginTop: '50px'}}>&#123;...&#125; the Word</Typography>
      <br></br>
      <Typography variant='h6' align='left'>A Blog Powered By</Typography>
      <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Butter CMS Logo" height='25px' width='100px'/>
      <br></br>
      <br></br>
      <img src={post.featured_image} alt="Post Image" height='150px' width='175px' style={{marginTop: '50px'}} />
      <br></br>
      <br></br>
      <Typography variant='headline'>{post.title}</Typography>
      <br></br>
      <div class="addthis_inline_share_toolbox"></div>
      <br></br>
      <Typography variant='body1' dangerouslySetInnerHTML={{ __html: post.body }} />
      <br></br>
      <br></br>
      <br></br>
      <Typography variant='subtitle1'>Comments are Welcome Below<br></br>or<br></br></Typography>
      <Link to ='/blog' style={{textDecoration: 'none'}}><Typography variant='subtitle1'><strong>Return Back to Blog</strong></Typography></Link>
      <br></br>
      <div class="fb-comments" data-href="https://www.jonnyfluckey.com" data-width="600" data-numposts="5"></div>
      </div>
    </HomeMobileContainer>
    <Footer />
      </>
  )
}

}