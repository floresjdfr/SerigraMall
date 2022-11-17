import NewProduct from "./AddProduct";

const Header = () => {
    return (
        <div className='p-5 text-center bg-muted'>
            <h2 className='mb-3'>Products</h2>
            <NewProduct/>
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