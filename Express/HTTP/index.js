import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h3>About Me</h3><p>Intro</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Contact Us</h2><p>Phone number</p>");
});

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));
