import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FamilyInformation = () => {

  console.log("FamilyInformation")
  return (
    <Card>
      <Card.Header className="mb-2">
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <h5 className="mb-0">
            Family Info
            <i className="fa fa-angle-down rotate-icon" />
          </h5>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
        <div className="profile-gap">
                    {}
                    <div
                      id="collapseThree3"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree3"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Family Details
                      <button className="btn btn-default">Add</button>
                        </h5>
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
                                    id="collapseThree3"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingThree3"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Name:</td>
                                                <td>Radha Singh </td>
                                              </tr>
                                              <tr>
                                                <td>Date of Birth:</td>
                                                <td>01/01/1990</td>
                                              </tr>
                                              <tr>
                                                <td>Mobile No.:</td>
                                                <td>+91-6457775677</td>
                                              </tr>
                                              <tr>
                                                <td>Permanent Address: </td>
                                                <td>
                                                  B-345, New Ashok Nagar,
                                              Delhi - 110069{" "}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Place of Residence:{" "}
                                                </td>
                                                <td>
                                                  B-345, New Ashok Nagar,
                                              Delhi - 110069{" "}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Profession: </td>
                                                <td>Manager </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Total No. of Children:{" "}
                                                </td>
                                                <td>2 </td>
                                              </tr>
                                              <tr>
                                                <td>Second Child DOB: </td>
                                                <td>05/04/2020 </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Relationship Type:</td>
                                                <td>Wife</td>
                                              </tr>
                                              <tr>
                                                <td>Age:</td>
                                                <td>30 Years</td>
                                              </tr>
                                              <tr>
                                                <td>Personal Mail Id:</td>
                                                <td>
                                                  radhasingh@gmail.com
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Residential Address:
                                            </td>
                                                <td>
                                                  B-345, New Ashok Nagar,
                                                  Delhi - 110069
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Medical History (If Any):
                                            </td>
                                                <td>No</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Highest Qualification:
                                            </td>
                                                <td>MBA</td>
                                              </tr>
                                              <tr>
                                                <td>First Child DOB: </td>
                                                <td>10/01/2017 </td>
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
                                              <img
                                                src="img/menu.png"
                                                alt="menu"
                                              />
                                            </button>
                                            <div className="dropdown-menu">
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                Edit
                                          </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                History
                                          </a>
                                            </div>
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
               
        </Card.Body>
      </Accordion.Collapse>
    </Card>

  )
}

export default FamilyInformation;
