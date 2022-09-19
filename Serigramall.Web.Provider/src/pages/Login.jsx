import { Container, Form, FormControl } from "react-bootstrap";
import { auth0Provider } from "../services/api/auth/auth0Provider";
import useAuthentication from "../hooks/useAuthentication";

function Login() {
  const { login, isAuthenticated, token } = useAuthentication();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleLogin(e)}>
        <h3 className="text-center my-3">Login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
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
