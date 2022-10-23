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
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.user_metadata.phone);
    const [address, setAddress] = useState(user.user_metadata.address);
    const [provider, setProvider] = useState(user.user_metadata.provider);
    const [formState, setFormState] = useState(FormState.VIEW);
    const [allowEditProviderType, setAllowEditProviderType] = useState(false);

    useEffect(() => {
        getAccessTokenSilently().then((token) => {
            setToken(token);
        });
    }, []);

    const handleOnNameChange = (e) => setName(e.target.value);
    const handleOnEmailChange = (e) => setEmail(e.target.value);
    const handleOnPhoneChange = (e) => setPhone(e.target.value);
    const handleOnAddressChange = (e) => setAddress(e.target.value);
    const handleOnProviderChange = (e) => setProvider(e.target.value);
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
    };

    const isViewMode = () => formState === FormState.VIEW;

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
                    <Form.Select id="provider" disabled={!allowEditProviderType} defaultValue={provider} onChange={handleOnProviderChange} >
                        <option>Not specified</option>
                        <option value="1" >Serigraphy</option>
                        <option value="2" >Products</option>
                    </Form.Select>
                </Form.Group>
                <ProfileButtons
                    user={user}
                    formState={{ formState, setFormState }}
                    formStateEnum={FormState}
                    setAllowEditProviderType={setAllowEditProviderType}
                    isViewMode={isViewMode} />
            </Form>
        </>
    );
}


export default InformationForm;