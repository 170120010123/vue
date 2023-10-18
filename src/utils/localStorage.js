

module.exports = {

    getToken() {
        return window.localStorage.getItem("token");
    },

    setToken(token) {
        window.localStorage.setItem("token", token);
    },
    clearToken() {
        window.localStorage.removeItem("token");
    },
    getItem(key) {
        return window.localStorage.getItem(key);
    },
    setItem(key, value) {
        return window.localStorage.setItem(key, value);
    }
}