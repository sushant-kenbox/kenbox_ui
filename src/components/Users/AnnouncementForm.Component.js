import React from "react";

const AnnouncementForm = ({ show, event, handleCloseModel }) => {
    return (
        <form action="">
            <label htmlFor="announceTitle">Announcement Title <span className="required">*</span></label>
            <input type="text" id="announcementTitle" name="announcementTitle" placeholder="Company Anniversary" required />

            <label htmlFor="announceBody">Announcement Body <span className="required">*</span></label>
            <textarea type="text" id="announcementBody" name="announcementBody" placeholder="Announcement Body" required>
            </textarea>

            <label htmlFor="vDate">Venue Date <span className="required">*</span></label>
            <input type="date" id="venueDate" name="venueDate" placeholder="Announcement Body" required />

            <label htmlFor="announcePlace">Venue Place <span className="required">*</span></label>
            <input type="text" id="venuePlace" name="venuePlace" placeholder="Venue Place" required />

            <label htmlFor="startTime">Start Timing <span className="required">*</span></label>
            <input type="text" id="startTiming" name="startTiming" placeholder="Start Timing" required />

            <label htmlFor="endTime">End Timing <span className="required">*</span></label>
            <input type="text" id="endTiming" name="endTiming" placeholder="End Timing" required />

            <input type="checkbox" id="chkNotifyAll" name="chkNotifyAll" value="" />
            <label htmlFor="chkNotify">Notify All Employees</label><br />

            <label htmlFor="notify">Notify Any Other</label>
            <textarea type="text" id="notifyOther" name="notifyOther" placeholder="Announcement Body">

            </textarea>

            <div className="modal-footer center-button1">
                <button type="button" className="btn btn-default btnColorBlue" data-dismiss="modal" data-toggle="modal" data-target="#updateAnnouncement">Update</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseModel}>Cancel</button>
            </div>
        </form>

    );
}
export default AnnouncementForm
