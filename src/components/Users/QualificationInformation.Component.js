import React,{Fragment} from "react";
import { Link } from "react-router-dom"
import { Accordion, Card, Dropdown } from "react-bootstrap";
import menu from "./../../assets/img/menu.png"
const QualificationInformation = (props) => {

	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="3"   className="mb-2">
				<Link className="collapsed" to="/admin/users/profile"><h5 className="mb-0">
                    Qualification Info
					<i className="fa fa-angle-down rotate-icon" />
				</h5></Link>
			</Accordion.Toggle>

			<Accordion.Collapse eventKey="3">
				<Fragment>
					<div className="profile-gap">
						{}
						<div
							id="collapseFour4"
							role="tabpanel"
							aria-labelledby="headingFour4"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">
                                    Academic Qualification
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
														id="collapseFour4"
														role="tabpanel"
														aria-labelledby="headingFour4"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>
                                                                                    Qualification Level:
																				</td>
																				<td>{props.qualificationLevel}</td>
																			</tr>
																			<tr>
																				<td>Specialization:</td>
																				<td>{props.specialization}</td>
																			</tr>
																			<tr>
																				<td>Board / Univeristy:</td>
																				<td>{props.univeristy}</td>
																			</tr>
																			<tr>
																				<td>Final Score: </td>
																				<td>{props.finalScore}</td>
																			</tr>
																			<tr>
																				<td>Start Date: </td>
																				<td>{props.startDate}</td>
																			</tr>
																			<tr>
																				<td>Ranking (If Any): </td>
																				<td>{props.ranking}</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Degree:</td>
																				<td>{props.degree}</td>
																			</tr>
																			<tr>
																				<td>Name of School:</td>
																				<td>{props.nameOfSchool}</td>
																			</tr>
																			<tr>
																				<td>Course Type:</td>
																				<td>{props.courseType}</td>
																			</tr>
																			<tr>
																				<td>Score Type:</td>
																				<td>{props.scoreType}</td>
																			</tr>
																			<tr>
																				<td>End Date:</td>
																				<td>{props.endDate}</td>
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
					{}
					<div className="profile-gap">
						{}
						<div
							id="collapseFour4"
							role="tabpanel"
							aria-labelledby="headingFour4"
							data-parent="#accordionEx"
						>
							<div className="card-header1 mb-2" role="tab">
								<h5 className="mb-0">
                                    Trainings
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
														id="collapseFour4"
														role="tabpanel"
														aria-labelledby="headingFour4"
														data-parent="#accordionEx"
													>
														<div className="card-body">
															<div className="row">
																<div className="col-md-5">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>Name of Training:</td>
																				<td>{props.nameOfTraining}</td>
																			</tr>
																			<tr>
																				<td>
                                                                                    Name of Organisation:
																				</td>
																				<td>{props.nameOfOrganization}</td>
																			</tr>
																			<tr>
																				<td>
                                                                                    Duration (No. of days):
																				</td>
																				<td>
																					{props.duration}
																				</td>
																			</tr>
																			<tr>
																				<td>
                                                                                    Name of Sponsored Company:{" "}
																				</td>
																				<td>{props.nameOfSponsoredCompany}</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div className="col-md-6">
																	<table className="table table-sm accordionText">
																		<tbody>
																			<tr>
																				<td>
                                                                                    Location of Training:
																				</td>
																				<td>{props.locationOfTraining}</td>
																			</tr>
																			<tr>
																				<td>Name of School:</td>
																				<td>{props.nameOfSchool}</td>
																			</tr>
																			<tr>
																				<td>Major Learning:</td>
																				<td>{props.majorLearning}</td>
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

export default QualificationInformation;
