import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const {fName, lName} = req.body;      
    const userInput = fName.length + lName.length;      

    res.render("index.ejs", { usernameInput: userInput });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
