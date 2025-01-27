const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    res.status(200).send({
        status: 'Healthy Get'
    })
});

router.post('/post-status', (req, res) => {
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

module.exports = router;