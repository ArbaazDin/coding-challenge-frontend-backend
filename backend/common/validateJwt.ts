import jwt from "jsonwebtoken";

const secretKey = "Sjis6789GGvda";

export const validateJwt = (request, response, next) => {
    try {
        const authHeader = request.header('authorization');

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, secretKey, async (err, userObject) => {
                if (err) {
                    response.status(500).json({
                        status: "ERROR",
                        message: err.message
                    });
                    return;
                } else {
                    request.email = userObject.email;
                    request.userId = userObject.userId;
                    request.name = userObject.name;

                    //TODO check if user exists from database
                    // if (doesUserExist === null) {
                    //     response.status(500).json({
                    //         status: "JWT_INVALID",
                    //         message: "Your session has ended. Please login again."
                    //     });
                    //     return;
                    // }
                }
                next();
            });
        } else {
            response.status(500).json({
                status: "JWT_INVALID",
                message: "Your session has ended. Please login again."
            });
            return;
        }
    } catch (error) {
        console.log("error: ", error);
        next();
    }
};