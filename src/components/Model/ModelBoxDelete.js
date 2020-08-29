import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

export const ModelBoxDelete = ({ show, handleCloseModel, handleShowModel }) => {
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
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete these records? This process cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModel}>
                        Close
          </Button>
                    <Button variant="danger" onClick={handleCloseModel}>
                        Delete
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
