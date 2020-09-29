import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom"
import SubHeader from "./../../../components/Common/SubHeader"
import shoutm from "./../../../assets/img/shout-m.png"
import profile from "./../../../assets/img/profile.png"
import AddAnnouncementComponent from "./../../../components/Users/AddAnnouncement.Component"
class AddAnnouncement extends Component {

    constructor(props) {
        super(props)

        this.state = {
            admin: true
        }
    }
    render() {
        return (
            <Fragment>
                <SubHeader />
                <section id="profile-section">

                    <div className="container secondary1">
                        <br />
                        <h4><img src={shoutm} alt="shout-m" />Organization Announcement</h4>
                        <div className="col-md-12 text-right">
                            <span className="form-inline">
                                <div class="submit-wrap right">
                                    <Link to="/admin/users/addAnnouncement" className="btn btn-default"> + Add Announcements</Link>
                                </div>
                            </span>
                            <br /><br />
                        </div>
                    </div>

                    <AddAnnouncementComponent />
                </section>
            </Fragment >
        );
    }
}

export default AddAnnouncement;
