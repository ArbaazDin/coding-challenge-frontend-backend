import axios, { AxiosRequestConfig } from "axios";

export const characterRepository = {

    getAllCharacters() {
        const config: AxiosRequestConfig = {
            headers: {
                "Authorization": "Bearer KQeV0JegBT-ZTcp4JyK6",
            }
        };
        return axios.get('https://the-one-api.dev/v2/character', config);
    }
}