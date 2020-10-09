import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const ContactInformation = (props) => {


	// console.log("ContactInformation")
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="10" className="mb-2">
				<Link className="collapsed" to="/admin/users/profile"> <h5 className="mb-0">
                    Contact Information
					<i className="fa fa-angle-down rotate-icon" />
				</h5></Link>
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="10">
				<Fragment>
					<div className="profile-gap">
						{}
						<div
							id="collapseTwelve12"
							role="tabpanel"
							aria-labelledby="headingTwelve12"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">
                                    Contact Details
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
														id="collapseTwelve12"
														role="tabpanel"
														aria-labelledby="headingTwelve12"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Address Type:</td>
																				<td>{props.addressType}</td>
																			</tr>
																			<tr>
																				<td>Address Line 2:</td>
																				<td>
																					{props.addressLine2 }
																				</td>
																			</tr>
																			<tr>
																				<td>State:</td>
																				<td>{{...props.state}.name}</td>
																			</tr>
																			<tr>
																				<td>Pincode: </td>
																				<td>{props.pincode}</td>
																			</tr>
																			<tr>
																				<td>Contact No.: </td>
																				<td>{props.contactNumber}</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Address Line 1:</td>
																				<td>
																					{props.addressLine1 }
																				</td>
																			</tr>
																			<tr>
																				<td>Country:</td>
																				<td>{{...props.country}.name}</td>
																			</tr>
																			<tr>
																				<td>City:</td>
																				<td>{props.city}</td>
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
					<div className="profile-gap">
						{}
						<div
							id="collapseTwelve12"
							role="tabpanel"
							aria-labelledby="headingTwelve12"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">
                                    For Emergency Purpose Only
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
														id="collapseTwelve12"
														role="tabpanel"
														aria-labelledby="headingTwelve12"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Contact Name:</td>
																				<td>{props.contactName} </td>
																			</tr>
																			<tr>
																				<td>
                                                                                    Contact No. Primary:
																				</td>
																				<td>{props.mobileNumber}</td>
																			</tr>
																			<tr>
																				<td>Email Id:</td>
																				<td>xyz@gmail.com</td>
																			</tr>
																			<tr>
																				<td>Address Line 2: </td>
																				<td>
                                                                                    B-564, New Ashok Nagar,
                                              New Delhi - 110098{" "}
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Relationship Type:</td>
																				<td>Brother</td>
																			</tr>
																			<tr>
																				<td>
                                                                                    Contact No. Secondary:
																				</td>
																				<td>+91-8964667434</td>
																			</tr>
																			<tr>
																				<td>Address Line 1:</td>
																				<td>
                                                                                    B-564, New Ashok Nagar,
                                                                                    New Delhi - 110098
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

export default ContactInformation;
