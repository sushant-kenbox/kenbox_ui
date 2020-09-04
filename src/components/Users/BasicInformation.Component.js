import React from "react";
import { Accordion, Card } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const BasicInformation = () => {

  console.log("BasicInformation")
  return (
    <Card>
      <Card.Header className="mb-2">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h5 className="mb-0">
            Basic Information{" "}
            <i className="fa fa-angle-down rotate-icon" />
          </h5>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <div className="row">
            <div className="col-md-5">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Title</td>
                    <td>Mr.</td>
                  </tr>
                  <tr>
                    <td>Emp Name:</td>
                    <td>Ravi Singh</td>
                  </tr>
                  <tr>
                    <td>EMP Code:- </td>
                    <td>TR0025</td>
                  </tr>
                  <tr>
                    <td>Date of Birth: </td>
                    <td>08-09-1995</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Gender:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>Personal Email ID: </td>
                    <td>ravisingh@kenbox.in</td>
                  </tr>
                  <tr>
                    <td>Contact No. </td>
                    <td>+91-6864959378</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-1 btn-section text-right">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn  dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={menu} alt="menu" />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Edit
    </a>
                  <a className="dropdown-item" href="#">
                    Add
    </a>
                </div>
              </div>
            </div>
          </div>

        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default BasicInformation;
