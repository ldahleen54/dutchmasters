import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as objects2006 from "../data/2006s3objects.json"
import * as objects2008 from "../data/2008s3objects.json"
import * as objects2009 from "../data/2009s3objects.json"
import * as objects2019 from "../data/2019s3objects.json"
import * as objects2023 from "../data/2023s3objects.json"
import { Gallery } from "react-grid-gallery"


const pictureYears = ["2006", "2008", "2009", "2019", "2023"]
const s3BucketPrefix = "https://dutchmasters.s3.us-east-2.amazonaws.com/"

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.handle2006Click = this.handle2006Click.bind(this);
    this.handle2008Click = this.handle2008Click.bind(this);
    this.handle2009Click = this.handle2009Click.bind(this);
    this.handle2019Click = this.handle2019Click.bind(this);
    this.handle2023Click = this.handle2023Click.bind(this);
    this.state = { 
      currentPictureIndex: 4,
      currentPictureYear: "2023"
    };
  }

  /* Handlers */
  handle2006Click = () => {
    this.setState({ 
      currentPictureIndex: 0,
      currentPictureYear: "2006"
    })
  }

  handle2008Click = () => {
    this.setState({ 
      currentPictureIndex: 1,
      currentPictureYear: "2008"
    })
  }

  handle2009Click = () => {
    this.setState({ 
      currentPictureIndex: 2,
      currentPictureYear: "2009"
    })
  }

  handle2019Click = () => {
    this.setState({
      currentPictureIndex: 3,
      currentPictureYear: "2019"
    })
  }

  handle2023Click = () => {
    this.setState({
      currentPictureIndex: 4,
      currentPictureYear: "2023"
    })
  }

  handleNextClick = () => {
    let nextIndex = this.state.currentPictureIndex + 1;
    if (nextIndex < pictureYears.length) {
      this.setState({
        currentPictureIndex: nextIndex,
        currentPictureYear: pictureYears[nextIndex]
      })
    }    
  }

  handlePreviousClick = () => {
    console.log("handled previous click")
    let nextIndex = this.state.currentPictureIndex - 1;
    if (nextIndex >= 0) {
      this.setState({
        currentPictureIndex: nextIndex,
        currentPictureYear: pictureYears[nextIndex]
      })
    }    
  }


  PictureGroup = (props) => {
    if(props.year === "2006") {
      let images = []
      images = objects2006.objects.map(path => {
          return {
            src: "https://dutchmasters.s3-us-east-2.amazonaws.com/" + path,
            width: 2000,
            height: 1000
          }
        }
      );
      return (<Gallery images={images} />);
      return (
        <ul>
          {objects2006.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </ul>        
      )    
    } else if(props.year === "2008") {
      return (
        <div>
          {objects2008.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </div>
      )
    } else if(props.year === "2009") {
      return (
        <div>
          {objects2009.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </div>
      )
    } else if (props.year === "2019") {
      return (
        <div>
          {objects2019.objects.map(path => (
            <li key={path}>
              <img className="list-group-item list-group-item-primary" src={"https://dutchmasters.s3.us-east-2.amazonaws.com/" + path}/>
            </li>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          {objects2023.objects.map(path => (
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
      <li>
        <button onClick={this.handle2006Click} className="btn btn-dark">
         2006
        </button>
      </li>      
    );
  }

  Button2008 = (props) => {
    return (
      <li>
        <button onClick={this.handle2008Click} className="btn btn-dark">
         2008
        </button>
      </li>
    );
  }

  Button2009 = (props) => {
    return (
      <li>
        <button onClick={this.handle2009Click} className="btn btn-dark">
         2009
        </button>
      </li>      
    );
  }

  Button2019 = (props) => {
    return (
      <li>
        <button onClick={this.handle2019Click} className="btn btn-dark">
         2019
        </button>
      </li>
    );
  }

  Button2023 = (props) => {
    return (
      <li>
        <button onClick={this.handle2023Click} className="btn btn-dark">
         2023
        </button>
      </li>
    );
  }

  ButtonNext = (props) => {
    return (
      <li>
        <button onClick={this.handleNextClick} className="btn btn-dark">
          Next
        </button>
      </li>
    )
  }
  
  ButtonPrevious = (props) => {
    return (
      <li>
        <button onClick={this.handlePreviousClick} className="btn btn-dark">
          Previous
        </button>
      </li>
    )
  }

  render() {
    return (
      <Layout>
        <Seo title="Pictures" />
        <nav aria-label="Year navigation">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <ul className="pagination">
              <this.ButtonPrevious />
              <this.Button2006 />
              <this.Button2008 />
              <this.Button2009 />
              <this.Button2019 />
              <this.Button2023 />
              <this.ButtonNext />
            </ul>
          </div>
          <h3>
            {this.state.currentPictureYear}
          </h3>          
        </nav>
      { this.state.currentPictureYear === "2006" ? <this.PictureGroup year="2006"/> : null }
      { this.state.currentPictureYear === "2008" ? <this.PictureGroup year="2008"/> : null }
      { this.state.currentPictureYear === "2009" ? <this.PictureGroup year="2009"/> : null }
      { this.state.currentPictureYear === "2019" ? <this.PictureGroup year="2019"/> : null }
      { this.state.currentPictureYear === "2023" ? <this.PictureGroup year="2023"/> : null }
        <Link to="/">Back to Home Page</Link>
      </Layout>
    );  
  }
}
export default Pictures
