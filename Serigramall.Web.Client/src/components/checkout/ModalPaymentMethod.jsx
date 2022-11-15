import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CartContext from "../carrito/CartContext";

export default function ModalPaymentMethod({ show, setShow }) {
    const handleGoBack = () => setShow(false);
    const { getTotal } = useContext(CartContext);

    return (
        <>
            <Modal
                backdrop="static"
                keyboard={false}
                onHide={handleGoBack}
                show={show}
                onSubmit={handleGoBack}>
                <Form>
                    <Modal.Header closeButton>
                        Enter Payment Method
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter card number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Card Holder</Form.Label>
                            <Form.Control type="text" placeholder="Enter card holder" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control type="month" placeholder="Enter expiration date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="number" placeholder="Enter CVV" />
                        </Form.Group>
                        <h5>Total to pay: $ {getTotal()}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="outline-secondary" onClick={handleGoBack} >Go Back</Button>
                        <Button type="submit" variant="outline-success" onClick={handleGoBack}>Confirm Payment</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}