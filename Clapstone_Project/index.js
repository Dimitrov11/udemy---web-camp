import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/create", (req, res) => {
    const createdPost = req.body;
    console.log(createdPost);
    res.render("index.js", { createdPost });
});

app.listen(PORT, () => console.log(`The server listen on ${PORT}...`));
