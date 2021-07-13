const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, './frontend/build')));
app.use('/api',require('./api'));

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
});