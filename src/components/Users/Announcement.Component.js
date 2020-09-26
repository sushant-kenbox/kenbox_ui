import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import profile from "./../../assets/img/profile.png"

const OrganizationAnnouncement = () => {
    return (
        <Fragment>
            <div className="col-md-12">
                <nav className="navbar navbar-custom">
                    <div className="container">
                        <h6>Select</h6>
                        <div className="form-group">
                            {" "}
                            {}
                            <select className="form-control1" name="state" id="maxRows">
                                <option value={5000}>Show ALL Rows</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={70}>70</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                        <h6>entries</h6>
                        <table
                            className="table table-striped table-class tableStrip"
                            id="table-id"
                        >
                            <tbody>
                                <tr className="table-warning">
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>ID</th>
                                    <th>Organization Announcement</th>
                                </tr>
                                <tr className="table-secondary">
                                    <td>
                                        <img src={profile} alt="profile" />Admin
                                    </td>
                                    <td>25/10/2020</td>
                                    <td>3001</td>
                                    <td>
                                    <Link to="/admin/users/announcementDetails">  Company Anniversary
                                            <br />
                                            hi everyone</Link>
                                    </td>
                                </tr>
                                <tr className="table-danger">
                                    <td>
                                        <img src={profile} alt="profile" /> Admin
                                    </td>
                                    <td>27/11/2020</td>
                                    <td>3002</td>
                                    <td>
                                        Employee Wellness Meet !<br />
                                            hi everyone
                                            </td>
                                </tr>
                                <tr className="table-success">
                                    <td>
                                        <img src={profile} alt="profile" /> Admin
                                    </td>
                                    <td>27/12/2020</td>
                                    <td>3003</td>
                                    <td>
                                        Birthday Celebration Party
                                            <br />
                                            hi everyone
                                    </td>
                                </tr>
                                <tr className="table-secondary">
                                    <td>
                                        <img src={profile} alt="profile" /> Admin
                                            </td>
                                    <td>25/10/2020</td>
                                    <td>3001</td>
                                    <td>
                                        Company Anniversary
                                            <br />
                                            hi everyone
                                    </td>
                                </tr>
                                <tr className="table-danger">
                                    <td>
                                        <img src={profile} alt="profile" /> Admin
                                    </td>
                                    <td>27/11/2020</td>
                                    <td>3002</td>
                                    <td>
                                        Employee Wellness Meet !<br />
                                            hi everyone
                                    </td>
                                </tr>
                                <tr className="table-success">
                                    <td>
                                        <img src={profile} alt="profile" /> Admin
                                    </td>
                                    <td>27/12/2020</td>
                                    <td>3003</td>
                                    <td>
                                        Birthday Celebration Party
                                            <br />
                                            hi everyone
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {}
                        <div className="pagination-container">
                            <nav>
                                <ul className="pagination">
                                    <li data-page="prev">
                                        <span>
                                            {" "}
                        Previous <span className="sr-only">(current)</span>
                                        </span>
                                    </li>
                                    {}
                                    <li data-page="next" id="prev">
                                        <span>
                                            {" "}
                                             Next <span className="sr-only">(current)</span>
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>

    )
}

export default OrganizationAnnouncement;
