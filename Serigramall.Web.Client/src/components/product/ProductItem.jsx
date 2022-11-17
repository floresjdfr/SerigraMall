import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GlobalContext } from '../../contexts/GlobalContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import CartContext from '../carrito/CartContext';

const ProductItem = ({ product, productType, ...args }) => {
    const { addItemToCart,addItemToCartser } = useContext(CartContext);
    const { setShowProductsModal, setSelectedSerigraphy, selectedSerigraphy, selectedProduct, setSelectedProduct } = useContext(ProductsContext);
    const { productScreenTypes } = useContext(GlobalContext);

    const handleOnSelectSerigraphy = () => {
        setSelectedSerigraphy(product);
        setShowProductsModal(true);
    }

    const handleOnSelectProduct = () => {
        setSelectedProduct(product);
        addItemToCartser(product, selectedSerigraphy);
        setShowProductsModal(false);
    }

    return (
        <Card className='card mx-auto' >
            <Card.Header>{product.productName}</Card.Header>
            <Card.Img variant="top" src={`data:image/jpeg;base64,${product.image}`} />

            <Card.Body>
                <Card.Title>Precio: {product.basePrice}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                {
                    productType === productScreenTypes.Serigraphy ?
                        <Button onClick={handleOnSelectSerigraphy}>Use this Serigraphy</Button>
                        : productType === productScreenTypes.NormalProduct ?
                            <Button className="button" onClick={() => addItemToCart(product)}>Add to Cart</Button>
                            : <Button className="button" onClick={handleOnSelectProduct}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    );
}

export default ProductItem;
