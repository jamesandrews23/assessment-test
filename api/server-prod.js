const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes/Router');
const cors = require('cors');
const path = require("path");

app.use(bodyParser.json());

app.use(cors());
app.use('/api', router);
app.use(express.static(path.join(__dirname, "../ui/dist/")));
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../ui/dist/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port::${PORT}`);
});
