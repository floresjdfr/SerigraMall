import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'
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
                    <Header />
                    <CartProvider style={container}>
                        <Cart style={container} />
                        <ProductList productType={productType} />
                    </CartProvider>
                </div>

            </ProductProvider>
        </>
    );
}
export default Product;