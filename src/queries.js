const psql = require ('../DAO/dbPostgres');
const connectionPsql = psql.connection;

function SelectQuery(req, res, next) {
    const query = "select * from medico";
    connectionPsql.any(query)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message : 'Retrieved List'
                });
        })
        .catch(function(err){
            return next(err);
        })
}

module.exports = {
    SelectQuery:SelectQuery
};