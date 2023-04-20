const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

// middleware
app.use(express.json()); // giving us access to req.body so we can get JSON Data.
app.use(cors())


app.listen(port, () => console.log(`Server is running on port ${port}`));
