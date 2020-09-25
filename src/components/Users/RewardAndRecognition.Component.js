import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const RewardAndRecognition = () => {


    console.log("RewardAndRecognition")
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8" className="mb-2">
                <Link className="collapsed"><h5 className="mb-0">
                    Reward & Recognition
            <i className="fa fa-angle-down rotate-icon" />
                </h5></Link>

            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
                <Fragment>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseTen10"
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

export default RewardAndRecognition;
