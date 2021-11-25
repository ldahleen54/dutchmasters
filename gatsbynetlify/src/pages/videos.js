import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"

const Videos = () => (
  <Layout>
    <Seo title="Pictures" />
    <nav aria-label="Year navigation">
    <ul class="pagination">
      <li class="page-item"><button class="btn active">Previous</button></li>
      <li class="page-item active "><button class="btn active">2006</button></li>
      <li class="page-item"><button class="btn">2008</button></li>
      <li class="page-item"><button class="btn">2009</button></li>
      <li class="page-item"><button class="btn">Next</button></li>
    </ul>
    </nav>
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
