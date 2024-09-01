const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;


app.use('/', require('./routes/parser'));

app.listen(port, () => {
    console.log(`Successfully connected to chatbox at: ${port}`);
  });