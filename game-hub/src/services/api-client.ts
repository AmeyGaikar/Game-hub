import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: 'dd1d14b41ba54a22a66a987fbf16ed22'
    }
})