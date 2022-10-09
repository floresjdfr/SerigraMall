const Product = ({product}) =>{
    return (
        <li className={'${product.done ? "checked" : ""}' }>
            {product.description}
            <span class = "close">X</span>
        </li>
    );

}
export default Product;
