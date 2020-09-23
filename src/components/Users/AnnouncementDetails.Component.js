import React, { Fragment } from "react";
import SubHeader from "./../Common/SubHeader"
import profile from "./../../assets/img/profile.png"

const AnnouncementDetails = () => {
    return (
        <Fragment>
             <SubHeader />
            <section id="profile-section">

                <div className="col-md-12">
                    <nav className="navbar navbar-custom">
                        <div className="container">
                            <div className="top-left">
                                <p><img src={profile} alt="profile" /> Admin <br /> 16 September 1:20 PM</p>
                                <div className="bottom-left">
                                    <h5><strong>Company Anniversary</strong></h5>
                                    <p>Hi Everyone !<br />
                                You are an asset to our company, and I hope you'll continue on this path of hard work.<br />
                                We are very proud of you, and we wish you a wonderful work anniversary.</p>
                                    <p>Date: 20 October 2020</p>
                                    <p>Time: 10:30 to 5:00 PM</p>
                                    <p>Venue: Noida GIP Mall</p>
                                    <p>Expiry: Today 5:05 PM &nbsp;&nbsp;&nbsp; Location: Noida</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </Fragment>
    )
}

export default AnnouncementDetails;
