import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import userManagementApi from "../../services/api/userManagementApi";

function InformationForm() {

    const { user } = useAuth0();

    const [isProfileComplete, setProfileComplete] = useState(user.user_metadata);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.user_metadata.phone);
    const [address, setAddress] = useState(user.user_metadata.address);
    const [provider, setProvider] = useState(user.user_metadata.provider);

    const handleOnNameChange = (e) => setName(e.target.value);
    const handleOnEmailChange = (e) => setEmail(e.target.value);
    const handleOnPhoneChange = (e) => setPhone(e.target.value);
    const handleOnAddressChange = (e) => setAddress(e.target.value);
    const handleOnProviderChange = (e) => setProvider(e.target.value);
    const handleOnEditClick = () => {
        setProfileComplete(false);
        console.log(isProfileComplete);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userUpdated = {
            user_id: user.sub,
            name,
            email,
            user_metadata:
            {
                address, phone, provider
            }
        };

        userManagementApi.patch(userUpdated).then((response) => {
            alert("User updated successfully");
        }).catch((error) => {
            alert("Error updating user");
        });
    }
    return (
        <>
            {!isProfileComplete && <Alert variant="danger">Please complete your profile information to continue using your account.</Alert>}
            <Form onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        id="name"
                        type="text"
                        placeholder="Not specified"
                        disabled={isProfileComplete}
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
                        disabled={isProfileComplete}
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
                        disabled={isProfileComplete}
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
                        disabled={isProfileComplete}
                        value={phone}
                        onChange={handleOnPhoneChange}
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Provider Type</Form.Label>
                    <Form.Select id="provider" disabled={isProfileComplete} defaultValue={provider} onChange={handleOnProviderChange} >
                        <option>Not specified</option>
                        <option value="1" >Serigraphy</option>
                        <option value="2" >Products</option>
                    </Form.Select>
                </Form.Group>
                {isProfileComplete ? <Button className="mt-3" type="button" variant="warning" onClick={handleOnEditClick} >Edit</Button> : <Button className="mt-3" type="submit" variant="primary">Guardar</Button>}
            </Form>
        </>
    );
}

export default InformationForm;