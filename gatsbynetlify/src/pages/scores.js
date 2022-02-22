import * as React from "react"
import DataTable from 'react-data-table-component';
import { Link } from "gatsby";
import * as data from "../data/scores.json";
import Table from "../components/table";
import Layout from "../components/layout"
import Seo from "../components/seo"
// TODO write a unit test for testing the totals and subtotals
const columns = [
  {
    name: "Year",
    selector: row => row.year
  },
  {
    name: "Hogans Alley",
    selector: row => row.hogans
  },
  {
    name: "Speed",
    selector: row => row.speed
  },
  {
    name: "Turkey Shoot",
    selector: row => row.turkey
  },
  {
    name: "Gut Check",
    selector: row => row.gut
  },
  {
    name: "Pistol",
    selector: row => row.pistol
  },
  {
    name: "Skeet",
    selector: row => row.skeet
  },
  {
    name: "Teal",
    selector: row => row.teal
  },
  {
    name: "Trap",
    selector: row => row.trap
  },
  {
    name: "Rabbit",
    selector: row => row.rabbit
  },
  {
    name: "Shotgun",
    selector: row => row.shotgun
  },
  {
    name: "Total",
    selector: row => row.total
  }
];
const Scores = () => { 
  const [shooter, setShooter] = React.useState(0);
  return(
  <Layout>
    <Seo title="Scores" />
  <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="selectShooter" data-bs-toggle="dropdown" aria-expanded="false">
      Select Shooter
    </button>
    <ul className="dropdown-menu" aria-labelledby="selectShooter">
      <li><btn className="dropdown-item" onClick={() => setShooter(0)}>Bill A</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(1)}>Brad D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(2)}>Eric D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(3)}>Gregg D</btn></li>
    </ul>
  </div>
    <h2>Shooter: {data.shooters[shooter].name}</h2>
    <DataTable columns={columns} data={data.shooters[shooter].scores}></DataTable>    
  </Layout>
) }
export default Scores
