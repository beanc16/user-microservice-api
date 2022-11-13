const App = require("./App");



class User
{
    constructor({
        _id,
        app,
        envs,
        email,
        username,
        password,
        legalName,
        chosenName,
        nickname,
        pictureUrl,
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

        if (email)
        {
            this.email = email;
        }

        if (username)
        {
            this.username = username;
        }

        this.password = password;

        if (legalName)
        {
            this.legalName = legalName;
        }

        if (chosenName)
        {
            this.chosenName = chosenName;
        }

        if (nickname)
        {
            this.nickname = nickname;
        }

        if (pictureUrl)
        {
            this.pictureUrl = pictureUrl;
        }

        this.data = (data) ? data : {};
    }
}



module.exports = User;
