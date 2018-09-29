import axios from 'axios';

const url = 'http://localhost:3000/api/users';

export const getMessages = () => {
    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => {throw error})
};

export const postMessage = (data) => {
    return axios.post(url,data)
        .then((response) => response.status === 201)
        .catch((error) => {throw error.response.data});
};

export default {getMessages,postMessage}