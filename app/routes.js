/**================================================================ 
            History Of The File 
    Author          - Gunjan Patel 
    purpose         - Writing - API all Routes are handled, with passport auth.
==================================================================== **/
var fs = require("fs");
const ENV = require('../config/environment');
const config = require('../config/config-'+ENV.env+'.json');
var jwt    = require('jsonwebtoken');
var loginController = require('../controllers/loginController');
var User = require('./models/users');


module.exports = function(app) {    

    app.all('/*', function(req, res, next){
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'my-header,X-Requested-With,content-type,Authorization,cache-control');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    })

    // HOME PAGE (with login links)
    app.get('/', function (req, res) {
        res.send('OK');
    });

    //User related APIs
    app.post('/register', loginController.addUser);    
    app.post('/login', loginController.loginUser);   
    app.get('/users', isLoggedIn, loginController.getUsers);
    
};

function isLoggedIn(req, res, next){

        // check header or url parameters or post parameters for token
        var token = req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'Authantication fail.'
            });

        }
}