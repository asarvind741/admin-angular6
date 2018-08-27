const User = require('../models/user.model');
// const Redis = require('../redis');

const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const secret = 'secrettoken';
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const salt = bcrypt.genSaltSync(10);

var options = {
    auth: {
        api_user: 'Arvind741',
        api_key: 'Mahargaine741'
    }
}

var client = nodemailer.createTransport(sgTransport(options));



let signupUser = (req, res) => {
    // console.log("req body", req.body)
    var user3 = new User();

    user3.firstName = req.body.firstName;
    user3.lastName = req.body.lastName;
    user3.email = req.body.email;
    user3.password = bcrypt.hashSync(req.body.password, salt);
    user3.temporaryToken = jwt.sign({
        email: user3.email,
        firstName: user3.firstName
    }, secret, {
        expiresIn: '24h'
    });
    if (!!req.body.firstName || !!req.body.lastName || !!req.body.email || !!req.body.password ) {
        User.findOne({
                email: req.body.email
            }).then((user1, error) => {
                if (!!error) {
                    res.status(401).json({
                        Error: 'Some error occured'
                    });
                } else if (!!user1) {
                    res.status(402).json({
                        Error: 'User already exists with this email'
                    })
                } else {
                    user3.save((err) => {
                        if (err) {
                            res.status(401).json(err);
                        } else {

                            var email = {
                                from: 'staff',
                                to: user3.email,
                                subject: 'Activation Link',
                                text: 'Hello' + user3.firstName + ' ,Thank you for \
                                    registering. Please click on the following link to complete your activation:\
                                    http:localhost:4200/activate/' + user3.temporaryToken,
                                html: 'Hello<strong>' + user3.firstName + '</strong>,<br></br>Thank you for \
                                    registering. Please click on the link below to complete your activation:<br></br>\
                                    <a href = "http://localhost:4200/activate/' + user3.temporaryToken + '">Confirm Your Account</a>'
                            };

                            client.sendMail(email, function (err, info) {
                                if (err) {

                                    console.log("test", err);
                                } else {
                                    console.log('Message sent: ' + info.response);
                                }
                            });

                            res.status(200).json({
                                Success: 'You have registered successfully, Please check your e-mail to activate account'
                            })
                        }
                    })
                }

            })
            .catch(err => {
                console.log("err", err)
                res.status(401).json(err)
            })
    } else {
        res.status(401).json({
            Error: 'All Fields are required'
        })
    }
}

let confirmToken = (req, res) => {
    User.findOne({temporaryToken: req.params.token})
    .then((user)=>{
        var token = user.temporaryToken;
        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                res.status(401).json({Message: 'Activation Link has expired'})
            }
            else if(!user){
                res.status(401).json({Message: 'Activation Link has expired'})
            }
            else {
                user.temporaryToken = false;
                user.active = true
                user.save( (err) => {
                    if(err){
                        res.status(401).json(err)
                    }
                    else {
                        var email = {
                            from: 'staff',
                            to: user.email,
                            subject: 'Activation Link',
                            text: 'Hello' + user.firstName + ' ,Your account has been successfully activated. Welcome',
                            html: 'Hello<strong>' + user.firstName + '</strong>,<br></br><br></br>Your account has been successfully activated.Welcome'
                        };

                        client.sendMail(email, function (err, info) {
                            if (err) {

                                console.log("test", err);
                            } else {
                                console.log('Message sent: ' + info.response);
                            }
                        });

                        res.status(200).json({
                            Success: 'Your account activated...'
                        })
                    }

                })
            }
        })
    })
}

let loginAdmin = (req, res) => {
    if(!!req.body.email && !!req.body.password){
        User.findOne({email: req.body.email})
        .then(user => {
            if(!!user){
                console.log("user", user)
                bcrypt.compare(req.body.password, user.password, (err, result) =>{
                    if(err){
                        res.status(401).json({Error: 'Password does not match'})
                    }
                    else{
                        console.log("res", result)
                        const token = jwt.sign({ email: user.email, lastName: user.lastName }, secret, {
                            expiresIn: '10h'
                        });
                        res.status(200).json({ 'user':user, 'token': token})
                    }
                })
            }
            else if(!user){
                res.status(401).json({Error: 'User not found with this email'})
            }
        })
        .catch(err => {
            res.status(402).json(err)
        })
    }
    else {
        res.status(401).json({ Error: 'Please provide nessary Fileds'})
    }
}

let getUsers = (req, res) => {
    User.find().exec()
    .then((users) => {
        if(!! users) {
            res.status(200).json(users)
        }
        else if(! users){
            res.status(400).json({Message: 'There are no users'})
        }
    })
    .catch((err) => {
        res.status(401).json(err)
    })
}

let editUser = (req, res) => {
    console.log('req', req.body)
    User.findOneAndUpdate({email: req.body.email}, 
        {$set: req.body}, { new: true})
        .then((user) => {
            if(!user){
                res.status(401).json({ Message: "User not found..."})
            }
            else if(!! user){
                res.status(200).json({ Message: 'Updated Successfully'})
            }
        })
        .catch(err => { res.status(401).json(err)})
}

module.exports = {
    signupUser,
    confirmToken,
    getUsers,
    editUser,
    loginAdmin
}