import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const JobInformation = (props) => {

	//console.log("JobInformation")
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="1" className="mb-2">
				<Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
          Job Information{" "}
					<i className="fa fa-angle-down rotate-icon" />
				</h5>
				</Link>
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="1">
				<Fragment>
					<div className="profile-gap">
						{}
						<div
							id="collapseTwo2"
							role="tabpanel"
							aria-labelledby="headingTwo2"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">Position Details</h5>
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
														id="collapseTwo2"
														role="tabpanel"
														aria-labelledby="headingTwo2"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Employee Code:</td>
																				<td>{props.empCode}</td>
																			</tr>
																			<tr>
																				<td>
                                          Group Date of Joining:
																				</td>
																				<td>{props.groupDateOfJoining}</td>
																			</tr>
																			<tr>
																				<td>Band:</td>
																				<td>{{...props.band}.name}</td>
																			</tr>
																			<tr>
																				<td>Designation: </td>
																				<td>{{...props.designation}.name}</td>
																			</tr>
																			<tr>
																				<td>Skip Manager:</td>
																				<td>{props.skipManager}</td>
																			</tr>
																			<tr>
																				<td>Employment Type:</td>
																				<td>{{...props.employmentType}.name}</td>
																			</tr>
																			<tr>
																				<td>Employee Category:</td>
																				<td>{props.employeeCategory}</td>
																			</tr>
																			<tr>
																				<td>Tenure in Group:</td>
																				<td>{props.tenureInGroup}</td>
																			</tr>
																			<tr>
																				<td>
                                          Experience in Group
                                          Company:
																				</td>
																				<td>Prajjo Pvt. Ltd.</td>
																			</tr>
																			<tr>
																				<td>Job Type:</td>
																				<td>{props.jobType}</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Date of Joining:</td>
																				<td>{props.dateOfJoining}</td>
																			</tr>
																			<tr>
																				<td>Office Mail Id: </td>
																				<td>{props.email}</td>
																			</tr>
																			<tr>
																				<td>Grade: </td>
																				<td>{{...props.grade}.name}</td>
																			</tr>
																			<tr>
																				<td>Reporting Manager:</td>
																				<td>{{...props.reportingManager}.name}</td>
																			</tr>
																			<tr>
																				<td>HR Manager: </td>
																				<td>{{...props.hrManager}.name}</td>
																			</tr>
																			<tr>
																				<td>Employment Status: </td>
																				<td>{props.employmentStatus}</td>
																			</tr>
																			<tr>
																				<td>Tenure of Company: </td>
																				<td>{props.tenureOfCompany}</td>
																			</tr>
																			<tr>
																				<td>
                                          Experience in Company:
																				</td>
																				<td>{props.experienceInCompany}</td>
																			</tr>
																			<tr>
																				<td>Total Experience:</td>
																				<td>{props.experience}</td>
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
					<div className="profile-gap">
						{}
						<div
							id="collapseTwo2"
							role="tabpanel"
							aria-labelledby="headingTwo2"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">Organizational Info</h5>
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
														id="collapseTwo2"

														role="tabpanel"
														aria-labelledby="headingTwo2"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Company:</td>
																				<td>{{...props.company}.name}</td>
																			</tr>
																			<tr>
																				<td>Function:</td>
																				<td>{{...props.function}.name}</td>
																			</tr>
																			<tr>
																				<td>Department:</td>
																				<td>{{...props.department}.name}</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Entity: </td>
																				<td>{props.entity}</td>
																			</tr>
																			<tr>
																				<td>Sub-Function:</td>
																				<td>{{...props.subFunction}.name}</td>
																			</tr>
																			<tr>
																				<td>Sub-Department:</td>
																				<td>{{...props.subDepartment}.name}</td>
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
					<div className="profile-gap">
						{}
						<div
							id="collapseTwo2"
							role="tabpanel"
							aria-labelledby="headingTwo2"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">Location Info</h5>
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
														id="collapseTwo2"
														role="tabpanel"
														aria-labelledby="headingTwo2"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Work Location:</td>
																				<td>{props.workLocation}</td>
																			</tr>
																			<tr>
																				<td>Region:</td>
																				<td>{{...props.region}.name}</td>
																			</tr>
																			<tr>
																				<td>State:</td>
																				<td>{{...props.state}.name}</td>
																			</tr>
																			<tr>
																				<td>Branch: </td>
																				<td>{props.branch}</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Country:</td>
																				<td>{{...props.country}.name}</td>
																			</tr>
																			<tr>
																				<td>Zone:</td>
																				<td>{props.zone}</td>
																			</tr>
																			<tr>
																				<td>District:</td>
																				<td>{props.district}</td>
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

export default JobInformation;
