import React,{Fragment} from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const JobEmployments = () => {


    //console.log("Job Employments")
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4"   className="mb-2">
                <Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
                    Job Employments
            <i className="fa fa-angle-down rotate-icon" />
                </h5></Link>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                <Fragment>
                    <div className="profile-gap">
                        {}
                        <div
                            id="collapseFive5"
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

export default JobEmployments;
