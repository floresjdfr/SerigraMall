import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import { createContext, useContext, useEffect, useState } from "react";
import ProductItem from './ProductItem';
import productApi, { getProductsByProvider } from '../../services/api/productApi';
import { GlobalContext } from "../../contexts/GlobalContext";
import { ProductsContext } from '../../contexts/ProductsContext';
import Loading from "../utils/Loading";
import { useAuth0 } from '@auth0/auth0-react';

const ProductList = () => {
    const { user } = useAuth0();
    const { setShowToast, setToastHeader, setToastBody, isLoading, setIsLoading } = useContext(GlobalContext);
    const { productsState, setProductsState } = useContext(ProductsContext);

    useEffect(() => {
        setShowToast(false);
        setIsLoading(true);
        _getProducts();
    }, []);

    async function _getProducts() {
        await getProductsByProvider(user.sub)
            .then((response) => { (response === 500) ? throwError() : setProductsState(response.data) })
            .catch((_) => {
                setToastHeader("Error");
                setToastBody("An error ocurred while trying to retrive the requested Items");
                setShowToast(true);

            })
            .finally(() => setIsLoading(false));
    }


    return (
        <Container>
            {isLoading ? <Loading /> :
                productsState.length > 0 ?
                    <Row xs='2' sm='3' md='4' xl='5' className="g-4">
                        {productsState.map((product) => (<ProductItem product={product} key={product.id} />))}
                    </Row> :
                    <h4 className='text-center'>There are no products found.</h4>
            }
        </Container>
    );
}
export default ProductList;