const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/convert-password', (req, res) => {
    try {
        const password = req.body.password;
        const parts = password.split('"');
        const escapedParts = parts.map(part => part + '\\');
        const sifrexd = escapedParts.join('"').slice(0, -1);

        res.json({ convertedPassword: sifrexd });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
