import { useContext, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CartContext from "../components/carrito/CartContext";
import ModalPaymentMethod from "../components/checkout/ModalPaymentMethod";
import ProductOnlyItem from "../components/checkout/ProductOnlyItem";

export default function Checkout() {
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const { cartItems, getTotal } = useContext(CartContext);

    const handleConfirmOrder = () => setShowPaymentMethod(true);

    return (
        <>
            <Container>
                <h1 className="mb-4">Order Checkout</h1>
                <Table  className="styled-table"borderless striped>
                    <tbody>
                        {
                            cartItems.map((item, index) => (
                                <ProductOnlyItem key={index} item={item} />
                            ))
                        }
                    </tbody>
                </Table>


                <Row>
                    <Col>
                        <h3>Total</h3>
                    </Col>
                    <Col>
                        <h3 className="float-end">$ {getTotal()}</h3>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-success" className="Button my-2 float-end" onClick={handleConfirmOrder} >Confirm Order</Button>
                    </Col>
                </Row>

            </Container>
            <ModalPaymentMethod show={showPaymentMethod} setShow={setShowPaymentMethod} />
        </>
    );
}