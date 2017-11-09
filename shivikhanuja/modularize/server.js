var express = require("express"),
    session = require('express-session'),
    app = express(),
    bodyParser = require ('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');


app.use(session({ 
    secret: 'bobcat',
    proxy:true,
    resave: true,
    saveUninitialized: true,
}));

app.use(express.static(__dirname +'/client/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views',__dirname + '/client/views');
app.set('view engine' ,'ejs');

app.listen(6789, function(){
	console.log("listening on port 6789");
})

