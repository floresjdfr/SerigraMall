import { Form, Button, Modal } from "react-bootstrap";

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