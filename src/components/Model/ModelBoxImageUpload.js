import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import uploadImage from "./../../assets/img/uploadImage.png"

export const ModelBoxImageUpload = ({ show, handleCloseModel }) => {
    // const [show, setShow] = useState(false);
    // const handleCloseModel = () => setShow(false);
    // const handleShowModel = () => setShow(true);


    return (
        <>

            <Modal show={show} onHide={handleCloseModel}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="modal-title">
                            Select Profile Photo
						        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={uploadImage} alt="profile pic" className="img-responsive profile-pic upload-button" />
                    <input className="file-upload" type="file" accept="image/*" />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-primary upload-button">
                        Set a profile photo
                    </Button>
                    <Button className="btn btn-default" onClick={handleCloseModel}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    );
}

