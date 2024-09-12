import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/create", (req, res) => {
    res.render("create.ejs");
});

router.post("/create", (req, res) => {
    const createdPost = req.body;
    console.log(createdPost);
    res.render("home.js", { createdPost });
});


router.get("*", (req, res) => {
    res.render("404.ejs");
});

export default router;