const psqlBackup = require ('../DAO/dbPostgresAMAZON');
const psql = require ('../DAO/dbPostgresAZURE');
const connectionPsql = psql.connection;
const connectionPsqlBackup = psqlBackup.connection;

function SelectQuery(req, res, next, table, where) {
    let whereF = "";
    if (where !== "") whereF = "where "+where;
    const query = "select * from "+" "+table+" "+whereF;
    connectionPsqlBackup.any(query)
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
               capturarerror();
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

}
function InsertQueryBackup(req, res, next, table, values){
    const query = "insert into "+table+" values "+values;
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
function capturarerror(){
    connectionPsql.any(query)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message : 'Retrieved List'
                });
        });
}
module.exports = {
    SelectQuery:SelectQuery,
    InsertQuery:InsertQuery,
    InsertQueryBackup:InsertQueryBackup
};