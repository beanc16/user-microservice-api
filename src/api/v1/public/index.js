/************
 * REQUIRES *
 ************/

// Routing
const express = require("express");
const app = express();





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Endpoints
const { authEndpoints, pingEndpoints, userEndpoints } = require("./routes");
app.use(`/ping`, pingEndpoints);
app.use(`/auth`, authEndpoints);
app.use(`/users`, userEndpoints);





module.exports = app;
