import { Container, Form } from "react-bootstrap";
import { auth0Provider } from "../services/api/auth/auth0Provider";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNumber.value;
    const streetAddress = e.target.streetAddress.value;

    auth0Provider
      .signup({
        email,
        username,
        password,
        firstName,
        lastName,
        streetAddress,
        phoneNumber,
      })
      .then((_) => alert("New user created successfully"))
      .catch((_) => alert("Something went wrong while creating the new user"));
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="text-center">Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            id="firstName"
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            id="lastName"
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            id="username"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-3">
          <label>Street Address</label>
          <input
            id="streetAddress"
            type="text"
            className="form-control"
            placeholder="Street Address"
          />
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
