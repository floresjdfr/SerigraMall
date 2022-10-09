import ProductList from "../components/products/ProductList";
import Header from "../components/products/Header";
import '../styles/product.css'

function Product () {
    return (
        <>
            <div className="Product">
                <div className="content">
                    <Header/>
                    <ProductList/>
                </div>
            </div>
        </>
    );
}
export default Product;