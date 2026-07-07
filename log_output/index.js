const crypto = require('crypto');
const express = require('express');

const app = express();
const randomString = crypto.randomUUID();

setInterval(() => {
    console.log(`${new Date().toISOString()}: ${randomString}`);
}, 5000);

app.get('/status', (req, res) => {
    res.json({
        timestamp: new Date().toISOString(),
        randomString
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});