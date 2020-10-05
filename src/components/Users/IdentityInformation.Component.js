import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const IdentityInformation = () => {


    //console.log("IdentityInformation")
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6" className="mb-2">
                <Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
                    Identity Information
            <i className="fa fa-angle-down rotate-icon" />
                </h5></Link>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="6">
                <Fragment>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseSeven7"
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

export default IdentityInformation;
