import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

const ModelBox = ({ show, handleCloseModel, handleShowModel }) => {
    // const [show, setShow] = useState(false);
    // const handleCloseModel = () => setShow(false);
    // const handleShowModel = () => setShow(true);

    console.log("======", show)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleCloseModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModel}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleCloseModel}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelBox