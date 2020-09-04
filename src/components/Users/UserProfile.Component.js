import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import profile from "./../../assets/img/profile.png"
import BasicInformation from "./BasicInformation.Component"
import JobInformation from "./JobInformation.Component";
import FamilyInformation from "./FamilyInformation.Component"


const UserProfile = () => {

  console.log("UserProfile")
  return (
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
                      <h5>RAVI SINGH(0025)</h5>
                      <span>Web Designer</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-12 bg-white">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Profile
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    view
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    History
            </a>
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
                  {}
                  {}
                  <JobInformation />
                  {}
                  {}
                  <FamilyInformation />
                  {}
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
