import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom"
import SubHeader from "./../../../components/Common/SubHeader"
import OrganizationComponent from "./../../../components/Users/Announcement.Component"
import search from "./../../../assets/img/search.png"
import shoutm from "./../../../assets/img/shout-m.png"

class OrganizationAnnouncement extends Component {

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


                    {this.state.admin === true
                        ?
                        <div className="container secondary1">
                            <br />
                            <h4><img src={shoutm} alt="shout-m" />Organization Announcement</h4>
                            <div className="col-md-12 text-right">
                                <form className="form-inline">
                                <input
                                        className="form-control form-control-sm ml-3 w-75"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div class="submit-wrap right">
                                        <Link to="/admin/users/addAnnouncement" className="btn btn-default"> + Add Announcements</Link>
                                    </div>
                                </form>
                                <br /><br />
                            </div>
                        </div>
                        :
                        <div className="container secondary">
                            <br />
                            <h4>
                                <img src={shoutm} alt="shout-m" />
                    Organization Announcement
                </h4>
                            <div className="col-md-3 search-box-ty text-right">

                                <form className="form-inline search-form secondary">
                                    <input
                                        className="form-control form-control-sm ml-3 w-75"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <i>
                                        <img src={search} alt="search" />
                                    </i>
                                </form>
                                <br />
                            </div>
                        </div>

                    }





                    <OrganizationComponent />
                </section>
            </Fragment >
        );
    }
}

export default OrganizationAnnouncement;
