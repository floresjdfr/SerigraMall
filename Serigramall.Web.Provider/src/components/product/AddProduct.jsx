
import React, { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import productApi, { getProductsByProvider } from '../../services/api/productApi';

import { GlobalContext } from "../../contexts/GlobalContext";
import { useAuth0 } from '@auth0/auth0-react';
import { ProductsContext } from "../../contexts/ProductsContext";

const AddProduct = () => {
  const { user } = useAuth0();
  const { setShowToast, setToastHeader, setToastBody, setIsLoading } = useContext(GlobalContext);
  const { setProductsState } = useContext(ProductsContext);

  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});

  const [fileImage, setFileImage] = useState();
  const [string64, setString64] = React.useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    inputs[name] = value;
    setInputs(inputs);
  };

  const getAnswer = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAns(data);
  };

  function handleImageChange(event) {
    console.log(event.target.files[0]);
    //setFileImage(URL.createObjectURL(event.target.files[0]))
    getAnswer(event.target.files[0]);
    setFileImage(blobToBase64(event.target.files[0]));
    console.log(fileImage);
  }


  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        setString64(reader.result);
        resolve(reader.result);
      };
    });
  };

  const handleOnSubmit = (event) => {
    //const newProduct = {producstState,done: false}

    event.preventDefault();
    setIsLoading(true);

    var promiseB = fileImage.then(function (response) {
      console.log(response);
      return response;
    })
      .then(function (data) {
        //var image = JSON.parse(data);
        console.log(data);
        return data;
      });

    //console.log('Base64 String without Tags- ', fileImage.result.substr(fileImage.result.indexOf(', ') + 1));

    const newProduct = {
      Id: "",
      Description: inputs.Description,
      ProviderId: user.sub,
      ProductName: inputs.Name,
      BasePrice: inputs.Price,
      BaseTax: inputs.Tax,
      Image: string64.split(',')[1],
      ProductState: 4,
      ProductType: user.user_metadata.provider
    };


    productApi.post(newProduct)
      .then((_) => getProductsByProvider(user.sub))
      .then((response) => { (response === 500) ? throwError() : setProductsState(response.data) })
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while trying to retrive the requested Items");
        setShowToast(true);
      })
      .finally(() => {
        setIsLoading(false)
      });
    handleClose();
  };
  return (
    <div className="row">
      <div className="col">
        <Button className="float-end " variant="secondary" onClick={handleShow}>
          Add new
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
                  as="textarea" rows={3}
                  name="Description"
                  placeholder="Description"
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Label>Registry date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="Date"
                  placeholder="Date"
                />
              </Form.Group> */}
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

function NewssssProduct() {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});

  const [producstState, setProductsState] = useContext(ProductContext);


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
      producstState: "ACTIVE",
    };

    postProduct(newProduct)
      .then((_) => getProducts())
      .then((res) => setProductsState(res.data))
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


/*
img src={`data:image/jpeg;base64,${file}`}

                  <input type="file" onchange="previewFile()" /><br />
                 <img src="" height="200" alt="Image preview" />

const image = {imgg : blobToBase64(file)};
 
                  <Form.Label>Image</Form.Label>
                 <Form.Control
                   type="file"
                   name="Image"
                   placeholder="Image"
                   onChange={handleImageChange}
                   
                 />
*/