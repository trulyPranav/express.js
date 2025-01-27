const app = require('express')();
const PORT = 8000;

app.listen(PORT, 
    () => console.log(`Server active on http://localhost:${PORT}`)
);

app.get('/status', (req, res) => {
    res.status(200).send({
        status: 'healthy'
    })
});