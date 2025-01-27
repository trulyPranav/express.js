const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.listen(PORT, 
    () => console.log(`Server active on http://localhost:${PORT}`)
);

app.get('/status', (req, res) => {
    res.status(200).send({
        status: 'Healthy Get'
    })
});

app.post('/post-status', (req, res) => {
    const {check} = req.body;
    if(!check) {
        res.status(418).send({
            message: "Mwone check status post eyy"
        })
    }
    res.send({
        status: "Healthy Post"
    });
});