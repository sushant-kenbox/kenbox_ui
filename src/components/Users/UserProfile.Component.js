import React from "react";
import { Link } from "react-router-dom"
import Accordion from "react-bootstrap/Accordion"
import BasicInformation from "./BasicInformation.Component"
import JobInformation from "./JobInformation.Component";
import FamilyInformation from "./FamilyInformation.Component"
import QualificationInformation from "./QualificationInformation.Component"
import JobEmployments from "./JobEmployments.Component"
import DocumentDetails from "./DocumentDetails.Component"
import IdentityInformation from "./IdentityInformation.Component"
import BackgroundDetails from "./BackgroundDetails.Component"
import GoodToNow from "./GoodToNow.Component"
import RewardAndRecognition from "./RewardAndRecognition.Component"
import BankDetails from "./BankDetails.Component"
import ContactInformation from "./ContactInformation.Component"
import Loading from "./../../components/Common/Loading"


const UserProfile = (props) => {

	console.log("UserProfile", props)
	const employee = {...props.employee};
	const jobEmployment = {...props.jobEmployment};
	console.log("UserProfile employee", employee)
	console.log("UserProfile job", jobEmployment)


	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-12 bg-white">
							<ul className="nav">
								<li className="nav-item">
									<Link className="nav-link active" to="/admin/users/profile"> Profile </Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/admin/users/profile"> View </Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/admin/users/profile">   History  </Link>
								</li>
							</ul>
						</div>
						<div className="col-md-12 bg-prt">
							{}
							<div
								className="accordion md-accordion mt-3"
								id="accordionEx"
								role="tablist"
								aria-multiselectable="true"
							>
								{props.pending===true? (<Loading/>) :
									(<Accordion defaultActiveKey="0" >
										<BasicInformation {...employee}/>
										<JobInformation {...employee}/>
										<FamilyInformation {...props}/>
										<QualificationInformation {...props}/>
										<JobEmployments {...jobEmployment}/>
										<DocumentDetails {...props}/>
										<IdentityInformation {...props}/>
										<BackgroundDetails {...props}/>
										<GoodToNow {...props}/>
										<RewardAndRecognition {...props}/>
										<BankDetails {...props}/>
										<ContactInformation {...props}/>
									</Accordion>)
								}
               
							</div>
						</div>
						{}
					</div>
				</div>
			</div>
		</div>
	)

}
export default UserProfile;
