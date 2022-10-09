import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import userManagementApi from "../../services/api/userManagementApi";
import { useEffect } from "react";

function InformationForm({ setIsLoading }) {
    const { user, getAccessTokenSilently } = useAuth0();

    const FormState = {
        EDIT: "edit",
        VIEW: "view"
    }

    const [token, setToken] = useState(null);
    const [isInformationComplete] = useState(user.user_metadata.isInformationComplete);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.user_metadata.phone);
    const [address, setAddress] = useState(user.user_metadata.address);
    const [provider, setProvider] = useState(user.user_metadata.provider);
    const [formState, setFormState] = useState(FormState.VIEW);

    const handleOnNameChange = (e) => setName(e.target.value);
    const handleOnEmailChange = (e) => setEmail(e.target.value);
    const handleOnPhoneChange = (e) => setPhone(e.target.value);
    const handleOnAddressChange = (e) => setAddress(e.target.value);
    const handleOnProviderChange = (e) => setProvider(e.target.value);
    const handleOnEditClick = () => {
        setFormState(FormState.EDIT);
    }

    useEffect(() => {
        getAccessTokenSilently().then((token) => {
            setToken(token);
        });
    }, []);


    const isViewMode = () => formState === FormState.VIEW;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const userUpdated = {
            name,
            email,
            user_metadata:
            {
                isInformationComplete: true, address, phone, provider
            }
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        userManagementApi.patch(user.sub, userUpdated, config).then((_) => {
            alert("User updated successfully. You will be signed out.");
            window.location.href = "/";
        }).catch((_) => {
            alert("Error updating user");
            setIsLoading(false);
            setFormState(FormState.VIEW);
        });


    }

    return (
        <>
            {!isInformationComplete && <Alert variant="danger">Please complete your profile information to continue using your account.</Alert>}
            <Form onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        id="name"
                        type="text"
                        placeholder="Not specified"
                        disabled={isViewMode()}
                        value={name}
                        onChange={handleOnNameChange}
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        id="email"
                        type="email"
                        placeholder="Not specified"
                        disabled={isViewMode()}
                        value={email}
                        onChange={handleOnEmailChange}
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                        id="address"
                        type="text"
                        placeholder="Not specified"
                        disabled={isViewMode()}
                        value={address}
                        onChange={handleOnAddressChange}
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        id="phone"
                        type="number"
                        placeholder="Not specified"
                        disabled={isViewMode()}
                        value={phone}
                        onChange={handleOnPhoneChange}
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Provider Type</Form.Label>
                    <Form.Select id="provider" disabled={isViewMode()} defaultValue={provider} onChange={handleOnProviderChange} >
                        <option>Not specified</option>
                        <option value="1" >Serigraphy</option>
                        <option value="2" >Products</option>
                    </Form.Select>
                </Form.Group>
                {isViewMode() ? <Button key={"edit-btn"} className="mt-3" type="button" variant="warning" onClick={handleOnEditClick} >Edit</Button> : <Button key={"submit-btn"} className="mt-3" type="submit" variant="primary">Guardar</Button>}
            </Form>
        </>
    );
}

export default InformationForm;