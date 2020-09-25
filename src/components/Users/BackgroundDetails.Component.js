import React from "react";
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const BackgroundDetails = () => {


    console.log("Background Details")
    return (
        <Card>
            <Card.Header className="mb-2">
                <Accordion.Toggle as={Card.Header} eventKey="6">
                    <h5 className="mb-0">
                        Background Details
            <i className="fa fa-angle-down rotate-icon" />
                    </h5>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
                <Card.Body>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseEight8"
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

export default BackgroundDetails;
