var express = require('express');

var experssHDS = require('express-handlebars')

var app2 = express()
var app = express()
app.engine('handlebars',experssHDS({
   layoutsDir:__dirname + '/views/layouts',
   defaultLayout:'main'
}))
app.set('view engine','handlebars')
app.get('/',function (request,response){
   response.render('home');
});
app.get('/mainpage',function (request,response){
   response.render('homepage');
});





app.post('/login',function (request,response) {

});
app.listen(process.env.PORT || '8081')
