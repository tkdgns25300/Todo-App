const express = require('express');
const app = express();
const PORT = 5000;


app.listen(PORT, () => {
    console.log(`Serer has started on port ${PORT}`)
})