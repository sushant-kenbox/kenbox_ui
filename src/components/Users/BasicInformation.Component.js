import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import profile from "./../../assets/img/profile.png"
import menu from "./../../assets/img/menu.png"
const BasicInformation = (props) => {

  const employee = {...props};


	// console.log(props);
	return (
		<Fragment>
			<Card> 
				<Accordion.Toggle as={Card.Header} eventKey="0"   className="mb-2">
					<Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
            Basic Information{" "}
						<i className="fa fa-angle-down rotate-icon" />
					</h5>
					</Link>
				</Accordion.Toggle>

				<Accordion.Collapse eventKey="0">
					<Fragment>
						<div>
							{}
							<div
								id="collapseOne1"
								className="collapse show"
								role="tabpanel"
								aria-labelledby="headingOne1"
								data-parent="#accordionEx"
							>
								<div className="card-header1 mb-2" role="tab">
									<h5 className="mb-0">Personal Info</h5>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-2">
											<div className="bg-white profile-hert">
												<table className="table table-sm">
													<tbody>
														<tr>
															<td>
																<div className="profile-pic text-center">
																	<figure>
																		<img
																			src={profile}
																			className="img-fluid"
																			alt="profile"
																		/>
																	</figure>
																	<h5>{props.firstName} {props.lastName}</h5>
																	<span>{props.empCode}</span>
																	<br />
																	{/* <span>{props.designation.name}</span> */}
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="col-md-10">
											<div className="row">
												<div className="col-md-12 bg-prt bg-white">
													{}
													<div className="card">
														{}
														<div
															id="collapseOne1"
															className="collapse show "
															role="tabpanel"
															aria-labelledby="headingOne1"
															data-parent="#accordionEx"
														>
															<div className="card-body">
																<div className="row">
																	<div className="col-md-5">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Title</td>
																					{/* <td>{props.title}</td> */}
																					<td>{{...props.salutation}.name}</td>
																				</tr>
																				<tr>
																					<td>EMP Code: </td>
																					<td>{props.empCode}</td>
																				</tr>
																				<tr>
																					<td>Personal Email ID: </td>
																					<td>{props.email}</td>
																				</tr>
																				<tr>
																					<td>Date of Birth: </td>
																					<td>{props.dob}</td>
																				</tr>
																				<tr>
																					<td>Place of Birth: </td>
																					<td>{props.placeOfBirth}</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																	<div className="col-md-6">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Name:</td>
																					<td>{props.firstName} {props.lastName}</td>
																				</tr>
																				<tr>
																					<td>Gender:</td>
																					{/* <td>{props.gender}</td> */}
																					<td>{{...props.gender}.name}</td>
																				</tr>
																				<tr>
																					<td>Contact No.: </td>
																					<td>{props.mobileNumber}</td>
																				</tr>
																				<tr>
																					<td>Age: </td>
																					<td>{props.age} Years</td>
																				</tr>
																				<tr>
																					<td>Marital Status: </td>
																					<td>{{...props.maritalStatus}.name}</td>
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
								id="collapseOne1"
								className="collapse show "
								role="tabpanel"
								aria-labelledby="headingOne1"
								data-parent="#accordionEx"
							>
								<div className="card-header1 mb-2" role="tab">
									<h5 className="mb-0">Social Security Info</h5>
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
															id="collapseOne1"
															className="collapse show "
															role="tabpanel"
															aria-labelledby="headingOne1"
															data-parent="#accordionEx"
														>
															<div className="card-body">
																<div className="row">
																	<div className="col-md-5">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>ID Type:</td>
																					<td>{props.idType}</td>
																				</tr>
																				<tr>
																					<td>Attachment Document: </td>
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
																	<div className="col-md-6">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Aadhaar Card No.:</td>
																					<td>xxxxxxxxxxxxxx</td>
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
								id="collapseOne1"
								className="collapse show "
								role="tabpanel"
								aria-labelledby="headingOne1"
								data-parent="#accordionEx"
							>
								<div className="card-header1 mb-2" role="tab">
									<h5 className="mb-0">Ethnicity Info</h5>
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
															id="collapseOne1"
															className="collapse show "
															role="tabpanel"
															aria-labelledby="headingOne1"
															data-parent="#accordionEx"
														>
															<div className="card-body">
																<div className="row">
																	<div className="col-md-5">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Religion:</td>
																					{/* <td>{props.religion}</td> */}
																					<td>{{...props.religion}.name}</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																	<div className="col-md-6">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Nationality:</td>
																					<td>{props.nationality}</td>
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
								id="collapseOne1"
								className="collapse show "
								role="tabpanel"
								aria-labelledby="headingOne1"
								data-parent="#accordionEx"
							>
								<div className="card-header1 mb-2" role="tab">
									<h5 className="mb-0">Health Info</h5>
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
															id="collapseOne1"
															className="collapse show "
															role="tabpanel"
															aria-labelledby="headingOne1"
															data-parent="#accordionEx"
														>
															<div className="card-body">
																<div className="row">
																	<div className="col-md-5">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Blood Type:</td>
																					{/* <td>{props.bloodGroup}</td> */}
																					<td>{{...props.bloodGroup}.name}</td>
																				</tr>
																				<tr>
																					<td>Weight: </td>
																					<td>{props.weight}</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																	<div className="col-md-6">
																		<table className="table table-sm accordionText">
																			<tbody>
																				<tr>
																					<td>Height:</td>
																					<td>{props.height}</td>
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

		</Fragment>
	)
}

export default BasicInformation;
