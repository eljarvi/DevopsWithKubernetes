const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Todo App</title>
            </head>
            <body>
                <h1>Todo app is running </h1>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});