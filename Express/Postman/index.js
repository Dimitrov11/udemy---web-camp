import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    //Do something with the data
    res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
    //Deleting
    res.sendStatus(200);
});

app.listen(3000, () => console.log("The server listening on port 3000..."));
