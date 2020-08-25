import React from "react";
import { Link } from "react-router-dom"
import RightSideBar from "./RightSideBar"
import Chart from "./Chart"

class Main extends React.Component {
  render() {
    return (
      <section id="main-content">
      <section className="wrapper">
        <div className="row">
        <Chart/>
         <RightSideBar/>
        </div>
      </section>
    </section>
    
     
      );
  }
}

export default Main;
