import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import profile from "./../../assets/img/profile.png"
import menu from "./../../assets/img/menu.png"
const BasicInformation = () => {

  //console.log("BasicInformation")
  return (
    <Fragment>
      <Card> 
        <Accordion.Toggle as={Card.Header} eventKey="0"   className="mb-2">
          <Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
            Basic Information{" "}
            <i className="fa fa-angle-down rotate-icon" />
          </h5>
          </Link>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Fragment>
            <div>
              {}
              <div
                id="collapseOne1"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne1"
                data-parent="#accordionEx"
              >
                <div className="card-header1 mb-2" role="tab">
                  <h5 className="mb-0">Personal Info</h5>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="bg-white profile-hert">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <td>
                                <div className="profile-pic text-center">
                                  <figure>
                                    <img
                                      src={profile}
                                      className="img-fluid"
                                      alt="profile"
                                    />
                                  </figure>
                                  <h5>RAVI SINGH</h5>
                                  <span>10098</span>
                                  <br />
                                  <span>Web Designer</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-md-12 bg-prt bg-white">
                          {}
                          <div className="card">
                            {}
                            <div
                              id="collapseOne1"
                              className="collapse show "
                              role="tabpanel"
                              aria-labelledby="headingOne1"
                              data-parent="#accordionEx"
                            >
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-5">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Title</td>
                                          <td>MR</td>
                                        </tr>
                                        <tr>
                                          <td>EMP Code: </td>
                                          <td>0098</td>
                                        </tr>
                                        <tr>
                                          <td>Personal Email ID: </td>
                                          <td>ravisingh@kenbox.in</td>
                                        </tr>
                                        <tr>
                                          <td>Date of Birth: </td>
                                          <td>08-09-1995</td>
                                        </tr>
                                        <tr>
                                          <td>Place of Birth: </td>
                                          <td>New Delhi</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="col-md-6">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Name:</td>
                                          <td>Ravi Singh</td>
                                        </tr>
                                        <tr>
                                          <td>Gender:</td>
                                          <td>Male</td>
                                        </tr>
                                        <tr>
                                          <td>Contact No.: </td>
                                          <td>+91-6864959378</td>
                                        </tr>
                                        <tr>
                                          <td>Age: </td>
                                          <td>27 Years</td>
                                        </tr>
                                        <tr>
                                          <td>Marital Status: </td>
                                          <td>Married</td>
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
                                          <Dropdown.Item href="#" className="dropdown-item">Add</Dropdown.Item>
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
                id="collapseOne1"
                className="collapse show "
                role="tabpanel"
                aria-labelledby="headingOne1"
                data-parent="#accordionEx"
              >
                <div className="card-header1 mb-2" role="tab">
                  <h5 className="mb-0">Social Security Info</h5>
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
                              id="collapseOne1"
                              className="collapse show "
                              role="tabpanel"
                              aria-labelledby="headingOne1"
                              data-parent="#accordionEx"
                            >
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-5">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>ID Type:</td>
                                          <td>Aadhaar Card:</td>
                                        </tr>
                                        <tr>
                                          <td>Attachment Document: </td>
                                          <td>
                                            <input
                                              type="file"
                                              id="myFile"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="col-md-6">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Aadhaar Card No.:</td>
                                          <td>xxxxxxxxxxxxxx</td>
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
                                          <Dropdown.Item href="#" className="dropdown-item">Add</Dropdown.Item>
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
                id="collapseOne1"
                className="collapse show "
                role="tabpanel"
                aria-labelledby="headingOne1"
                data-parent="#accordionEx"
              >
                <div className="card-header1 mb-2" role="tab">
                  <h5 className="mb-0">Ethnicity Info</h5>
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
                              id="collapseOne1"
                              className="collapse show "
                              role="tabpanel"
                              aria-labelledby="headingOne1"
                              data-parent="#accordionEx"
                            >
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-5">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Religion:</td>
                                          <td>Hindu</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="col-md-6">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Nationality:</td>
                                          <td>Indian</td>
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
                                          <Dropdown.Item href="#" className="dropdown-item">Add</Dropdown.Item>
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
                id="collapseOne1"
                className="collapse show "
                role="tabpanel"
                aria-labelledby="headingOne1"
                data-parent="#accordionEx"
              >
                <div className="card-header1 mb-2" role="tab">
                  <h5 className="mb-0">Health Info</h5>
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
                              id="collapseOne1"
                              className="collapse show "
                              role="tabpanel"
                              aria-labelledby="headingOne1"
                              data-parent="#accordionEx"
                            >
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-5">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Blood Type:</td>
                                          <td>AB+</td>
                                        </tr>
                                        <tr>
                                          <td>Weight: </td>
                                          <td>50.60 kg</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="col-md-6">
                                    <table className="table table-sm accordionText">
                                      <tbody>
                                        <tr>
                                          <td>Height:</td>
                                          <td>5' 8"</td>
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
                                          <Dropdown.Item href="#" className="dropdown-item">Add</Dropdown.Item>
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

    </Fragment>
  )
}

export default BasicInformation;
