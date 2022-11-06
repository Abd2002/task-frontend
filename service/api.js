import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.5.106:4000/api/admin/",
});