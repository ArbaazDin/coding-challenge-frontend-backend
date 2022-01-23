import axios, { AxiosRequestConfig } from "axios";

export const characterRepository = {

    getAllCharacters() {
        const config: AxiosRequestConfig = {
            headers: {
                "Authorization": "Bearer LydyUGtvZmriz7Yl4Ylg",
            }
        };
        return axios.get('https://the-one-api.dev/v2/character', config);
    }
}