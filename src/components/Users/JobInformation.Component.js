import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const JobInformation = () => {

  //console.log("JobInformation")
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1" className="mb-2">
        <Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
          Job Information{" "}
          <i className="fa fa-angle-down rotate-icon" />
        </h5>
        </Link>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Fragment>
          <div className="profile-gap">
            {}
            <div
              id="collapseTwo2"
              role="tabpanel"
              aria-labelledby="headingTwo2"
              data-parent="#accordionEx"
            >
              <div className="card-header1 mb-2" role="tab">
                <h5 className="mb-0">Position Details</h5>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 bg-prt bg-white">
                        {}
                        <div className="card">
                          {}
                          <div
                            id="collapseTwo2"
                            role="tabpanel"
                            aria-labelledby="headingTwo2"
                            data-parent="#accordionEx"
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-5">
                                  <table className="table table-sm accordionText">
                                    <tbody>
                                      <tr>
                                        <td>Employee Code:</td>
                                        <td>TR0025 </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Group Date of Joining:
                                            </td>
                                        <td>10-04-2012 </td>
                                      </tr>
                                      <tr>
                                        <td>Band:</td>
                                        <td>20K</td>
                                      </tr>
                                      <tr>
                                        <td>Designation: </td>
                                        <td>UI / UX Designer </td>
                                      </tr>
                                      <tr>
                                        <td>Skip Manager:</td>
                                        <td>Dipanshi Singh</td>
                                      </tr>
                                      <tr>
                                        <td>Employment Type:</td>
                                        <td>Permanent</td>
                                      </tr>
                                      <tr>
                                        <td>Employee Category:</td>
                                        <td>IT Software</td>
                                      </tr>
                                      <tr>
                                        <td>Tenure in Group:</td>
                                        <td>Sales Department</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Experience in Group
                                          Company:
                                            </td>
                                        <td>Prajjo Pvt. Ltd.</td>
                                      </tr>
                                      <tr>
                                        <td>Job Type:</td>
                                        <td>IT Manager</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-md-6">
                                  <table className="table table-sm accordionText">
                                    <tbody>
                                      <tr>
                                        <td>Date of Joining:</td>
                                        <td>10-07-2015 </td>
                                      </tr>
                                      <tr>
                                        <td>Office Mail Id: </td>
                                        <td>ravisingh@gmail.com</td>
                                      </tr>
                                      <tr>
                                        <td>Grade: </td>
                                        <td>A Grade</td>
                                      </tr>
                                      <tr>
                                        <td>Reporting Manager:</td>
                                        <td>Johan</td>
                                      </tr>
                                      <tr>
                                        <td>HR Manager: </td>
                                        <td>Shailja Singh</td>
                                      </tr>
                                      <tr>
                                        <td>Employment Status: </td>
                                        <td>Working</td>
                                      </tr>
                                      <tr>
                                        <td>Tenure of Company: </td>
                                        <td>5 Years</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Experience in Company:
                                            </td>
                                        <td>Kenbox Pvt. ltd.</td>
                                      </tr>
                                      <tr>
                                        <td>Total Experience:</td>
                                        <td>7 Years 6 Months </td>
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
                                        <Dropdown.Item href="#" className="dropdown-item">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#" className="dropdown-item">History</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                      {}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-gap">
            {}
            <div
              id="collapseTwo2"
              role="tabpanel"
              aria-labelledby="headingTwo2"
              data-parent="#accordionEx"
            >
              <div className="card-header1 mb-2" role="tab">
                <h5 className="mb-0">Organizational Info</h5>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 bg-prt bg-white">
                        {}
                        <div className="card">
                          {}
                          <div
                            id="collapseTwo2"

                            role="tabpanel"
                            aria-labelledby="headingTwo2"
                            data-parent="#accordionEx"
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-5">
                                  <table className="table table-sm accordionText">
                                    <tbody>
                                      <tr>
                                        <td>Company:</td>
                                        <td>Kenbox Pvt. Ltd. </td>
                                      </tr>
                                      <tr>
                                        <td>Function:</td>
                                        <td>Recruitment </td>
                                      </tr>
                                      <tr>
                                        <td>Department:</td>
                                        <td>Agile Development</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-md-6">
                                  <table className="table table-sm accordionText">
                                    <tbody>
                                      <tr>
                                        <td>Entity: </td>
                                        <td>HCL Technology </td>
                                      </tr>
                                      <tr>
                                        <td>Sub-Function:</td>
                                        <td>Java Developer</td>
                                      </tr>
                                      <tr>
                                        <td>Sub-Department:</td>
                                        <td>Quality Testing</td>
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
                                        <Dropdown.Item href="#" className="dropdown-item">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#" className="dropdown-item">History</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                      {}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-gap">
            {}
            <div
              id="collapseTwo2"
              role="tabpanel"
              aria-labelledby="headingTwo2"
              data-parent="#accordionEx"
            >
              <div className="card-header1 mb-2" role="tab">
                <h5 className="mb-0">Location Info</h5>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 bg-prt bg-white">
                        {}
                        <div className="card">
                          {}
                          <div
                            id="collapseTwo2"
                            role="tabpanel"
                            aria-labelledby="headingTwo2"
                            data-parent="#accordionEx"
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-5">
                                  <table className="table table-sm accordionText">
                                    <tbody>
                                      <tr>
                                        <td>Work Location:</td>
                                        <td>New Delhi </td>
                                      </tr>
                                      <tr>
                                        <td>Region:</td>
                                        <td>India</td>
                                      </tr>
                                      <tr>
                                        <td>State:</td>
                                        <td>Delhi</td>
                                      </tr>
                                      <tr>
                                        <td>Branch: </td>
                                        <td>East Delhi </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-md-6">
                                  <table className="table table-sm accordionText">
                                    <tbody>
                                      <tr>
                                        <td>Country:</td>
                                        <td>India</td>
                                      </tr>
                                      <tr>
                                        <td>Zone:</td>
                                        <td>India West Zone</td>
                                      </tr>
                                      <tr>
                                        <td>District:</td>
                                        <td>East Delhi</td>
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
                                        <Dropdown.Item href="#" className="dropdown-item">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#" className="dropdown-item">History</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                      {}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Fragment>
      </Accordion.Collapse>
    </Card>
  )
}

export default JobInformation;
