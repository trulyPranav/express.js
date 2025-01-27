const express = require('express');
const app = express();
const PORT = 8000;

const statusRoutes = require('./routes/status');
const idRoutes = require('./routes/id');

app.use(express.json());

app.use('/', statusRoutes);
app.use('/', idRoutes);

app.get('/', (req, res) => {
    res.send('Main Page!');
});

app.listen(PORT, 
    () => console.log(`Server active on http://localhost:${PORT}`)
);