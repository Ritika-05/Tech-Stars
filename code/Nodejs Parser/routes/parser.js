const express = require("express")
const router = express.Router()

router.get("/parsedata/:jslink", async (req, res) => {
    try {
        const encodedLink = encodeURIComponent(req.params.jslink);
        const url = `http://127.0.0.1:8000/normalize/?url=https://lite.framacalc.org/${encodedLink}.csv.json`;
        console.log(url)
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let parsedData = await response.json();
        parsedData = await JSON.parse(parsedData);

        res.json(parsedData);



    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error ")
    }
})


module.exports = router