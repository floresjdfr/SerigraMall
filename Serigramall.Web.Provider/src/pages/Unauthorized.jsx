import { Container } from "react-bootstrap";

export default function Unauthorized() {
    return (
        <Container >
            <div className="row mx-auto ">
                <h1>Unauthorized Access</h1>
                <p>Contact an administrator</p>
            </div>
        </Container>
    );
}