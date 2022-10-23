import { Form, Button, Modal } from "react-bootstrap";
import NewProduct from "./AddProduct";

const Header = () => {
    return (
        <div className='p-5 text-center bg-muted text-muted'>
            <h2 className='mb-3 text-muted'>Products</h2>
            <div>
                <input className="float-center "type="text"/>
                <Button className="float-center " variant="secondary">Seach</Button>
            </div>         
        </div>
    );
}
export default Header;

/*

            <a className='btn btn-primary float-end' href='' role='button'>
                Add product
            </a>
            


<Button className="float-end" variant="primary" onClick={handleShow}>
                New Task
            </Button>
    <div class="span4 offset2" style="margin-top:15px;">
        <button class="btn pull-right" type="button">Sign In</button>
    </div>
*/