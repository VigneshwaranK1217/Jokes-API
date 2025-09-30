import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.post("/category-select", async (req, res) => {
    const response = req.body;
    const APIresponse = await axios.get(`https://v2.jokeapi.dev/joke/${response.jokes}`);
    const data = APIresponse.data;

    res.render("jokes.ejs", {
        setup: data.setup,
        delivery: data.delivery,
        joke: data.joke
    })
    
    console.log(APIresponse.data);
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});