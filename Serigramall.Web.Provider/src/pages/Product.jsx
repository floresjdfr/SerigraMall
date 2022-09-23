import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'

function Product () {
    return (
        <>
            <div>
                <div >
                    <Header/>
                    <ProductList/>
                </div>
            </div>
        </>
    );
}
export default Product;