
import React, { useEffect,useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi from '../../services/api/productApi';
import { ProductContext } from "../../Pages/Product";
import { GlobalContext } from "../../contexts/GlobalContext";

const UpdateProduct = ({ product }) => {
  const [productState, setProductState] = useState("");
  const { setShowToast, setToastHeader, setToastBody } =
    useContext(GlobalContext);

  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    inputs[name] = value;
    setInputs(inputs);
  };

  useEffect(() => {
    _loadProductInfo();
  }, []);

  function _loadProductInfo() {
    var name = "Description"
    var value = product.description
    _loadProductInputs(name,value);

    name = "Tax"
    value = product.baseTax
    _loadProductInputs(name,value);

    name = "Price"
    value = product.basePrice
    _loadProductInputs(name,value);

    name = "State"
    value = product.ProductState
    _loadProductInputs(name,value);
  }

  function _loadProductInputs(pname,pvalue) {
    const name = pname;
    const value = pvalue;
    inputs[name] = value;
    setInputs(inputs);
  }

  const handleOnSubmit = (event) => {

    event.preventDefault();

    const updatedProduct = {
      Id: product.id,
      Description: inputs.Description,
      ProviderId: product.providerID,
      ProductName: product.productName,
      RegistryDate: product.registryDate,
      BasePrice: inputs.Price,
      BaseTax: inputs.Tax,
      Image: product.image,
      ProductType: product.productType,
      Costumizations: product.costumizations,
      ProductState: parseInt(inputs.State,10)
    };


    productApi.put(updatedProduct)
      .then((_) => productApi.getAll())
      .then((response) => {(response === 500) ?  throwError(): setProductsState(response)})
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while trying to retrive the requested Items");
        setShowToast(true);
        setIsLoading(false);
      });
    handleClose();

  };
  return (
    <div className="row">
      <div className="col">
        <Button className="float-start " size="sm" variant="secondary" onClick={handleShow}>
          Update
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Update Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  disabled={true}
                  defaultValue={product.productName}
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  defaultValue={product.description}
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Registry date</Form.Label>
                <Form.Control
                  type="text"
                  name="Date"
                  disabled={true}
                  defaultValue={product.registryDate}
                  placeholder="Date"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Base Price</Form.Label>
                <Form.Control
                  type="text"
                  name="Price"
                  defaultValue={product.basePrice}
                  placeholder="Base Price"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Base Tax</Form.Label>
                <Form.Control
                  type="text"
                  name="Tax"
                  defaultValue={product.baseTax}
                  placeholder="Base Tax"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="State"
                  defaultValue={product.productState}
                  placeholder="State"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button className="float-start"variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button className="float-end" type="submit" variant="primary">
                Save Product
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default UpdateProduct;