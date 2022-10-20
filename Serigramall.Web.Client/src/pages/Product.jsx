import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'
import { CartProvider } from "../components/carrito/CartContext";
import { Cart } from "../components/carrito/Cart";

function Product () {
    return (
        <>
            <div>
                <div >
                    <Header/>
                    <CartProvider>
                        <Cart/>
                        <ProductList/>                       
                    </CartProvider>
                    
                </div>
            </div>
        </>
    );
}
export default Product;