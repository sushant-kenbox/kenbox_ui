import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const BankDetails = () => {


    //console.log("BankDetails")
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10" className="mb-2">
                <Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
                    Bank Details
            <i className="fa fa-angle-down rotate-icon" />
                </h5></Link>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
                <Fragment>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseEleven11"
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

export default BankDetails;
