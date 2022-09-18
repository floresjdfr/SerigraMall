import { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import { ProductContext } from "../../Pages/Product";
import { deleteProduct, getProducts } from "../../services/api/productsApi";
import { GlobalContext } from "../../contexts/GlobalContext";

function ListProduct() {
  const [productState, setProductState] = useContext(ProductContext);
  const { setShowToast, setToastHeader, setToastBody } =
    useContext(GlobalContext);

  const handleOnClick = function (id) {
    deleteProduct(id)
      .then((_) => getProducts())
      .then((res) => setProductState(res.data))
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while deleting the product");
        setShowToast(true);
      });
  };
  /*const image = await axios(url, { responseType: "blob", headers: {Authorization: token }}); 
  const srcForImage = URL.createObjectURL(image.data)*/
  const productsElement = productState.map((product) => (
    <div className="d-flex justify-content-between mb-4" key={product.productId}>
      <span>{product.productDescription}</span>
      <span><img src={srcForImage}/></span>
      <span>{new Date(product.productDate).toISOString().slice(0, 10)}</span>
      <Button variant="danger" onClick={() => handleOnClick(product.productId)}>
        Delete
      </Button>
    </div>
  ));

  return (
    <div className="row mt-5">
      <div className="col">{productsElement}</div>
    </div>
  );
}

export default ListProduct;
