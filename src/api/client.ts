import axios from "axios";
axios.defaults.baseURL = "http://34.95.164.203:10020";
// axios.defaults.headers.common["X-Token"] = "";
axios.defaults.headers.common["X-Lang"] = "2";
console.log("x-Token:", axios.defaults.headers.common["X-Token"]);
const client = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,

    setToken: (token: string) => {
        axios.defaults.headers.common["X-Token"] = token;
    },
};

export default client;
