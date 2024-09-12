import express from "express";
import bodyParser from "body-parser";
import indexRouter from "./routes/index.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`The server listen on ${PORT}...`));
