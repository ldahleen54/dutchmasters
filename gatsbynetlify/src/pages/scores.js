import * as React from "react"
import DataTable from 'react-data-table-component';
import { Link } from "gatsby";
import * as data from "../data/scores.json";
import Table from "../components/table";
import Layout from "../components/layout"
import Seo from "../components/seo"
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
    name: "Block",
    selector: row => row.block
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
  const filterFunction = () => {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let div = document.getElementById("shooterDropdown");
    console.log("called filter function");
    let btn = div.getElementsByTagName("btn");
    for (let i = 0; i < btn.length; i++) {
      let txtValue = btn[i].textContent || btn[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        btn[i].style.display = "";
      } else {
        btn[i].style.display = "none";
      }
    }
  }
  return(
  <Layout>
    <Seo title="Scores" />
  <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="selectShooter" data-bs-toggle="dropdown" aria-expanded="false">
      {data.shooters[shooter].name}
    </button>
    <ul className="dropdown-menu" aria-labelledby="selectShooter" id="shooterDropdown">
      <li><input type="text" placeholder="Search.." id="myInput" onKeyUp={() => filterFunction()} /></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(0)}>Bill A</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(1)}>Brad D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(2)}>Eric D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(3)}>Gregg D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(4)}>Luke D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(5)}>Ryan D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(6)}>Vic D Jr</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(7)}>Vic D Sr</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(8)}>Zach D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(9)}>Mike D</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(10)}>Jon F</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(11)}>Bob J</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(12)}>Todd J</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(13)}>Brian K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(14)}>Dave K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(15)}>Hank K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(16)}>Jack K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(17)}>Jim K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(18)}>John K Jr</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(19)}>John K Sr</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(20)}>Len K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(21)}>Matt K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(22)}>Mike K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(23)}>Paul K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(24)}>Pete K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(25)}>Rich K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(26)}>Chase R</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(27)}>Jim S</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(28)}>Jim S Sr</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(29)}>Gary S</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(30)}>John S</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(31)}>Brian McC</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(32)}>Jake K</btn></li>
      <li><btn className="dropdown-item" onClick={() => setShooter(33)}>Davey D</btn></li>
    </ul>
  </div>
    <h2>Shooter: {data.shooters[shooter].name}</h2>
    <DataTable columns={columns} data={data.shooters[shooter].scores}></DataTable>    
  </Layout>
) }
export default Scores
