const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    let output = 'No log file yet';
    let pingCount = '0';

    try {
        output = fs.readFileSync('/shared/output.txt', 'utf8');
    } catch { }

    try {
        pingCount = fs.readFileSync('/shared/ping-count.txt', 'utf8');
    } catch { }

    res.send(`${output}Ping / Pongs: ${pingCount}`);
});

app.listen(3000);