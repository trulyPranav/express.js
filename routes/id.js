const express = require('express');
const router = express.Router();

router.get('/id', (req, res) => {
    res.status(200).send({
       message: "Enter valid ID"
    });
});

router.get('/id/:id', (req, res) => {
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

module.exports = router;