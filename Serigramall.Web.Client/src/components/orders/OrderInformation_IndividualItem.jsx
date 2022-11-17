import { Col, Container, Row } from "react-bootstrap";

export default function OrderInformation_IndividualItem({ item }) {
    return (
        <tr>
            <td>
                <Container>
                    <Row className="mb-2">
                        <Col>
                            <img className="checkout-product-image" alt="Image" src={`data:image/jpeg;base64,${item.image}`} />
                        </Col>
                        <Col>
                            <span>{item.productName}</span>
                        </Col>
                        {
                            //In case the product has serigraphy
                            item.seri !== undefined &&
                            <>
                                <Col>
                                    +
                                </Col>
                                <Col>
                                    <img className="checkout-product-image float-end" alt="Image" src={`data:image/jpeg;base64,${item.seri.image}`} />
                                </Col>
                                <Col >
                                    <span>{item.seri.productName}</span>
                                </Col>
                            </>
                        }
                    </Row>
                    <Row className="my-2 ">

                        <Col className="align-self-center">
                            <Row>
                                <span>Product price: ₡{item.basePrice}</span>
                            </Row>
                            <Row>
                                <span>Product tax: {item.baseTax}%</span>
                            </Row>
                            <Row>
                                <span className="float-end"><strong>Quantity: </strong>{item.quantity}</span>
                            </Row>
                            {
                                item.serigraphy &&
                                <>
                                    <Row>
                                        <img className="checkout-product-image" src={`data:image/jpeg;base64,${item.serigraphy.image}`} />
                                    </Row>
                                    <Row>
                                        <span>Serigraphy Price: ₡{item.serigraphy.basePrice}</span>
                                    </Row>
                                    <Row>
                                        <span>Serigraphy tax: {item.serigraphy.baseTax}%</span>
                                    </Row>
                                </>
                            }
                            <hr />
                        </Col>
                        
                    </Row>


                </Container>
            </td>
        </tr>
    )
}