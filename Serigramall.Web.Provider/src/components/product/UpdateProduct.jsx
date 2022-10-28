
import React, { useEffect, useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi from '../../services/api/productApi';
import { GlobalContext } from "../../contexts/GlobalContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import Select from 'react-select';

const UpdateProduct = ({ product }) => {
  const { setShowToast, setToastHeader, setToastBody, setIsLoading } = useContext(GlobalContext);
  const { setProductsState } = useContext(ProductsContext);

  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [fileImage, setFileImage] = useState();
  const [selectedState, setSelectedState] = useState(`${product.productState}`);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    _loadProductInfo();
  }, []);


  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    inputs[name] = value;
    setInputs(inputs);
  };

  //ACTIVE, SOLDOUT, DESCONTINUED, DEFAULT, NEW
  const states = [
    { value: "0", label: "Active" },
    { value: "1", label: "Sold Out" },
    { value: "2", label: "Discontinued" },
    { value: "3", label: "Default" },
    { value: "4", label: "New" }
  ];

  const getUserSelectedState = (product) => {
    const selectedState = states
      .filter(state => state.value === `${product.productState}`)
      .reduce((acc, curr) => {
        return curr;
      }, {});
    return selectedState;
  }

  function _loadProductInfo() {
    var name = "Description"
    var value = product.description
    _loadProductInputs(name, value);

    name = "Tax"
    value = product.baseTax
    _loadProductInputs(name, value);

    name = "Price"
    value = product.basePrice
    _loadProductInputs(name, value);

    name = "State"
    value = product.ProductState
    _loadProductInputs(name, value);
  }

  function _loadProductInputs(pname, pvalue) {
    const name = pname;
    const value = pvalue;
    inputs[name] = value;
    setInputs(inputs);
  }

  function handleImageChange(event) {
    console.log(event.target.files[0]);
    //setFileImage(URL.createObjectURL(event.target.files[0]))
    getAnswer(event.target.files[0]);
    setFileImage(blobToBase64(event.target.files[0]));
    console.log(fileImage);
  }

  const getAnswer = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAns(data);
  };

  const handleOnSubmit = (event) => {

    event.preventDefault();
    setIsLoading(true);

    const updatedProduct = {
      Id: product.id,
      Description: inputs.Description,
      ProviderId: product.providerID,
      ProductName: product.productName,
      BasePrice: inputs.Price,
      BaseTax: inputs.Tax,
      Image: product.image,
      ProductType: product.productType,
      ProductState: inputs.State
    };

    productApi.put(updatedProduct)
      .then((_) => productApi.getAll())
      .then((response) => {
        (response === 500) ? throwError() : setProductsState(response.data)
      })
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while trying to retrive the requested Items");
        setShowToast(true);

      })
      .finally(() => setIsLoading(false));
    handleClose();
  };

  const handleChange = (selectedOption) => {
    setSelectedState(selectedOption);
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
                <Select options={states} defaultValue={getUserSelectedState(product)} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="Image"
                  placeholder="Image"
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button className="float-start" variant="secondary" onClick={handleClose}>
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