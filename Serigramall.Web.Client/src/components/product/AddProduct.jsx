import { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi from '../../services/api/productApi';

const AddProduct= () => {
    const [productState,setProductState] = useState("");

    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState({});

    const [file, setFile] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      inputs[name] = value;
      setInputs(inputs);
    };

    function handleImageChange(event) {
      console.log(event.target.files);
      setFile(URL.createObjectURL(event.target.files[0]));
    }


    const handleOnSubmit = (event) =>{
        //const newProduct = {productState,done: false}

        event.preventDefault();
        
        const newProduct = {
          Description: inputs.Description,
          ProductName: inputs.Name,
          RegistryDate: inputs.Date,
          BasePrice: inputs.Price,
          BaseTax: inputs.Tax,
          Image: file,
          State: "NEW",
        };


        productApi.post(newProduct)
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
            boton de prueba
          </Button>
  
          <Modal show={show} onHide={handleClose}>
            <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>New Product</Modal.Title>
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
                  <Form.Label>Base Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="Price"
                    placeholder="Base Price"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Base Tax</Form.Label>
                  <Form.Control
                    type="text"
                    name="Tax"
                    placeholder="Base Tax"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="Image"
                    placeholder="Image"
                    onChange={handleImageChange}
                    img src={`data:image/jpeg;base64,${file}`}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
                  Save Task
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </div>
    );
}

function NewssssProduct() {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});

  const [productState, setProductState] = useContext(ProductContext);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    inputs[name] = value;
    setInputs(inputs);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      productDescription: inputs.Description,
      productDate: inputs.Date,
      productState: "ACTIVE",
    };

    postProduct(newProduct)
      .then((_) => getProducts())
      .then((res) => setProductState(res.data))
      .catch((_) => {
        setToastHeader("Error");
        setToastBody(
          "An error ocurred while executing the request. Please try again"
        );
        setShowToast(true);
      });
    handleClose();
  };

  return (
    <div className="row">
      <div className="col">
        <Button className="float-end" variant="primary" onClick={handleShow}>
          New Product
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Due date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="Date"
                  placeholder="Date"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Product
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}




export default AddProduct;