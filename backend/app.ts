import express from "express";
import cors from "cors";
import { userRouter } from "./routers/userRouter";

const app = express();

const port: any = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (request, response) => {
    response.send("Hello world");
});

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});