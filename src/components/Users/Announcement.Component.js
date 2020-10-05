import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import { ModelBoxEditAnnouncement, ModelBoxDelete } from "./../Model/"
import profile from "./../../assets/img/profile.png"

const OrganizationAnnouncement = () => {
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState("");

    const announcement = [
        { id: '3001', name: 'ABC', date: '27/11/2020', text: `Employee Wellness Meet !<br /> hi everyone` },
        { id: '3002', name: 'XYZ', date: '29/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3003', name: 'PQR', date: '21/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3004', name: 'MNP', date: '22/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3005', name: 'MZP', date: '23/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3006', name: 'MNP', date: '24/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3007', name: 'MLP', date: '25/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3008', name: 'MUP', date: '26/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3009', name: 'MTP', date: '27/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '3010', name: 'MRP', date: '28/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '30011', name: 'MOP', date: '17/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
        { id: '30012', name: 'MWP', date: '07/11/2020', text: `Employee Wellness Meet !<br />hi everyone` },
    ]

    const handleOpenEditModel = (e) => {
        let { name, value } = e.target
        setShow(true);
        setEvent(value === "edit" ? "edit" : "delete");
        //console.log("handleOpenEditModel", value === "edit")
    }
    const handleCloseModel = () => setShow(false);

    return (
        <Fragment>
            {event === "delete" ?
                <ModelBoxDelete show={show} handleCloseModel={handleCloseModel} /> :
                <ModelBoxEditAnnouncement show={show} handleCloseModel={handleCloseModel} />}
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
                        <div className="form-group">
                            <select className="form-control1" name="state1" id="editUpdate" onChange={handleOpenEditModel}>
                                <option value="select">Select</option>
                                <option value="edit">Edit</option>
                                <option value="delete">Delete</option>
                            </select>
                        </div>
                        <table
                            className="table table-striped table-class tableStrip"
                            id="table-id"
                        >
                            <tbody>
                                <tr className="tableHeader">
                                    {/* <th colSpan="2">Name</th> */}
                                    <th><input type="checkbox" /></th>
                                    <th>Date</th>
                                    <th>ID</th>
                                    <th>Organization Announcement</th>
                                </tr>
                                {announcement.map((list, index) => {
                                    return <tr className="row-striped" key={index}>
                                        <td><input type="checkbox" /></td>
                                        {/* <td>
                                            <img src={profile} alt="profile" /> {list.name}
                                        </td> */}
                                        <td>{list.date}</td>
                                        <td>{list.id}</td>
                                        <td>
                                            <Link to="/admin/users/announcementDetails"> {list.text}</Link>
                                        </td>
                                    </tr>


                                })}
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
