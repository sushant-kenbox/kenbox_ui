import React, { Component, Fragment } from "react";
import SubHeader from "./../../../components/Common/SubHeader"
import OrganizationComponent from "./../../../components/Users/Announcement.Component"
import search from "./../../../assets/img/search.png"
import shoutm from "./../../../assets/img/shout-m.png"

class OrganizationAnnouncement extends Component {
    render() {
        return (
            <Fragment>
                <SubHeader />
                <section id="profile-section">
                    <div className="container secondary">
                        <br />
                        <h4>
                            <img src={shoutm} alt="shout-m" />
                        Organization Announcement
                    </h4>
                        <div className="col-md-3 search-box-ty text-right">
                            {}
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
                    <OrganizationComponent />
                </section>
            </Fragment>
        );
    }
}

export default OrganizationAnnouncement;
