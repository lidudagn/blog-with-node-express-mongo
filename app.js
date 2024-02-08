require('dotenv').config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const PORT = 4000
// const PORT = 5000||process.env.PORT;
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set( 'view engine' , 'ejs');
app.use(express.static('public'))

app.use('/',require('./server/route/main'));
app.listen(PORT, ()=>{
    console.log(`Server is listening on port :${PORT}`)
    });