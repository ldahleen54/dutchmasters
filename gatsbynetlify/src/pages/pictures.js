import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as objects2006 from "../data/2006s3objects.json"
import * as objects2008 from "../data/2008s3objects.json"
import * as objects2009 from "../data/2009s3objects.json"
import * as objects2019 from "../data/2019s3objects.json"


class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.handle2006Click = this.handle2006Click.bind(this);
    this.handle2008Click = this.handle2008Click.bind(this);
    this.handle2009Click = this.handle2009Click.bind(this);
    this.handle2019Click = this.handle2019Click.bind(this);
    this.state = { 
      showPictureGroup2006: false, 
      showPictureGroup2008: false,
      showPictureGroup2009: false,
      showPictureGroup2019: true 
    };
  }

  /* Handlers */
  handle2006Click = () => {
    this.setState({ 
      showPictureGroup2006: true, 
      showPictureGroup2008: false,
      showPictureGroup2009: false,
      showPictureGroup2019: false 
    })
  }

  handle2008Click = () => {
    this.setState({ 
      showPictureGroup2006: false, 
      showPictureGroup2008: true,
      showPictureGroup2009: false,
      showPictureGroup2019: false 
    })
  }

  handle2009Click = () => {
    console.log("activated 2009")
    this.setState({ 
      showPictureGroup2006: false, 
      showPictureGroup2008: false,
      showPictureGroup2009: true,
      showPictureGroup2019: false 
    })
  }

  handle2019Click = () => {
    this.setState({ 
      showPictureGroup2006: false, 
      showPictureGroup2008: false,
      showPictureGroup2009: false,
      showPictureGroup2019: true 
    })
  }

  PictureGroup = (props) => {
    if(props.year == "2006") {
      return (
        <ul>
          {objects2006.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </ul>        
      )    
    } else if(props.year == "2008") {
      return (
        <div>
          {objects2008.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </div>
      )
    } else if(props.year == "2009") {
      return (
        <div>
          {objects2009.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          {objects2019.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </div>
      )
    }
  }
  
  /* Buttons */
  Button2006 = (props) => {
    return (
      <button onClick={this.handle2006Click}>
        2006
      </button>
    );
  }

  Button2008 = (props) => {
    return (
      <button onClick={this.handle2008Click}>
        2008
      </button>
    );
  }

  Button2009 = (props) => {
    return (
      <button onClick={this.handle2009Click}>
        2009
      </button>
    );
  }

  Button2019 = (props) => {
    return (
      <button onClick={this.handle2019Click}>
        2019
      </button>
    );
  }

  render() {
    return (
      <Layout>
        <Seo title="Pictures" />
        <nav aria-label="Year navigation">
          <ul className="pagination">
            <li className="page-item"><button className="btn active">Previous</button></li>
            <this.Button2006 />
            <this.Button2008 />
            <this.Button2009 />
            <this.Button2019 />
            <li className="page-item"><button className="btn">Next</button></li>
          </ul>
        </nav>
      { this.state.showPictureGroup2006 ? <this.PictureGroup year="2006"/> : null }
      { this.state.showPictureGroup2008 ? <this.PictureGroup year="2008"/> : null }
      { this.state.showPictureGroup2009 ? <this.PictureGroup year="2009"/> : null }
      { this.state.showPictureGroup2019 ? <this.PictureGroup year="2019"/> : null }
        <Link to="/">Back to Home Page</Link>
      </Layout>
    );  
  }
}
export default Pictures
