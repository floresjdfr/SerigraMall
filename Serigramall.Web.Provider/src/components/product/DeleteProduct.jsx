import { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi from '../../services/api/productApi';

const DeleteProduct= ({ product }) => {
    const [productState,setProductState] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    const handleOnSubmit = (event) =>{

        event.preventDefault();
        
        const productId = {
            Id: product.id
        };

        const newProduct = {
          Description: product.description
        };


        productApi.remove(product.id);
        /*
        .then((_)=>productApi.getAll())
        .then((response) => setProductState(response.data))
        .catch((_) => {

        });*/
      handleClose();
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
                    disabled = {true}
                    name="Name"
                    text={product.productName}
                    placeholder={product.productName}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="Description"
                    disabled = {true}
                    text={product.description}
                    placeholder={product.description}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Registry date</Form.Label>
                  <Form.Control
                    type="Date"
                    name="Date"
                    disabled = {true}
                    text={product.registryDate}
                    placeholder={product.registryDate}
                  />
                </Form.Group>
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
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