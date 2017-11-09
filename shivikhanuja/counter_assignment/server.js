var express = require("express");

var session = require('express-session');

var app = express();
app.use(express.static(__dirname +'/static'));
app.set('views',__dirname + '/views');
app.set('view engine' ,'ejs');


app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/',function(request,response){
    response.redirect('/index');
});
app.get('/index', function(request,response){
    var count;
    if (!(request.session.count)){
        request.session.count = 0 ;
    }
        request.session.count ++;
        response.render('index', {count:request.session.count});
});
app.post('/add' , function(request,response){
    request.session.count +=1;
    response.redirect('/index')
});
app.post('/reset', function(request,response){
    request.session.count =0;
    response.redirect('/index')
})


app.listen(8000, function(){
	console.log("listening on port 8000");
});