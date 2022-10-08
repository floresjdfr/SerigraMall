import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../authentication/LoginButton";
import Loading from "../utils/Loading";
import ProfileDropDownOptions from "./ProfileDropdownOptions";

export default function ProfileDropdown() {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <>
            {isLoading ? <Loading width={"40px"} /> : 
            isAuthenticated ? <ProfileDropDownOptions /> : <LoginButton />}
        </>
    );
}