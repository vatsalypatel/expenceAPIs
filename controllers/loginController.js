/**================================================================ 
            History Of The File 
    Author          - Vatsaly Patel 
    purpose         - Writing - Login Related APIs Operation handling
==================================================================== **/
let User = require("../app/models/users");
let ENV = require("../config/environment");
let config = require("../config/config-" + ENV.env + ".json");
var jwt    = require('jsonwebtoken');



module.exports = {
    addUser: function (req, res) {
        var data = {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        User.find({ email: data.email }).then(function (list) {
            if (list.length)
                return res.status(400).send({ status: false, message: "User Already Exists." });
            else {
                var newUser = new User({ 
                    email : data.email,
                    password : data.password,
                    firstName : data.firstName,
                    lastName : data.lastName
                  });
                newUser.save(function (err, user) {
                    if (err)
                        return res.status(400).send({ status: false, message: JSON.stringify(err) });
                    else
                        return res.status(200).send({ status: true, message: "User added successfully" });
                });
            }
        })
    },
    loginUser: function (req, res) {

        // find the user
        User.findOne({
            email: req.body.email
        }, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {

                // check if password matches
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {

                    // if user is found and password is right
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = {
                        userId: user._id
                    };
                    var token = jwt.sign(payload, config.secret, {
                        expiresIn: 5100 // expires in 12 months
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        token: token
                    });
                }

            }

        });
    },
    getUsers : function(req, res){
        User.find({}).then(function(list){
            res.send({data : list, status : true});
        })
    }

}