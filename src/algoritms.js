const queries = require('../src/queries');
function getAll(req, res, next) {

  queries.SelectQuery(req, res, next);
}

function setDate(req, res, next){
  let values = "";
  let jsonR = req.body;
  for (let i in jsonR){
    if (jsonR.hasOwnProperty(i)) {
      values = values + "('"+jsonR[i].fecha+"',"+
          " '"+jsonR[i].hora+"',"+" '"+jsonR[i].id_medico+"',"+
          " '"+jsonR[i].id_paciente+"')";
    }
  }
  queries.InsertQueryCita(req, res, next, values);
}
module.exports = {
  getAll: getAll,
    setDate: setDate
};