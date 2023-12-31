export const getUserData = () => {
    if (sessionStorage.getItem("accessToken")) {
        return {
            email: sessionStorage.getItem("email"),
            _id: sessionStorage.getItem("_id"),
            accessToken: sessionStorage.getItem("accessToken"),
        };
    }

    return null;
};

export const setUserData = (data) => {
    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem("_id", data._id);
    sessionStorage.setItem("accessToken", data.accessToken);
};

export const clearUserData = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("_id");
    sessionStorage.removeItem("accessToken");
};
