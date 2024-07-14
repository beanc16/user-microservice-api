/************
 * REQUIRES *
 ************/

// Routing
const express = require("express");
const app = express();


// Access req.body in post requests
const bodyParser = require("body-parser");
app.use(bodyParser.json());                         // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Password encryption / decryption
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.BCRYPT_SALT);


// Telemetry
const { logger } = require("@beanc16/logger");


// Microservices
const { AppMicroservice } = require("@beanc16/microservices-abstraction");


// Controllers
const { UserController } = require("../../../../js/controllers");


// Validation
const {
    validateSimpleAuthPayload,
} = require("../validation");


// Response
const {
    Success,
    ValidationError,
    BadRequest,
    InternalServerError,
    NotImplemented,
    getResponseByStatusCode,
} = require("dotnet-responses");
const { getAccessToken } = require("@beanc16/jwt-helpers");





/*********
 * POSTS *
 *********/

app.post("/simple", function(req, res)
{
    validateSimpleAuthPayload(req.body)
    .then(function (payload)
    {
        const token = getAccessToken(payload);
        Success.json({
            res,
            data: {
                token,
            },
        });
    })
    .catch(function (err)
    {
        ValidationError.json({
            res,
            error: err,
        });
    });
});





module.exports = app;
