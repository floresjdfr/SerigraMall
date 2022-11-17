import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

const Product = ({ product }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Card className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Img className='text-center' variant="top" src={`data:image/jpeg;base64,${product.image}`} />
            <Card.Body>
                <Card.Title>Precio: ₡{product.basePrice}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Row>
                    <Col ><UpdateProduct product={product} /></Col>
                    <Col ><DeleteProduct product={product} /></Col>
                </Row>
            </Card.Body>
        </Card >
    );
}

export default Product;
/*
<Card.Footer variant ="btn-group bg-light clearfix col-sm-2">
                        <Button variant="primary float-left btn-sm">Editar</Button>
                        <Button variant="danger float-right btn-sm">Eliminar</Button>
                    </Card.Footer>



className='bg-image hover-zoom'
<Card.Img variant="top" src="holder.js/100px180" />

<li className={'${product.done ? "checked" : ""}' }>
{product.productName},
{product.description},
{product.basePrice},
{<img src={`data:image/jpeg;base64,${product.image}`} />}

<span className = "close">X</span>
</li>

{<img src={product.image} alt="" />}
return (
    <li>Product BOTELLA <span class = "close"></span></li>
);
*/