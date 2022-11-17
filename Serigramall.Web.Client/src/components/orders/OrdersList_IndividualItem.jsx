import { Card, Container, Row } from "react-bootstrap";

export default function OrderList_IndividualOrder({item}) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Container>
                        <Row>
                            <h5>Order ID: {item.id}</h5>
                        </Row>
                        <Row>
                            <h5>Order Date: {item.orderDate}</h5>
                        </Row>
                        <Row>
                            <h5>Order Total: {item.totalPrice}</h5>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
}