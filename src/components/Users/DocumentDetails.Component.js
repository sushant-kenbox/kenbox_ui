import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const DocumentDetails = () => {


    console.log("Document Details")
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4" className="mb-2">
                <Link className="collapsed"><h5 className="mb-0">
                    Document Details
            <i className="fa fa-angle-down rotate-icon" />
                </h5></Link>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                <Fragment>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseSix6"
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

    )
}

export default DocumentDetails;
