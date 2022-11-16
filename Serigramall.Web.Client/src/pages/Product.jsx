import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'
import '../styles/cartStyle.css'
import { CartProvider } from "../components/carrito/CartContext";
import { Cart } from "../components/carrito/Cart";
import ProductProvider from "../contexts/ProductsContext";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useEffect } from "react";

function Product({ productType, ...args }) {
    const container = {
        position: 'relative',
    };
    return (
        <>
            <ProductProvider>
                <div >
                    <Header productType={productType} />
                    <Cart style={container} />
                    <ProductList productType={productType} />

                </div>
            </ProductProvider>
        </>
    );
}
export default Product;