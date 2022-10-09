const {resolve} = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const start = () => console.log('Starting server...');

app.listen(port,start);
app.use(express.static(resolve(__dirname, '../public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views' , resolve(__dirname, './views'))
const mainRoutes = require('./routes/main.routes'); 
app.use(mainRoutes)