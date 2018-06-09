const psql = require ('../DAO/dbPostgresAMAZON');
const psqlBackup = require ('../DAO/dbPostgresAZURE');
const connectionPsql = psql.connection;
const connectionPsqlBackup = psqlBackup.connection;

function SelectQuery(req, res, next, table, where) {
    let whereF = "";
    if (where !== "") whereF = "where "+where;
    const query = "select * from "+" "+table+" "+whereF;
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
            if(err){
                connectionPsqlBackup.any(query)
                    .then(function(data){
                        res.status(200)
                            .json({
                                status : 'success',
                                data:data,
                                message : 'Retrieved List'
                            });
                    });
            }
            return next(err);
        });
}

function InsertQuery(req, res, next, table, values){
    const query = "insert into "+table+" values "+values;
    connectionPsql.any(query)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message : 'Retrieved List'
                });
        })
        .catch(function (err) {
            return next(err);
        });
    connectionPsqlBackup.any(query)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message : 'Retrieved List'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
module.exports = {
    SelectQuery:SelectQuery,
    InsertQuery:InsertQuery
};