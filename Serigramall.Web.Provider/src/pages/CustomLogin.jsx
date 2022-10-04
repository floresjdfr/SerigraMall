import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth0 from "../hooks/useAuth0";
import { useAuth0 as useOriginal } from "@auth0/auth0-react";

function FormComponent() {

    const { login, logout } = useAuth0();
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnEmailChange = (e) => setEmail(e.target.value);
    const handleOnPasswordChange = (e) => setPassword(e.target.value);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        
    }

    return (
        <Form onSubmit={handleOnSubmit} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleOnEmailChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleOnPasswordChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    )
}

export default function CustomLogin() {
    const { isAuthenticated, isLoading, user, isError, token, login, logout } = useAuth0();

    

    const handleOnLogout = (e) => {
        logout();
    }

    return (
        <div>
            {isLoading ? <div>Loading...</div> :
                isAuthenticated ? (<div> <p>User: {user?.basicInformation.email}</p> <Button variant="danger" onClick={handleOnLogout}>Logout</Button></div>)
                    : <FormComponent />}      
        <div>{user?.email}</div>
        </div >
    );
}