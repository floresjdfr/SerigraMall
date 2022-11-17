import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { OrdersContext } from "../../contexts/OrdersContext";
import "../../styles/buttonsStyles.css";

export default function OrderList_IndividualOrder({ item }) {
    const { setSelectedOrder, setShowOrderInformation } = useContext(GlobalContext);

    const handleSelectOrder = () => {
        setSelectedOrder(item);
        setShowOrderInformation(true);
    }

    return (
        <>
            <tr>
                <td>
                    <Container>
                        <Row>

                            <Col>
                                <Row>
                                    <Col>
                                        <span><strong>Order ID:</strong> {item.id}</span>
                                    </Col>
                                    <Col>
                                        <span><strong>Order Date:</strong> {new Date(item.orderDate).toLocaleDateString()}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span><strong>Order Total:</strong> ${item.totalPrice}</span>
                                    </Col>
                                    <Col>
                                        <Button className="custom-button" onClick={handleSelectOrder}>View Order</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                </td>
            </tr>
        </>
    );
}