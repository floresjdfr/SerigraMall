import { useContext, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import CartContext from "../carrito/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import apiOrders from "../../services/api/orderApi";
import { useNavigate } from "react-router-dom";


export default function ModalPaymentMethod({ show, setShow }) {

    const [isTransactionLoading, setIsTransactionLoading] = useState(false);
    const { cartItems, getTotal, deleteAllItems } = useContext(CartContext);
    const { user } = useAuth0();
    const navigate = useNavigate();

    const handleGoBack = () => setShow(false);
    const handleConfirmPayment = (e) => {
        e.preventDefault();
        setIsTransactionLoading(true);
        disableInputs();
        apiOrders.post(getOrder())
            .then((res) => {
                deleteAllItems();
                navigate("/orders");
            })
            .catch((err) => alert(err.message))
            .finally(() => {
                setIsTransactionLoading(false);
                setShow(false);
            })
    }

    const disableInputs = () => {
        document.getElementById("input-card-number").disabled = true;
        document.getElementById("input-card-holder").disabled = true;
        document.getElementById("input-expiration-date").disabled = true;
        document.getElementById("input-cvv").disabled = true;
        document.getElementById("btn-go-back").disabled = true;
        document.getElementById("btn-confirm-payment").disabled = true;
    }

    const getOrder = () => {
        return {
            id: null,
            client: user.sub,
            products: cartItems.map((item) => {
                return {
                    id: item.id,
                    productName: item.productName,
                    description: item.description,
                    image: item.image,
                    quantity: `${item.amount}`,
                    basePrice: parseFloat(item.basePrice),
                    baseTax: parseFloat(item.baseTax),
                    providerId: item.providerID,
                    serigraphy: !item.seri ? null :
                        {
                            id: item.seri.id,
                            productName: item.seri.productName,
                            description: item.seri.description,
                            image: item.seri.image,
                            quantity: `${item.seri.amount}`,
                            basePrice: parseFloat(item.seri.basePrice),
                            providerId: item.seri.providerID,
                            baseTax: parseFloat(item.seri.baseTax),
                        }
                }
            }),
            totalPrice: `${getTotal()}`,
            lastCardDigits: document.getElementById("input-card-number").value.slice(-4),
            orderState: "active"
        }
    }

    return (
        <>
            <Modal
                backdrop="static"
                keyboard={false}
                onHide={handleGoBack}
                show={show}
                onSubmit={handleConfirmPayment}
            >
                <Form>
                    {
                        isTransactionLoading ?
                            <Modal.Header>
                                <span className="lead">Enter Payment Method</span>
                            </Modal.Header>
                            :
                            <Modal.Header closeButton>
                                <span className="lead">Enter Payment Method</span>
                            </Modal.Header>
                    }
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control id="input-card-number" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Card Holder</Form.Label>
                            <Form.Control id="input-card-holder" type="text" placeholder="Enter card holder" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control id="input-expiration-date" type="month" placeholder="Enter expiration date" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control id="input-cvv" type="tel" placeholder="Enter CVV" maxLength="3" required />
                        </Form.Group>
                        <p className="display-6">Total due: <strong>${getTotal()}</strong></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button id="btn-go-back" type="button" variant="outline-secondary" onClick={handleGoBack}>Go Back</Button>
                        <Button id="btn-confirm-payment" className="payment-button" type="submit" variant="outline-success" >
                            {
                                isTransactionLoading &&
                                <Spinner className="me-2" animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            }
                            <span>Confirm Payment</span>
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}