import React, { Fragment } from "react";
import AnnouncementForm from "./../Users/AnnouncementForm.Component"

const AddAnnouncement = () => {

    return (
        <Fragment>
            <div class="col-md-12">
                <nav class="navbar navbar-custom">
                    <div class="col-md-10 container left-label">
                        <AnnouncementForm />
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default AddAnnouncement;
