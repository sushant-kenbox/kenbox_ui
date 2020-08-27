import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

const ModelBoxSuccess = ({ show, handleCloseModel }) => {
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
                    <Modal.Title>User added successfully</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Do you really want to delete these records? This process cannot be undone.</Modal.Body> */}
                <Modal.Footer>
                    <Button style={{ backgroundColor: '#4ECDC4', color: '#FFFFFF' }} onClick={handleCloseModel}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelBoxSuccess