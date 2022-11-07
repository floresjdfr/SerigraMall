import { Form, Button, Modal, Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <div className='header mb-3'>
            <h2 className='text-muted'>Products</h2>
            <Form>
                <div className="row px-4">
                    <div className="col-5 p-0 pe-1">
                        <Form.Select>
                            <option>All providers</option>
                            <option value="1">Provider 1</option>
                        </Form.Select>
                    </div>
                    <div className="col-5 p-0">
                        <Form.Control type="text" placeholder="Search product"></Form.Control>
                    </div>
                    <div className="col-2 p-0">
                        <Button variant="primary" type="submit">Search</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
export default Header;