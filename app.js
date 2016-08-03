var express = require('express');
var app = express();
var port    =   process.env.PORT || 3000;

var router = express.Router();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// app.use(express.static( __dirname + 'public'));

app.get('/', function(req, res){
	res.render(__dirname  + '/views/index.jade')
});

router.route('/')
	.get(function(req, res){
		res.send('Hello Books')
	});

	app.use('/about',router);

// app.get('/about', function(req, res){
// 	res.render(__dirname  + '/views/about.jade')
// });

app.get('/home', function(req, res){
	res.send('Hello Home!')
});
app.listen(port,function(){
	console.log('Server started...');
});