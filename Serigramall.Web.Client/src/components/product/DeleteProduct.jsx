import { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi from '../../services/api/productApi';

const DeleteProduct= (productId) => {
    const [productState,setProductState] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    const handleOnSubmit = (event) =>{

        event.preventDefault();
        
        const newProduct = {
          Description: productId,
          Image: file
        };


        productApi.delete(newProduct)
        .then((_)=>productApi.getAll())
        .then((response) => setProductState(response.data))
        .catch((_) => {

        });
      handleClose();
    };
    return (
      <div className="row">
        <div className="col">
          <Button className="float-end " variant="secondary" onClick={handleShow}>
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
                    name="Name"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="Description"
                    placeholder="Description"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Registry date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="Date"
                    placeholder="Date"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="Image"
                    placeholder="Image"
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