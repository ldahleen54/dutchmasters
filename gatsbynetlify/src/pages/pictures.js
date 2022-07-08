import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as objects2006 from "../data/2006s3objects.json"

const Pictures = () => {
  let pictures2006 = objects2006.objects;
  return (
    <Layout>
      <Seo title="Pictures" />
      <nav aria-label="Year navigation">
      <ul class="pagination">
        <li class="page-item"><button class="btn active">Previous</button></li>
        <li class="page-item active "><button class="btn active">2006</button></li>
        <li class="page-item"><button class="btn">2008</button></li>
        <li class="page-item"><button class="btn">2009</button></li>
        <li class="page-item"><button class="btn">2019</button></li>
        <li class="page-item"><button class="btn">Next</button></li>
      </ul>
      </nav>
    <ul className="list-group">
        {pictures2006.map(path => (
          <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
        ))}
      </ul>
      <Link to="/">Back to Home Page</Link>
    </Layout>
      
  );
  
}
export default Pictures
