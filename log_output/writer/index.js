const fs = require('fs');
const crypto = require('crypto');

const randomString = crypto.randomBytes(16).toString('hex');
const file = '/shared/output.txt';

setInterval(() => {
    const timestamp = new Date().toISOString();
    const line = `${timestamp}: ${randomString}\n`;

    fs.writeFileSync(file, line);

    console.log(line.trim());
}, 5000);