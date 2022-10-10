import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import { createContext, useContext, useEffect, useState } from "react";
import ProductItem from './ProductItem';
import productApi from '../../services/api/productApi';
import { GlobalContext } from "../../contexts/GlobalContext";
import Loading from "../utils/Loading";

const ProductList = () => {
    const [productsState, setProductsState] = useState([])
    const { setShowToast, setToastHeader, setToastBody } =
        useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        setShowToast(false);
        setIsLoading(true);
        _getProducts();
    }, []);

    async function _getProducts() {
        await productApi.getAll()
            .then((response) => {(response === 500) ?  throwError(): setProductsState(response.data)})
            .catch((_) => {
                setToastHeader("Error");
                setToastBody("An error ocurred while trying to retrive the requested Items");
                setShowToast(true);
                setIsLoading(false);
            });
        setIsLoading(false);
    }


    return (
        <Container>
            {isLoading ? <Loading /> :
                <Row xs='2' md='4' xl='5' className="g-4">
                    {productsState.map((product) => (
                        <Col md='4' className='ml-auto'>
                            <ProductItem product={product} key={product.id} />
                        </Col>
                    ))}
                </Row>
            }
        </Container>
    );
}
export default ProductList;