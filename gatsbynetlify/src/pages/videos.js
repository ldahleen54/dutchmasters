import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
    <Link to="/">Back to Home Page</Link>
  </Layout>
)
export default Videos
