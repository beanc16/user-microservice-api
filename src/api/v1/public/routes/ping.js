/************
 * REQUIRES *
 ************/

// JWT
const { authenticateTokenServiceToService } = require("@beanc16/jwt-helpers");

// Routing
const express = require("express");
const app = express();


// Response
const { Success } = require("dotnet-responses");





/********
 * GETS *
 ********/

app.get("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});

app.get("/authenticated", authenticateTokenServiceToService, function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/*********
 * POSTS *
 *********/

app.post("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/*******
 * PUT *
 *******/

app.put("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/***********
 * PATCHES *
 ***********/

app.patch("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





/***********
 * DELETES *
 ***********/

app.delete("/", function(req, res)
{
    Success.json({
        res,
        message: "Pong",
    });
});





module.exports = app;
