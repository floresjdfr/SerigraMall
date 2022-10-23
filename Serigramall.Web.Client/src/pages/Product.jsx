import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'
import { CartProvider } from "../components/carrito/CartContext";
import { Cart } from "../components/carrito/Cart";

function Product () {
    const container = {
        position: 'relative',
      };
      const sub = {
        position: 'absolute',
      };
    return (
        <>
            <div>
                <div >            
                    <Header/>
                    <CartProvider style={container}>
                        <Cart style={container}/>
                        <ProductList/>                       
                    </CartProvider>
                    
                </div>
            </div>
        </>
    );
}
export default Product;