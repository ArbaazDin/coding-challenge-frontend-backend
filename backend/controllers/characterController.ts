import express from "express";
import { validateJwt } from '../common/validateJwt'
import { factory } from "../factory";

export const characterRoute = express.Router();

var lastFetchedTime;
var lastFetchedData;

characterRoute.get("/character", validateJwt, async (request: express.Request, response: express.Response) => {
    try {
        // If first request or time difference is greater than 10 minutes since last fetch, 
        // Then only fetch data from actual endpoint, otherwise send cached data
        if (!lastFetchedTime || Date.now() - lastFetchedTime > 600000) {
            const result = await factory.getCharacterRepository().getAllCharacters();
            lastFetchedData = result.data;
            lastFetchedTime = Date.now();
        }

        response.status(200).json({
            status: "SUCCESS",
            data: lastFetchedData
        });
        return;

    } catch (error) {
        response.status(500).json({
            status: "FAILED",
            message: error.message
        });
        return;
    }

})