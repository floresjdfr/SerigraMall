import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import userManagementApi from "../../services/api/userManagementApi";
import { useEffect } from "react";
import ProfileButtons from "./ProfileButtons";

function InformationForm({ setIsLoading }) {
    const FormState = {
        EDIT: "edit",
        VIEW: "view"
    }
    
    const { user, getAccessTokenSilently } = useAuth0();

    const [token, setToken] = useState(null);
    const [isInformationComplete] = useState(user.user_metadata.isInformationComplete);
    const [firstName, setFirstName] = useState(user.given_name);
    const [lastName, setLastName] = useState(user.family_name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.user_metadata.phone);
    const [address, setAddress] = useState(user.user_metadata.address);
    const [formState, setFormState] = useState(FormState.VIEW);

    useEffect(() => {
        getAccessTokenSilently().then((token) => {
            setToken(token); 
        });
    }, []);

    const handleOnFirstNameChange = (e) => setFirstName(e.target.value);
    const handleOnLastNameChange = (e) => setLastName(e.target.value);
    const handleOnEmailChange = (e) => setEmail(e.target.value);
    const handleOnPhoneChange = (e) => setPhone(e.target.value);
    const handleOnAddressChange = (e) => setAddress(e.target.value);
    const handleOnEditClick = () => setFormState(FormState.EDIT);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const userUpdated = {
            given_name: firstName,
            family_name: lastName,
            name: firstName + " " + lastName,
            email,
            user_metadata:
            {
                isInformationComplete: true, address, phone
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
    };

    const isViewMode = () => formState === FormState.VIEW;

    return (
        <>
            {!isInformationComplete && <Alert variant="danger">Please complete your profile information to continue using your account.</Alert>}
            <Form onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        disabled={isViewMode()}
                        value={firstName}
                        onChange={handleOnFirstNameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        disabled={isViewMode()}
                        value={lastName}
                        onChange={handleOnLastNameChange}
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
                <ProfileButtons
                    user={user}
                    formState={{ formState, setFormState }}
                    formStateEnum={FormState}
                    isViewMode={isViewMode} />
            </Form>
        </>
    );
}


export default InformationForm;