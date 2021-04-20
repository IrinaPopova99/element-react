import instance from "./instance";

export const AuthAPI = {
    authUser(username, password) {
        return (
            instance.post('/token/obtain/', {
                username,
                password
            }).then((res) => {
                instance.defaults.headers['Authorization'] = "JWT " + res.data.access;
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                return res.data.jwt;
            })
        );
    },
    logoutUser(token) {
        return (
            instance.post('blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            }).then((res) => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                instance.defaults.headers['Authorization'] = null;
                return res.data.jwt;
            })
        );
    }
};