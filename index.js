const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000;


//view engine setup
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");
app.use(express.static("views"))

//Routing Setup
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listing on port ${port}`);
});