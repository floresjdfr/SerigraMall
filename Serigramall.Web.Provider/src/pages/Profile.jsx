import { useState } from "react";
import { Container } from "react-bootstrap";
import InformationForm from "../components/profile/InformationForm";
import Loading from "../components/utils/Loading";

function Profile() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container className="h-100">
      <h2 className="mb-3">Profile Information</h2>
      {isLoading ? <Loading /> : <InformationForm setIsLoading={setIsLoading} />}
    </Container>
  );
}

export default Profile;
