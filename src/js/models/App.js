class App
{
    constructor({
        env,
        searchName,
    })
    {
        this.env = (env) ? env : process.env.STAGE;

        if (searchName)
        {
            this.searchName = searchName;
        }
    }
}



module.exports = App;
