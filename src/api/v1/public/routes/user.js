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


// Controllers
//const { UserController } = require("../../../../js/controllers");


// Validation
const {
    validateRegisterUserPayload,
} = require("../validation");


// Response
const {
    Success,
    ValidationError,
    BadRequest,
    InternalServerError,
    NotImplemented,
} = require("dotnet-responses");





/********
 * GETS *
 ********/

/*
app.get("/", function(req, res)
{
});
*/





/*********
 * POSTS *
 *********/

app.post("/register", function(req, res)
{
    validateRegisterUserPayload(req.body)
    .then(function (payload)
    {
        // TODO: Get app from app microservice
        /*
         * TODO:
         * 1. Get app from app microservice
         * 2. insertOne user with app information using UserController
         * 3. Send success response with message: `Successfully created a user (named req.body.username || with email of req.body.email)`
         */
        Success.json({
            res,
            message: "Validation succeeded!",
            data: payload,
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





/***********
 * PATCHES *
 ***********/

/*
app.patch("/", function(req, res)
{
});
*/





/***********
 * DELETES *
 ***********/

/*
app.delete("/", function(req, res)
{
});
*/





module.exports = app;
