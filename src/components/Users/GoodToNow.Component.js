import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const GoodToNow = () => {


    //console.log("GoodToNow")
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8" className="mb-2">
                <Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
                    Good To Now
            <i className="fa fa-angle-down rotate-icon" />
                </h5></Link>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
                <Fragment>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseNine9"
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

export default GoodToNow;
