import React from "react";
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const QualificationInformation = () => {


    console.log("QualificationInformation")
    return (
        <Card>
            <Card.Header className="mb-2">
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h5 className="mb-0">
                    Qualification Info
            <i className="fa fa-angle-down rotate-icon" />
                    </h5>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseFour4"
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
                    {}
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseFour4"
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

                </Card.Body>
            </Accordion.Collapse>
        </Card>

    )
}

export default QualificationInformation;
