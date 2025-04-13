import axios from "axios";

const api = "http://localhost:5039/api";

export const postNotesAPI = async (content) => {
    try {
        const data = await axios.post(api + "/note", {
            content: content
        });
        return data;
    } catch (error) {
        throw error;
    }
}

export const getNotesAPI = async () => {
    try {
        const data = await axios.get(api + "/note");
        return data;
    } catch (error) {
        throw error;
    }
}

export const deleteNotesAPI = async (id) => {
    try {
        const data = await axios.delete(api + "/note/" + id);
        return data;
    } catch (error) {
        throw error;
    }
}