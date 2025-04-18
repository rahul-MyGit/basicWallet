import express from "express";
import { walletRoutes } from "./routes/index";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use('/api/v1/', walletRoutes )

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
