import { useContext } from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from './CartContext';
import DeleteProduct from './DeleteProduct';

const Product = ({ product }) => {
    const {addItemToCart} = useContext(CartContext);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
    setIsHovering(false);
    };

    return (
        <Card style={{ width: 'auto' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Img variant="top" src={`data:image/jpeg;base64,${product.image}`}/>
            {isHovering && 
                <Card.Body>
                    <Card.Title>Precio: {product.basePrice}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <button className='button' onClick={() => addItemToCart(product)}>Add to cart</button>                   
                </Card.Body>
            }
        </Card>
    );
}

export default Product;
