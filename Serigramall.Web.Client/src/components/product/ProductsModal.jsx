import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { getByProductType } from "../../services/api/productApi";
import "../../styles/ProductsModalStyles.css";
import Loading from "../utils/Loading";
import ProductItem from "../product/ProductItem";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { GlobalContext } from "../../contexts/GlobalContext";
export default function ProductsModal({ ...args }) {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { showProductsModal,
        setShowProductsModal,
        selectedSerigraphy,
        setSelectedSerigraphy } = useContext(ProductsContext);

    const { productScreenTypes } = useContext(GlobalContext);

    const productType = 2; //This is the normal product type
    useEffect(function () {
        setIsLoading(true);
        getByProductType(productType)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Modal
            dialogClassName="modal-95w"
            show={showProductsModal}
            onHide={() => setShowProductsModal(false)}


            aria-labelledby="example-custom-modal-styling-title">
            {/* <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title" >Select a product</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <Container>
                    <div className="row">
                        <div className="col-4">
                            {selectedSerigraphy && <Card.Img variant="top" src={`data:image/jpeg;base64,${selectedSerigraphy.image}`} />}
                        </div>
                        <div className="col-8">
                            {isLoading ? <Loading /> :
                                <div className="row">
                                    {products.map((product) => (
                                        <ProductItem product={product} key={product.id} />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowProductsModal(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}