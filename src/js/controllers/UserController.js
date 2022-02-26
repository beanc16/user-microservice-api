const { MongoDbControllerWithEnv } = require("mongodb-controller");
const { User } = require("../models");



class UserController extends MongoDbControllerWithEnv
{
    static collectionName = process.env.COLLECTION_USERS;
    static Model = User;
}



module.exports = UserController;
