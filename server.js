const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    console.log('Hello');
    res.send('Hello')
    res.status(200);
    next();
})

app.post('/bookmarks', (req, res) => {
    console.log("Saved!")
    res.send('Saved!');
    res.status(201);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));