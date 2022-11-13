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
    validateRegisterUserPayload,
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





/********
 * GETS *
 ********/

// TODO: Get user info (minus sensitive info like password) endpoint

/*
app.get("/", function(req, res)
{
});
*/





/*********
 * POSTS *
 *********/

// TODO: Login endpoint

// TODO: Logout endpoint

app.post("/register", function(req, res)
{
    validateRegisterUserPayload(req.body)
    .then(function (payload)
    {
        AppMicroservice.v1.get({ searchName: payload.app["search-name"] })
        .then(async function (result)
        {
            const [ app ] = result.data.data || [{}];
            const { password } = req.body.user;
            const encryptedPassword = await _encryptPassword(password);

            UserController.insertOneIfNotExists({
                // Don't insert the user if a document with this information already exists
                "app._id": app._id,
                "app.env": req.body.app.env,
                "$or": _getOrSearchForUser(req.body.user),
            }, {
                // User to insert
                ...req.body.user,
                password: encryptedPassword,
                app: {
                    "_id": app._id,
                    env: app.env,
                },
            })
            .then((result) => _sendUserRegisterSuccess(res, result, req.body.user))
            .catch((err) => _sendUserRegisterError(res, err, req.body.user));
        })
        .catch((err) => _sendAppMicroserviceError(req, res, err, "retrieving"));
    })
    .catch(function (err)
    {
        ValidationError.json({
            res,
            error: err,
        });
    });
});

async function _encryptPassword(password)
{
    return await bcrypt.hash(password, saltRounds);
}

function _getOrSearchForUser(user)
{
    const orSearch = [];

    if (user.username) {
        orSearch.push({
            username: user.username,
        });
    }

    if (user.email) {
        orSearch.push({
            email: user.email,
        });
    }

    return orSearch;
}

function _getUserDescriptor(user)
{
    let output = ``;

    if (user.username && user.email)
    {
        output += ` with a username of ${user.username} and an email of ${user.email}`;
    }

    else if (user.username)
    {
        output += ` with a username of ${user.username}`;
    }
    
    else if (user.email)
    {
        output += ` with an email of ${user.email}`;
    }

    return output;
}

function _sendUserRegisterSuccess(res, result, user)
{
    const withAValueOf = _getUserDescriptor(user);

    Success.json({
        res,
        message: `Successfully registered a user${withAValueOf}.`,
        data: result,
    });
}

function _sendUserRegisterError(res, err, user)
{
    const withAValueOf = _getUserDescriptor(user);

    const errMsg = `Failed to register a user${withAValueOf}`;
    logger.error(errMsg, err);

    const nestedErrMsg = (err.error.name === "DocumentAlreadyExistsError")
        ? `User cannot be inserted because another user with the given username and/or email already exists in the app with the given environment`
        : err.error.message;

    InternalServerError.json({
        res,
        message: errMsg,
        error: {
            name: err.error.name,
            message: nestedErrMsg,
        },
    });
}





/***********
 * PATCHES *
 ***********/

// TODO: Update user info endpoint

/*
app.patch("/", function(req, res)
{
});
*/





/***********
 * DELETES *
 ***********/

// TODO: Delete user endpoint

/*
app.delete("/", function(req, res)
{
});
*/





/***********
 * HELPERS *
 ***********/

function _sendAppMicroserviceError(req, res, err, verbing = "creating")
{
    const statusCode = (err && err.response && err.response.status)
        ? err.response.status
        : 500;

    if (statusCode !== 500)
    {
        const Response = getResponseByStatusCode(statusCode);

        Response.json({
            res,
            message: (statusCode === 422)
                ? "App validation error"
                : err.response.data.message,
            error: err.response.data.err,
        });
    }

    else
    {
        const errMsg = `An unknown error occurred while ${verbing} an app`;
        logger.error(errMsg, err.response.data.error || err, req.query, err.response.data);

        InternalServerError.json({
            res,
            message: errMsg,
            data: req.query,
            error: err.response.data.error || err,
        });
    }
}





module.exports = app;
