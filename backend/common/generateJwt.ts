import jwt from "jsonwebtoken";

const secretKey = "A723678klnvdfk32";

export const generateUserJwt = (userId, name, email) => {
    return jwt.sign({ userId: userId, name: name, type: "USER", email: email }, secretKey, { expiresIn: '30d' });
}