const express = require('express');
const app = express();
const cors = require('cors') ;
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Serer has started on port ${PORT}`)
})