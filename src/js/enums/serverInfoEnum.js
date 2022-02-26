// Development environment
const devPort = 8001;
const devBaseUrl = "http://localhost";
const devUrl = `${devBaseUrl}:${devPort}`;

// Production environment
const prodPort = 80;
const prodUrl = "https://api-user-microservice.herokuapp.com";



module.exports = {
    port: (process.env.PORT) ? process.env.PORT : devPort,

    // Development environment
    devPort: devPort,
    devUrl: devUrl,

    // Production environment
    prodPort: (process.env.PORT) ? process.env.PORT : prodPort,
    prodUrl: prodUrl,
};
