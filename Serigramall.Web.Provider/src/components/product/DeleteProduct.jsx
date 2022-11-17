import { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi, { getProductsByProvider } from '../../services/api/productApi';

import { GlobalContext } from "../../contexts/GlobalContext";
import Loading from "../utils/Loading";
import { useAuth0 } from '@auth0/auth0-react';
import { ProductsContext } from "../../contexts/ProductsContext";

const DeleteProduct = ({ product }) => {
  const { user } = useAuth0();
  const { setIsLoading } = useContext(GlobalContext);
  const { setProductsState } = useContext(ProductsContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const date = new Date(product.registryDate).toLocaleDateString();


  const handleOnSubmit = (event) => {

    event.preventDefault();
    setIsLoading(true);

    const productId = {
      Id: product.id
    };

    const newProduct = {
      Description: product.description
    };


    productApi.removeA(product.id)
      .then((_) => getProductsByProvider(user.sub))
      .then((response) => setProductsState(response.data))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
    handleClose();

    /*
    .then((_)=>productApi.getAll())
    .then((response) => {(response === 500) ?  throwError(): setProductsState(response)})
    .catch((_) => {
            setToastHeader("Error");
            setToastBody("An error ocurred while trying to retrive the requested Items");
            setShowToast(true);
            setIsLoading(false);
    });*/

  };
  return (
    <div className="row">
      <div className="col">
        <Button className="float-end " size="sm" variant="danger" onClick={handleShow}>
          Delete
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleOnSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  name="Name"
                  value={product.productName}
                  placeholder={product.productName}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  disabled={true}
                  value={product.description}
                  placeholder={product.description}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Registry date</Form.Label>
                <Form.Control
                  type="text"
                  name="Date"
                  disabled={true}
                  value={date}
                  placeholder={date}
                />
              </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button className="Button" onClick={handleClose}>
                Close
              </Button>
              <Button className="Button" type="submit">
                Delete
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
export default DeleteProduct;


/**
 * 
 * <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <div className='img' 
                    src={`data:image/jpeg;base64,${product.image}`}
                  />
                </Form.Group>
 */