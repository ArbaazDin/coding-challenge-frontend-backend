import jwt from "jsonwebtoken";

const secretKey = "Sjis6789GGvda";

export const generateUserJwt = (userId, name, email) => {
    return jwt.sign({ userId: userId, name: name, type: "USER", email: email }, secretKey, { expiresIn: '30d' });
}