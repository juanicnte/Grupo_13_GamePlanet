const express = require('express');
const {resolve} = require('path');
const app = express();
const public = path.resolve(__dirname, '../public');
app.use(express.static(public)) 
app.listen(process.env.PORT || 3030, () => {
    console.log('servidor corriendo...');
});

app.get ('/', (req, res) => {
    res.sendFile(resolve(__dirname, './views/home.html'));
});

app.get("/register", function (req, res) {
    res.sendFile(resolve(__dirname, './views/register.html'));
});

app.get("/login", function (req, res) {
    res.sendFile(resolve(__dirname, './views/login.html'));
});

app.post("/", function (req, res) {
    res.sendFile(resolve(__dirname, './views/home.html'));
});