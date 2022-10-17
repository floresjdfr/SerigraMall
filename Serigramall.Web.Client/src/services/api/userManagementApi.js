import ApiCore from "./utilities/core";

const url = "UserManagement";

const userManagementApi = new ApiCore({
    url,
    patch: true
});

export default userManagementApi;