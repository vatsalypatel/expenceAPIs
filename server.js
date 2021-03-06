/**================================================================ 
            History Of The File 
    Author          - Vatsaly Patel 
    purpose         - Writing - Entry point of server file
==================================================================== **/
let express  = require('express');
const app      = express();
let mongoose = require('mongoose');
var morgan      = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');
let session      = require('express-session');


global.globalError = require("./config/error.json");
global.__parentDir = __dirname;

const configDB = require('./config/database.js');

const ENV = require('./config/environment.js');
const config = require('./config/config-'+ENV.env+'.json');
const port     = process.env.PORT || config.PORT;
const hostIp     = config.HOST_IP || "0.0.0.0";

configDB.connectMongoDB(); // connect to our database



// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)

// use morgan to log requests to the console
app.use(morgan('dev'));

// parse application/json
app.use(bodyParser.json({limit: '500:mb'}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

//static public folder
app.use(express.static('public'))

// required for passport
app.use(session(
	{ 
		secret: 'expencedb_secret',
	    resave: true,
	    saveUninitialized: true
	}
)); // session secret

app.set('superSecret', config.secret); // secret variable

// routes
require('./app/routes.js')(app); // load our routes and pass in our app

// launch
app.listen(port, hostIp);
console.log('The magic happens on port ' + port);

exports = module.exports = app;   