import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import InformationForm from "../components/profile/InformationForm";
import Loading from "../components/utils/Loading";

function Profile() {
  const { isLoading, user } = useAuth0();

  return (
    <Container>
      <h2 className="mb-3">Profile Information</h2>
      {isLoading ? <Loading /> : <InformationForm user={user} />}
    </Container>
  );
}

export default Profile;
