const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(bodyParse.json());

app.listen(PORT,function(){
    console.log("Server is running on Port:" + PORT);
})