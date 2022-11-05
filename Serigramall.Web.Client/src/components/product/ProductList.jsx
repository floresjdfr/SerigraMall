import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { useEffect } from "react";
import ProductItem from './ProductItem';
import { getByProductType } from '../../services/api/productApi';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Loading from '../utils/Loading';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductsModal from './ProductsModal';

const ProductList = ({ productType }) => {

    const { isLoading, setLoading } = useContext(GlobalContext);
    const { productsState, setProductsState } = useContext(ProductsContext);

    useEffect(() => {
        _getProducts();
    }, []);

    function _getProducts() {
        setLoading(true);
        getByProductType(productType)
            .then((res) => setProductsState(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }

    return (
        <>
            <ProductsModal />
            <Container>
                {isLoading ? <Loading /> :
                    <Row xs='2' md='4' xl='5' className="g-4">
                        {productsState.map((product) => (
                            <ProductItem product={product} productType={productType} key={product.id} />
                        ))}
                    </Row>
                }
            </Container>
        </>
    );
}
export default ProductList;