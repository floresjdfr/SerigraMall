import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'
import { CartProvider } from "../components/product/CartContext";

function Product () {
    return (
        <>
            <div>
                <div >
                    <Header/>
                    <CartProvider>
                        <ProductList/>
                    </CartProvider>
                    
                </div>
            </div>
        </>
    );
}
export default Product;