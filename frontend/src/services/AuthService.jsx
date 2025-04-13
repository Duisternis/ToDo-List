import axios from "axios";

const api = "http://localhost:5039/api";

export const loginAPI = async (username, password) => {
    try {
        console.log(username, password);
        const data = await axios.post(`${api}/account/login`, { 
            username: username,
            password: password,
        });
        return data;
    } catch (error) {
        throw error;
    }
};

export const registerAPI = async (username, email, password) => {
    try {
        const data = await axios.post(`${api}/account/register`, { 
            username: username,
            email: email,
            password: password,
        });
        return data;
    } catch (error) {
        throw error;
    }
};