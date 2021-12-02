import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"

const Videos = () => (
  <Layout>
    <Seo title="Pictures" />
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
