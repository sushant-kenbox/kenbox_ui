import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import { ModelBoxEditAnnouncement, ModelBoxDelete } from "./../Model/"
import profile from "./../../assets/img/profile.png"




const OrganizationAnnouncement = (props) => {
	
	const announcements = props.data.announcements;  
	console.log("announcements",announcements)

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
								{announcements.map((announcement,index)=> {
									return(
										<tr className="row-striped" key={index}
										>
											<td>
												<img src={profile} alt="profile" /> <Link to="/admin/users/announcementDetails">Admin</Link>
											</td>
											<td>{announcement.announcementDate}</td>
											<td>{announcement.announcementId}</td>
											<td>
												{announcement.subject}
										
											</td>
										</tr>
									)})}
								
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
