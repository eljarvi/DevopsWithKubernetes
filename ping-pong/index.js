const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const FILE = "/shared/ping-count.txt";

app.get("/pingpong", (req, res) => {
    let counter = 0;

    if (fs.existsSync(FILE)) {
        counter = parseInt(fs.readFileSync(FILE, "utf8")) || 0;
    }
    counter++;

    fs.writeFileSync(FILE, counter.toString());

    res.send(`pong ${counter}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

