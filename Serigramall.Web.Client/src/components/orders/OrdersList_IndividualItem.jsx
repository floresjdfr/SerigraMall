import { Card, Col, Container, Row } from "react-bootstrap";

export default function OrderList_IndividualOrder({ item }) {
    return (
        <>
            <tr>
                <td>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                Image
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <span><strong>Order ID:</strong> {item.id}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>Order Date: {item.orderDate}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>Order Total: {item.totalPrice}</span>
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