import React from "react";
import Modal from 'react-bootstrap/Modal'
import AnnouncementForm from "./../Users/AnnouncementForm.Component"

export const ModelBoxEditAnnouncement = ({ show, event, handleCloseModel }) => {

    return (
        <>
            <Modal show={show} onHide={handleCloseModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Announcement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                        <section id="profile-section">
                            <div className="col-md-12">
                                <nav className="navbar navbar-custom">
                                    <div className="col-md-12 container left-label">
                                       <AnnouncementForm show={show} handleCloseModel={handleCloseModel} />
                                    </div>
                                </nav>
                            </div>
                        </section>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
