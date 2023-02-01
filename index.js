const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000;

///Basic Routing until it is fixed
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/', router);

app.listen(port, () => {
    console.log(`Listing on port ${port}`);
})