import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <img
      src="https://dutchmasters.s3.us-east-2.amazonaws.com/2019/elder_group.jpg"
      alt="Dutchmasters Welcome Picture"
    />
    <p>
      <Link to="/pictures">See More Pictures</Link>
    </p>
  </Layout>
)

export default IndexPage
