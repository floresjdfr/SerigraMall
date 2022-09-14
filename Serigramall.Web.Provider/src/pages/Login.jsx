import { Container, Form, FormControl } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Form>
        <h3 className="text-center my-3">Login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
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
