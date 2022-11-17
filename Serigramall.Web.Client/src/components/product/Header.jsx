import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Form, Button, Modal, Row, Col, Container } from "react-bootstrap";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import "../../styles/loginButtonStyles.css";

const Header = ({ productType }) => {

    const { productScreenTypes } = useContext(GlobalContext);
    const { productsState, setProductsState } = useContext(ProductsContext);

    const [product, setProduct] = useState("");
    const [selectedProvider, setSelectedProvider] = useState("");

    useEffect(function () {

    }, []);

    const onProductChange = (e) => setProduct(e.target.value);
    const onProviderChange = (e) => setSelectedProvider(e.target.value);
    const onSubmit = (e) => {

    }

    const getProviders = () => {

    }

    return (
        <Container className="mb-4">
            <div className="mb-2">
                {productType === productScreenTypes.Serigraphy ? <h1 className='ms-2'>Serigraphy</h1> : <h1 className='ms-2'>Products</h1>}
            </div>
            <Form>
                <div className="mb-2">
                    <Form.Select className="form">
                        <option >All providers </option>
                        <option value="1">Provider 1</option>
                    </Form.Select>
                </div>
                <Row className="justify-content-center">
                    <Col xs={11}>
                        <Form.Control className="form" type="text" placeholder="Search product"></Form.Control>
                    </Col>
                    <Col xs={1} className="d-flex justify-content-center align-items-center">
                        <Button className="custom-btn" variant="outline" type="submit">
                            <RiSearchLine />
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
export default Header;