const app = require('express')();
const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`Server live on http://localhost:${PORT}`)
);