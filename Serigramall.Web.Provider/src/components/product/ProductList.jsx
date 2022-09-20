import { useEffect,useState } from "react";
import ProductItem from './ProductItem'
import  productApi  from '../../services/api/productApi';

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        _getProducts();
    },[]);
  
    function _getProducts() {
        productApi.getAll().then((res) => {
          let arr = _parseProducts(res.results.data);
          setProducts(arr);
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
        <ul id="product-list">
            {products.map((product) => (
                <ProductItem product={product} key={produc.id}/>
            ))}
        </ul>
    );
}
export default ProductList;



/*
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