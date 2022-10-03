import { Container, Form, FormControl } from "react-bootstrap";
import login from "../services/api/authentication.js";

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password, function(error){
      if (error) {
        console.log(error);
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center my-3">Login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <Form.Label
              className="custom-control-label ms-2"
              htmlFor="customCheck1"
            >
              Remember me
            </Form.Label>
          </div>
        </Form.Group>
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-3">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
          Don't have an accoun yet? <a href="/signup">Create new account</a>
        </p>
      </Form>
    </Container>
  );
}

export default Login;
