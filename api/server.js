const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes/Router');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());
app.use('/', router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port::${PORT}`);
});

