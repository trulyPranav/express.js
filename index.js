const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Main Page!');
});

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

app.get('/id', (req, res) => {
    res.status(200).send({
       message: "Enter valid ID"
    });
});

app.get('/id/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).send({
            message: "Enter Valid ID"
        });
    }
    res.status(200).send({
        id: id
    });
});

app.listen(PORT, 
    () => console.log(`Server active on http://localhost:${PORT}`)
);