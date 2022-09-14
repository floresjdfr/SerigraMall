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
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Not specified"
              disabled={true}
              value={user.family_name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Not specified"
              disabled={true}
              value={user.email}
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
