import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://dutchmasters.s3.us-east-2.amazonaws.com/2019/elder_group.jpg"
  },
  {
    original: "https://dutchmasters.s3.us-east-2.amazonaws.com/2019/younggroupphoto.jpg"
  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ImageGallery items={images} />
    <p>
      <Link to="/pictures">See More Pictures</Link>
    </p>
  </Layout>
)

export default IndexPage
