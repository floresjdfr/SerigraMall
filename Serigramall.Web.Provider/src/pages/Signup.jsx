import { Container, Form } from "react-bootstrap";
import { auth0Provider } from "../services/api/auth/auth0Provider";
import "../styles/loginForm.css";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNumber.value;
    const address = e.target.streetAddress.value;
    const providerType = e.target.providerType.value;

    console.log(providerType)

    auth0Provider
      .signup({
        email,
        username,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
        providerType,
      })
      .then((_) => alert("New user created successfully"))
      .catch((_) => alert("Something went wrong while creating the new user"));
  };

  return (
    <Container className="loginForm">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="text-center">Sign Up</h3>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            id="firstName"
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            id="lastName"
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            id="phoneNumber"
            type="number"
            className="form-control"
            placeholder="Phone Number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            id="streetAddress"
            type="text"
            className="form-control"
            placeholder="Street Address"
          />
        </Form.Group>

        <div className="mb-3">
          <label>Provider Type</label>
          <Form.Select id="providerType">
            <option>Select a Type</option>
            <option value="1">Serigraph Provider</option>
            <option value="2">Products Provider</option>
          </Form.Select>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Already registered? <a href="/login">Login</a>
        </p>
      </Form>
    </Container>
  );
}

export default Signup;
