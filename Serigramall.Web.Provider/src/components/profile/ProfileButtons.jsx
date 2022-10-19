import { Button } from "react-bootstrap";
import {auth0ClientApi} from "../../services/api/auth0ClientApi";

export default function ProfileButtons({ user, formState, formStateEnum, setAllowEditProviderType, isViewMode }) {

    const handleOnPasswordChangeClick = () => {
        const email = user.email;
        auth0ClientApi.changePassword(email).then(_ => alert("Check your email for a password reset link")).catch(_ => alert("Something went wrong"));
    }

    const handleOnEditClick = () => {
        formState.setFormState(formStateEnum.EDIT);
        !user.user_metadata.isInformationComplete && setAllowEditProviderType(true);
    }

    return (
        <div className="text-end">
            <Button className="m-2" variant="warning" onClick={handleOnPasswordChangeClick}>Change password</Button>
            {
                isViewMode()
                    ? <Button className="m-2" key={"btn-edit"} type="button" onClick={handleOnEditClick} >Edit Information</Button>
                    : <Button className="m-2" key={"btn-save"} type="submit" variant="success">Save Changed</Button>
            }
        </div>
    );

}