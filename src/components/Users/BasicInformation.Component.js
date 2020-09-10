import React from "react";
import { Accordion, Card, Dropdown } from "react-bootstrap";
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
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-toggle"
                    variant="nav-link text-primary"
                    id="dropdown-basic">
                    <img src={menu} alt="menu" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item href="/admin/users/profile/edit" className="dropdown-item">Edit</Dropdown.Item>
                    <Dropdown.Item href="/admin/users/profile/add" className="dropdown-item">Add</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default BasicInformation;
