import { useContext, useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { OrdersContext } from "../../contexts/OrdersContext";
import "../../styles/buttonsStyles.css";
import "../../styles/modalStyles.css";
import OrderInformation_IndividualItem from "./OrderInformation_IndividualItem";

export default function OrderInformation_Modal() {


    const { selectedOrder, showOrderInformation, setShowOrderInformation } = useContext(GlobalContext);
    const handleClose = () => setShowOrderInformation(false);

    return (

        <Modal show={showOrderInformation} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header closeButton>
                <Modal.Title>Order Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <span><strong>Order ID:</strong> {selectedOrder && selectedOrder.id}</span>
                        </Col>
                        <Col>
                            <span><strong>Order Date:</strong> {selectedOrder && new Date(selectedOrder.orderDate).toLocaleDateString()}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><strong>Order State:</strong> {selectedOrder && selectedOrder.orderState}</span>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <table borderless striped>
                            <tbody>
                                {
                                    selectedOrder && selectedOrder.products.map((item) => {
                                        return (
                                            <OrderInformation_IndividualItem key={item.id} item={item} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Row>
                    <Row>
                        <Col>
                            <span className="text-start"><strong>Order Total:</strong> ${selectedOrder && selectedOrder.totalPrice}</span>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>

                <Button className="custom-button" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    );
}