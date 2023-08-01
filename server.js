const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(cors());


const crickApi = require('./routes/CricketAPI');
app.use("/cricket", crickApi);

app.listen(process.env.PORT, () => {
    console.log(`Node Server is running on port : ${process.env.PORT}`)
});