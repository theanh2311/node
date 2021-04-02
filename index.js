var express = require('express');

var experssHDS = require('express-handlebars')


var app = express()
app.engine('handlebars',experssHDS({
   layoutsDir:__dirname + '/views/layouts',
   defaultLayout:'main'
}))
app.set('view engine','handlebars')
app.get('/',function (request,response){
   var dulieu = 'heloo';
   var arr = [2,3,4,6,7,3,1,5,76];
   response.render('home',{title:dulieu});
});

app.post('/login',function (request,response) {

});
app.listen(process.env.PORT || '8081')
