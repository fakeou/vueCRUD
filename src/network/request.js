import axios from "axios";

var instance =  axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    timeout: 5000,
})

export default instance