import express from "express";
export const loginRoute = express.Router();
import { generateUserJwt } from "../common/generateJwt";


loginRoute.post("/login", async (request: express.Request, response: express.Response) => {
    try {

        let userName = request.body.userName;
        let password = request.body.password;

        // #  TODO CHANGE THIS CODE TO ACTUALLY CHECK FOR USERNAME AND PASSWORD FROM DB
        // ALSO SAVE THE PASSWORD IN HASHED FORM IN DB
        if (userName === "arbaazdin@gmail.com" && password === "12345678") {
            response.status(200).json({
                status: "SUCCESS",
                token: generateUserJwt(1, userName, userName)
            });
            return;
        } else {
            throw new Error("Invalid credentials");
        }

    } catch (error) {
        response.status(500).json({
            status: "FAILED",
            message: error.message
        });
        return;
    }

})