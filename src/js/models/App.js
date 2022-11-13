class App
{
    constructor({
        _id,
        env,
        searchName,
    })
    {
        if (_id)
        {
            this._id = _id;
        }

        this.env = (env) ? env : process.env.STAGE;

        if (searchName)
        {
            this.searchName = searchName;
        }
    }
}



module.exports = App;
