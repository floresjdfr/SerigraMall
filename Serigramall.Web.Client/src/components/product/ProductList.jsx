import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import { useEffect, useState } from "react";
import ProductItem from './ProductItem';
import productApi from '../../services/api/productApi';
import { useContext } from 'react';

const ProductList = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        _getProducts();
    }, []);

    function _getProducts() {
        productApi.getAll().then((res) => {
            //let arr = _parseProducts(res.results.data);
            //let arr = _parseProducts(res);
            setProducts(res.data);
        });
    }

    function _parseProducts(item) {
        return items.map((item) => {
            // Parse item information
            return item;
        });
    }
    function _createProduct(item) {
        productApi.post(item).then((res) => {
            // state logic
        });
    }

    function _updateProduct(item) {
        productApi.patch(item).then((res) => {
            // state logic
        });
    }

    function _removeProduct(id) {
        productApi.remove(id).then((res) => {
            // state logic
        });
    }

    return (        
        <Container>
            <Row xs='2' md='4' xl='5' className="g-4">
                {products.map((product) => (
                    <Col md='4' className='ml-auto'>
                        <ProductItem product={product} key={product.id}/>                        
                    </Col>
                ))}
            </Row>
        </Container>       
    );
}
export default ProductList;



/*
    return (
        <ul id="product-list">
            {products.map((product) => (
                <ProductItem product={product} key={product.id}/>
            ))}
        </ul>
    );

products.map((product) => (
            <Row xs={1} md={2} className="g-4">

                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col md='4' className='ml-auto'>
                        <ProductItem product={product} key={product.id} />
                    </Col>
                ))}
            </Row>
        ))






const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://localhost:44355/api/Product").
        then((res) => {
            return res.json();
        }).then((data) => {
            setProducts(data);
        }).catch((err) => {
            if(err.name === "ERROR"){
                console.log("ERROR fetching data");
            }
        });
    },[]);
    
    return (
        <ul id="product-list">
            {products.map((product) => (
                <ProductItem product={product} key={produc.id}/>
            ))}                       
        </ul>
    );

       return (
        <ul id="product-list">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </ul>
    );

}*/