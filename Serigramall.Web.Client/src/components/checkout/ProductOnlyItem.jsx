import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import { useEffect } from "react";
import CartContext from "../carrito/CartContext";
import "../../styles/checkout.css";

export default function ProductOnlyItem({ item }) {

    const { updateItemAmout } = useContext(CartContext);
    const [total, setTotal] = useState(parseInt(0));

    useEffect(() => {
        setTotal(calculateTotal());
    }, [item]);

    const calculateTotal = () => {

        var serigraphyTotal = calculateSerigraphyPrice(item.amount);
        var totalBeforeTaxes = parseInt(item.basePrice) * parseInt(item.amount);
        var taxes = totalBeforeTaxes * (parseInt(item.baseTax) / 100);
        return totalBeforeTaxes + taxes + serigraphyTotal;
    }

    const calculateSerigraphyPrice = (itemsAmount) => {
        var serigraphyTotal = 0;

        if (item.seri !== undefined) {
            var serigraphyTotalBeforeTaxes = parseInt(item.seri.basePrice) * itemsAmount;
            var serigraphyTaxes = serigraphyTotalBeforeTaxes * (parseInt(item.seri.baseTax) / 100);
            serigraphyTotal = serigraphyTotalBeforeTaxes + serigraphyTaxes;
        }

        return serigraphyTotal;
    }

    const handleAddItem = () => updateItemAmout(item.id, item.amount + 1);
    const handleRemoveItem = () => item.amount > 0 && updateItemAmout(item.id, item.amount - 1);


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
                                <span>Product price: ${item.basePrice}</span>
                            </Row>
                            <Row>
                                <span>Product tax: {item.baseTax}%</span>
                            </Row>
                            <Row>
                                <span className="float-end"><strong>Quantity: </strong>{item.amount}</span>
                            </Row>
                            {
                                item.seri !== undefined &&
                                <>
                                    <hr />
                                    <Row>
                                        <span>Serigraphy Price: ${item.seri.basePrice}</span>
                                    </Row>
                                    <Row>
                                        <span>Serigraphy tax: {item.seri.baseTax}%</span>
                                    </Row>
                                </>
                            }
                            <hr />
                            <Row>
                                <span>Total: $ {total}</span>
                            </Row>
                        </Col>
                        <Col >
                            <span>
                                <Button variant="outline-danger" className="me-2" onClick={handleRemoveItem}><AiOutlineMinusCircle size={20} /></Button>
                                <Button variant="outline-success" onClick={handleAddItem}><AiOutlinePlusCircle size={20} /></Button>
                            </span>
                        </Col>
                    </Row>


                </Container>
            </td>
        </tr>



        // {/* <Row className="mb-2">
        //     <Col >
        //         <img alt="Image" src="/vite.svg" />
        //     </Col>
        //     <Col >
        //         <p>Product Name</p>
        //     </Col>
        // </Row>
        // <Row className="my-2">


        //     <Col>
        //         <p>Price</p>
        //     </Col>
        //     <Col >
        //         <span>200</span>
        //     </Col>
        //     <Col >
        //         <span>
        //             <AiOutlinePlusCircle size={20} className="me-2 cursor" />
        //             <AiOutlineMinusCircle size={20} className="cursor" />
        //         </span>
        //     </Col>
        // </Row> */}

    );
}