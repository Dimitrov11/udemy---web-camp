import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Render the home page
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Render the about page
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Step 1: Render the contact page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.listen(port, () =>
    console.log(`The server is listening on port ${port}...`)
);
