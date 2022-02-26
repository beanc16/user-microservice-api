class App
{
    constructor({
        env,
        searchName,
    })
    {
        this.env = (env) ? env : process.env.STAGE;
        this.searchName = searchName;
    }
}



module.exports = App;
