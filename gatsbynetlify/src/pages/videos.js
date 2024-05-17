import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"

const Videos = () => (
  <Layout>
    <Seo title="Videos" />
    <Video 
    videoSrcURL="https://dutchmasters.s3.us-east-2.amazonaws.com/2023/IMG_2928.mp4"
    videoTitle="Brian shooting"
    >      
    </Video>
    <Video
      videoSrcURL="https://www.youtube.com/embed/Z5Y-eRAxNUM"
      videoTitle="Shootout Video 2017"
    >
    </Video>
    <Video
      videoSrcURL="https://www.youtube.com/embed/UJi_SPjGAoA"
      videoTitle="Shootout Video 2013"
    >
    </Video>
    <Link to="/">Back to Home Page</Link>
  </Layout>
)
export default Videos
