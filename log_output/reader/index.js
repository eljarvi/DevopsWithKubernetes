const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    try {
        const data = fs.readFileSync('/shared/output.txt', 'utf8');
        res.send(data);
    } catch {
        res.send('No log file yet');
    }
});

app.listen(3000);