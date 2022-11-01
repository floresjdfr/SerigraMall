
import React, { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi, { getProductsByProvider } from '../../services/api/productApi';
import { GlobalContext } from "../../contexts/GlobalContext";
import { ProductsContext } from "../../contexts/ProductsContext";;
import { useAuth0 } from '@auth0/auth0-react';

const UpdateProduct = ({ product }) => {

  const { user } = useAuth0();

  const { setShowToast, setToastHeader, setToastBody, setIsLoading } = useContext(GlobalContext);
  const { setProductsState } = useContext(ProductsContext);

  const [show, setShow] = useState(false);

  const [name, setName] = useState(`${product.productName}`);
  const [description, setDescription] = useState(`${product.description}`);
  const [price, setPrice] = useState(`${product.basePrice}`);
  const [tax, setTax] = useState(`${product.baseTax}`);
  const [selectedState, setSelectedState] = useState(`${product.productState}`);
  const [fileImage, setFileImage] = useState(`${product.image}`);

  //open/close modal handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //form handlers
  const handleOnNameChange = (event) => setName(event.target.value);
  const handleOnDescriptionChange = (event) => setDescription(event.target.value);
  const handleOnPriceChange = (event) => setPrice(event.target.value);
  const handleOnTaxChange = (event) => setTax(event.target.value);
  const handleOnStateChange = (event) => setSelectedState(event.target.value);
  function handleImageChange(event) {
    getAnswer(event.target.value);
    blobToBase64(event.target.files[0]).then(result => {
      let image64 = result.split(',')[1]; 
      setFileImage(image64);
    });
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const updatedProduct = {
      Id: product.id,
      ProductName: name,
      Description: description,
      BasePrice: price,
      BaseTax: tax,
      ProductState: parseInt(selectedState),
      Image: fileImage,
      ProviderId: null,
      ProductType: null,
    };

    productApi.put(updatedProduct)
      .then((_) => getProductsByProvider(user.sub))
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

  //ACTIVE, SOLDOUT, DESCONTINUED, DEFAULT, NEW
  const states = [
    { value: "0", label: "Active" },
    { value: "1", label: "Sold Out" },
    { value: "2", label: "Discontinued" },
    { value: "3", label: "Default" },
    { value: "4", label: "New" }
  ];

  const getAnswer = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAns(data);
  };

  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  return (
    <div className="row">
      <div className="col">
        <Button className="float-start " size="sm" variant="secondary" onClick={handleShow}>
          Update
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleOnSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Update Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={handleOnNameChange}
                  type="text"
                  name="name"
                  defaultValue={product.productName}
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={handleOnDescriptionChange}
                  as="textarea" rows={3}
                  name="description"
                  defaultValue={product.description}
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Base Price</Form.Label>
                <Form.Control
                  onChange={handleOnPriceChange}
                  type="text"
                  name="price"
                  defaultValue={product.basePrice}
                  placeholder="Base Price"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Base Tax</Form.Label>
                <Form.Control
                  onChange={handleOnTaxChange}
                  type="text"
                  name="tax"
                  defaultValue={product.baseTax}
                  placeholder="Base Tax"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Select onChange={handleOnStateChange} name="state" defaultValue={product.productState}>
                  <option value="0">Active</option>
                  <option value="1">Sold Out</option>
                  <option value="2">Discontinued</option>
                  <option value="3">Default</option>
                  <option value="4">New</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
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