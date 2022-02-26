const App = require("./App");



class User
{
    constructor({
        _id,
        app,
        envs,
        searchName,
        displayName,
        data,
    })
    {
        if (_id)
        {
            this._id = _id;
        }

        if (app)
        {
            this.app = new App(app);
        }

        this.envs = (envs) ? envs : [process.env.STAGE];
        this.searchName = searchName;
        this.displayName = displayName;
        this.data = (data) ? data : {};
    }
}



module.exports = User;
