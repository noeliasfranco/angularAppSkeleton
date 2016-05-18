var express = require('express'),
	http = require('http'),
	app = express(),
	cons = require('consolidate'),
	path = require('path'),
    fs = require('fs');

app.mcpGlobals = {};

app.mcpGlobals.log = {
    debug: console.log,
    info: console.info,
    error: console.error,
    warn: console.warn
};

global.mcpGlobals = app.mcpGlobals;  


var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization, X-Requested-With');

    next();
};

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	
	//Not using an engine, so set the view as HTML
	app.engine('html', cons.swig);
	app.set('view engine', 'html');
	app.set('views', express.static(path.join(__dirname, '../public')));
	
	app.locals.pretty = true;
	
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: 'super-duper-secret-secret' }));
	app.use(express.methodOverride());
    app.use(allowCrossDomain);
	app.use(express.static(path.join(__dirname, '../public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){

	console.log("Express server listening on port " + app.get('port'));

})