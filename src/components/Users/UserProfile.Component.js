import React from "react";
import { Link } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion'
import profile from "./../../assets/img/profile.png"
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




const UserProfile = () => {

  console.log("UserProfile")
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
                <Accordion defaultActiveKey="0">
                  <BasicInformation />
                  <JobInformation/>
                  <FamilyInformation/>
                  <QualificationInformation/>
                  <JobEmployments/>
                  <DocumentDetails/>
                  <IdentityInformation/>
                  <BackgroundDetails/>
                  <GoodToNow/>
                  <RewardAndRecognition/>
                  <BankDetails/>
                  <ContactInformation/>

                </Accordion>
 
               
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
