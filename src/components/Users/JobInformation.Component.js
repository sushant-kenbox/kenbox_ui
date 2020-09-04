import React from "react";
import { Accordion, Card } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const JobInformation = () => {

  console.log("JobInformation")
  return (
    <Card>
      <Card.Header className="mb-2">
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <h5 className="mb-0">
            Job Information{" "}
            <i className="fa fa-angle-down rotate-icon" />
          </h5>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          <div className="row">
            <div className="col-md-5">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Band</td>
                    <td>20K</td>
                  </tr>
                  <tr>
                    <td>Grade: </td>
                    <td>18k</td>
                  </tr>
                  <tr>
                    <td>Designation </td>
                    <td>Web designer </td>
                  </tr>
                  <tr>
                    <td>Reporting Manager:</td>
                    <td>Shiva Singh</td>
                  </tr>
                  <tr>
                    <td>HR Manager: </td>
                    <td>Dipansi Singh</td>
                  </tr>
                  <tr>
                    <td>Date of Join:</td>
                    <td>20/04-2020 </td>
                  </tr>
                  <tr>
                    <td>Group date of joining:</td>
                    <td>20-04-2018 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Company Name:</td>
                    <td>Kenbox Pvt. ltd.</td>
                  </tr>
                  <tr>
                    <td>Entity:</td>
                    <td>HCL company</td>
                  </tr>
                  <tr>
                    <td>Department: </td>
                    <td>Information Technology</td>
                  </tr>
                  <tr>
                    <td>Employment Type:</td>
                    <td>Permanent</td>
                  </tr>
                  <tr>
                    <td>Employment Status: </td>
                    <td>Working</td>
                  </tr>
                  <tr>
                    <td>Tenure of Company: </td>
                    <td>5 Years 3 Months</td>
                  </tr>
                  <tr>
                    <td>Job Role (one or Many):</td>
                    <td>Web designer, Java Developers </td>
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

export default JobInformation;
