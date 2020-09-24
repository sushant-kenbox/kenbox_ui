import React from "react";
import { Link } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion'
import profile from "./../../assets/img/profile.png"
import BasicInformation from "./BasicInformation.Component"
import JobInformation from "./JobInformation.Component";
import FamilyInformation from "./FamilyInformation.Component"


const UserProfile = () => {

  console.log("UserProfile")
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 bg-white">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/admin/users/profile"> Profile </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/users/profile"> View </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/users/profile">   History  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-12 bg-prt">
              {}
              <div
                className="accordion md-accordion mt-3"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                <Accordion defaultActiveKey="0">
                  <BasicInformation />
                  <JobInformation/>

                </Accordion>
          
               
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree3"
                    >
                      <h5 className="mb-0">
                        Family Info{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseFour4"
                      aria-expanded="false"
                      aria-controls="collapseFour4"
                    >
                      <h5 className="mb-0">
                        Qualification Info{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseFour4"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour4"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Academic Qualification
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
                                    id="collapseFour4"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingFour4"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Qualification Level:
                                            </td>
                                                <td>10TH </td>
                                              </tr>
                                              <tr>
                                                <td>Specialization:</td>
                                                <td>Science</td>
                                              </tr>
                                              <tr>
                                                <td>Board / Univeristy:</td>
                                                <td>Allahabad</td>
                                              </tr>
                                              <tr>
                                                <td>Final Score: </td>
                                                <td>70% </td>
                                              </tr>
                                              <tr>
                                                <td>Start Date: </td>
                                                <td>07/07/1993 </td>
                                              </tr>
                                              <tr>
                                                <td>Ranking (If Any): </td>
                                                <td>1st Rank in State </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Degree:</td>
                                                <td>MCA</td>
                                              </tr>
                                              <tr>
                                                <td>Name of School:</td>
                                                <td>DAV School</td>
                                              </tr>
                                              <tr>
                                                <td>Course Type:</td>
                                                <td>Full Time</td>
                                              </tr>
                                              <tr>
                                                <td>Score Type:</td>
                                                <td>70%</td>
                                              </tr>
                                              <tr>
                                                <td>End Date:</td>
                                                <td>10/02/1995</td>
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
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseFour4"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour4"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Trainings
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
                                    id="collapseFour4"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingFour4"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Name of Training:</td>
                                                <td>Java Certification </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Name of Organisation:
                                            </td>
                                                <td>HCL</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Duration (No. of days):
                                            </td>
                                                <td>
                                                  01/01/2020 to 07/07/2020
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Name of Sponsored Company:{" "}
                                                </td>
                                                <td>HCL Pvt. Ltd. </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Location of Training:
                                            </td>
                                                <td>Noida Sect-16, UP</td>
                                              </tr>
                                              <tr>
                                                <td>Name of School:</td>
                                                <td>DAV School</td>
                                              </tr>
                                              <tr>
                                                <td>Major Learning:</td>
                                                <td>Java</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingFive5"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseFive5"
                      aria-expanded="false"
                      aria-controls="collapseFive5"
                    >
                      <h5 className="mb-0">
                        Job Employments{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseFive5"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive5"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Employment Info
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
                                    id="collapseFive5"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingFive5"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Experienced Type:</td>
                                                <td>Experienced</td>
                                              </tr>
                                              <tr>
                                                <td>Employee Code:</td>
                                                <td>40009</td>
                                              </tr>
                                              <tr>
                                                <td>Last Designation:</td>
                                                <td>Web Designer</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Service Start Date:{" "}
                                                </td>
                                                <td>01/07/2015 </td>
                                              </tr>
                                              <tr>
                                                <td>Employment Type: </td>
                                                <td>Permanent </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Total no. of promotions
                                              during the stay:{" "}
                                                </td>
                                                <td>2 Years </td>
                                              </tr>
                                              <tr>
                                                <td>Joining CTC: </td>
                                                <td>20k </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Average % growth in CTC
                                              during the stay:{" "}
                                                </td>
                                                <td>20% </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Major Milestones achieved
                                              during stay:{" "}
                                                </td>
                                                <td>Achieve our Goals</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Name of Company:</td>
                                                <td>
                                                  AAB Services Pvt. Ltd.
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Place of Posting/Location:
                                            </td>
                                                <td>Noida ITEch Park</td>
                                              </tr>
                                              <tr>
                                                <td>First Designation:</td>
                                                <td>Web Designer</td>
                                              </tr>
                                              <tr>
                                                <td>Service End Date:</td>
                                                <td>10/08/2020</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Total no. of years of
                                                  stay:
                                            </td>
                                                <td>5 Years, 6 Months</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Major Responsibilities
                                                  handled:
                                            </td>
                                                <td>Team's workflow</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Last Withdrawn CTC:{" "}
                                                </td>
                                                <td>50k </td>
                                              </tr>
                                              <tr>
                                                <td>Reason of Leaving: </td>
                                                <td>Personal Growths</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Major Milestones achieved
                                              during stay:{" "}
                                                </td>
                                                <td>
                                                  Good Project Planning
                                            </td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseSix6"
                      aria-expanded="false"
                      aria-controls="collapseSix6"
                    >
                      <h5 className="mb-0">
                        Document Details{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseSix6"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingSix6"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Document Details
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
                                    id="collapseSix6"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingSix6"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Document Type:</td>
                                                <td>
                                                  Psychometric Test Reports{" "}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Attachment Option:</td>
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
                                                <td>
                                                  Name of the Document:
                                            </td>
                                                <td>Psychometric Test</td>
                                              </tr>
                                              <tr>
                                                <td>Comments:</td>
                                                <td>Individual and Team</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseSeven7"
                      aria-expanded="false"
                      aria-controls="collapseSeven7"
                    >
                      <h5 className="mb-0">
                        Identity Info{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseSeven7"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingSeven7"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Identity Info
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
                                    id="collapseSeven7"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingSeven7"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Country:</td>
                                                <td>India </td>
                                              </tr>
                                              <tr>
                                                <td>Attachment:</td>
                                                <td>
                                                  <input
                                                    type="file"
                                                    id="myFile"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Name as Per Document:
                                            </td>
                                                <td>Passport</td>
                                              </tr>
                                              <tr>
                                                <td>Issue Date: </td>
                                                <td>20/10/2015 </td>
                                              </tr>
                                              <tr>
                                                <td>Place of Issue: </td>
                                                <td>India </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>ID Type:</td>
                                                <td>Passport</td>
                                              </tr>
                                              <tr>
                                                <td>ID Number:</td>
                                                <td>xxxxxxxxxxxx</td>
                                              </tr>
                                              <tr>
                                                <td>Issuing Authority:</td>
                                                <td>
                                                  Ministry of External
                                                  Affairs
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>Expiry Date:</td>
                                                <td>20/05/2025</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseEight8"
                      aria-expanded="false"
                      aria-controls="collapseEight8"
                    >
                      <h5 className="mb-0">
                        Background Details{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseEight8"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingEight8"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Background Details
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
                                    id="collapseEight8"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingEight8"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Crime History (If Any):
                                            </td>
                                                <td>No </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  League Pending Case (If
                                                  Any):
                                            </td>
                                                <td>No</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseNine9"
                      aria-expanded="false"
                      aria-controls="collapseNine9"
                    >
                      <h5 className="mb-0">
                        Good to Know{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseNine9"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingNine9"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Background Details
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
                                    id="collapseNine9"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingNine9"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Extra-Curricular Activity
                                                  Type:
                                            </td>
                                                <td>Sports </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Participation Level:
                                            </td>
                                                <td>Member</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Total no. of camps
                                                  attended for NSS:
                                            </td>
                                                <td>5</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Extra-Curricular Activity:
                                            </td>
                                                <td>Singing</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Total no. of hours for
                                                  NSS:
                                            </td>
                                                <td>5 Hours</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseTen10"
                      aria-expanded="false"
                      aria-controls="collapseTen10"
                    >
                      <h5 className="mb-0">
                        Reward & Recognition{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseTen10"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTen10"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Reward & Recognition
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
                                    id="collapseTen10"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingTen10"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Reward Type:</td>
                                                <td>
                                                  Certificate of
                                              Appreciation{" "}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Description:</td>
                                                <td>
                                                  The person did excellent
                                                  to achieve the goal
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>Date of Award:</td>
                                                <td>08/08/2020</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Reward Reason:</td>
                                                <td>Out-of-Box Thinking</td>
                                              </tr>
                                              <tr>
                                                <td>Awarding Authority:</td>
                                                <td>CEO</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseEleven11"
                      aria-expanded="false"
                      aria-controls="collapseEleven11"
                    >
                      <h5 className="mb-0">
                        Bank Information{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseEleven11"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingEleven11"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Bank Details
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
                                    id="collapseEleven11"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingEleven11"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>No. Salary Account:</td>
                                                <td>1 </td>
                                              </tr>
                                              <tr>
                                                <td>Account No.:</td>
                                                <td>159843014641</td>
                                              </tr>
                                              <tr>
                                                <td>Branch Address:</td>
                                                <td>
                                                  Hero Honda Chowk,
                                                  Gurugram, Haryana - 345468
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>Account Nature: </td>
                                                <td>Salary Account </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Bank Name:</td>
                                                <td>ICICI Bank</td>
                                              </tr>
                                              <tr>
                                                <td>IFSC Code:</td>
                                                <td>ICI24504</td>
                                              </tr>
                                              <tr>
                                                <td>Branch Name:</td>
                                                <td>Hero Honda Chowk</td>
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
                </div>
                {}
                {}
                <div className="card">
                  {}
                  <div
                    className="card-header mb-2"
                    role="tab"
                    id="headingTwo2"
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseTwelve12"
                      aria-expanded="false"
                      aria-controls="collapseTwelve12"
                    >
                      <h5 className="mb-0">
                        Contact Information{" "}
                        <i className="fa fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {}
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseTwelve12"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwelve12"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          Contact Details
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
                                    id="collapseTwelve12"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingTwelve12"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Address Type:</td>
                                                <td>Permanent </td>
                                              </tr>
                                              <tr>
                                                <td>Address Line 2:</td>
                                                <td>
                                                  B-454, New Ashok Nagar
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>State:</td>
                                                <td>Delhi</td>
                                              </tr>
                                              <tr>
                                                <td>Pincode: </td>
                                                <td>110096 </td>
                                              </tr>
                                              <tr>
                                                <td>Contact No.: </td>
                                                <td>+91-8966466453 </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Address Line 1:</td>
                                                <td>
                                                  B-454, New Ashok Nagar
                                            </td>
                                              </tr>
                                              <tr>
                                                <td>Country:</td>
                                                <td>India</td>
                                              </tr>
                                              <tr>
                                                <td>City:</td>
                                                <td>New Delhi</td>
                                              </tr>
                                              <tr>
                                                <td>Attachment:</td>
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
                  <div className="profile-gap">
                    {}
                    <div
                      id="collapseTwelve12"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwelve12"
                      data-parent="#accordionEx"
                    >
                      <div className="card-header1 mb-2" role="tab">
                        <h5 className="mb-0">
                          For Emergency Purpose Only
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
                                    id="collapseTwelve12"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingTwelve12"
                                    data-parent="#accordionEx"
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-5">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Contact Name:</td>
                                                <td>Shiva Singh </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Contact No. Primary:
                                            </td>
                                                <td>+91-8964667434</td>
                                              </tr>
                                              <tr>
                                                <td>Email Id:</td>
                                                <td>xyz@gmail.com</td>
                                              </tr>
                                              <tr>
                                                <td>Address Line 2: </td>
                                                <td>
                                                  B-564, New Ashok Nagar,
                                              New Delhi - 110098{" "}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-md-6">
                                          <table className="table table-sm accordionText">
                                            <tbody>
                                              <tr>
                                                <td>Relationship Type:</td>
                                                <td>Brother</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Contact No. Secondary:
                                            </td>
                                                <td>+91-8964667434</td>
                                              </tr>
                                              <tr>
                                                <td>Address Line 1:</td>
                                                <td>
                                                  B-564, New Ashok Nagar,
                                                  New Delhi - 110098
                                            </td>
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
                </div>
                {} 
              </div>
            </div>
            {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
