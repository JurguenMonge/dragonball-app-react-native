import api from "../lib/axios";

export async function getCharacters() {
    try {
        const { data } = await api.get("/characters?limit=58");
        return data;
    } catch (error) {
        throw new Error(error.response);
    }
}