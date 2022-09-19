import { useAuth0, User } from "@auth0/auth0-react";
import { Container, Form } from "react-bootstrap";
import Loading from "../components/utils/Loading";

function Profile() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  function InformationForm() {
    console.log(user);
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Not specified"
              disabled={true}
              value={user.user_metadata.company}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Not specified"
              disabled={true}
              value={user.email}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Not specified"
              disabled={true}
              value={user.user_metadata.address}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Not specified"
              disabled={true}
              value={user.user_metadata.phone}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Provider Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Not specified"
              disabled={true}
              value={user.user_metadata.provider == "1" ? "Serigraphy" : "Products"}
            />
          </Form.Group>
        </Form>
      </>
    );
  }

  return (
    <Container>
      <h2 className="mb-3">Profile Information</h2>
      {isLoading ? <Loading /> : <InformationForm />}
    </Container>
  );
}

export default Profile;
