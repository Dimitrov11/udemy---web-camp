import express from "express";
import ejs from "ejs";

const app = express();
const PORT = 3000;

const date = new Date();
const today = date.getDay();
const options = { weekday: "long" };
const todayString = new Intl.DateTimeFormat("en-US", options).format(today);

app.get("/", (req, res) => {
    let type = `${todayString}`;
    let adv = "it's time to work hard!";

    if (type === "Saturday" || type === "Sunday") {
        adv = "it's time to have some fun"
    }
        
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(PORT, () => console.log(`The server listen on port ${PORT}`));
