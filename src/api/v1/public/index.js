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
const { pingEndpoints, userEndpoints } = require("./routes");
app.use(`/ping`, pingEndpoints);
app.use(`/users`, userEndpoints);





module.exports = app;
