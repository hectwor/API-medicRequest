const queries = require('../src/queries');
function getAllDoctors(req, res, next) {
  queries.SelectQuery(req, res, next, "medico", "");
}

function getAllPatients(req, res, next) {
    queries.SelectQuery(req, res, next, "paciente", "");
}
function getAllDates(req, res, next) {
    queries.SelectQuery(req, res, next, "cita", "");
}

function setDate(req, res, next){
  let jsonR = req.body;
  console.log(jsonR);
  let  values = "('"+
      jsonR.fecha+"', '"+
      jsonR.hora+"', "+
      jsonR.id_medico+", "+
      jsonR.id_paciente+")";

  queries.InsertQuery(req, res, next, "cita", values);
}

function existPatient(req, res, next){
  let dni = req.params.dniPatient;
    queries.SelectQuery(req, res, next, "paciente", "dni_paciente = '"+dni+"'");
}
function createPatient(req, res, next){
  let jsonR = req.body;
  let  values = "(default, '"+
      jsonR.numero_seguro_social+"', '"+
      jsonR.nombre+"', '"+
      jsonR.apellido+"', '"+
      jsonR.domicilio+"', '"+
      jsonR.provincia+"', '"+
      jsonR.telefono+"', '"+
      jsonR.numero_historial_clinico+"', '"+
      jsonR.observaciones+"', '"+
      jsonR.dni+"')";
    queries.InsertQueryBackup(req, res, next, "paciente", values);
    queries.InsertQuery(req, res, next, "paciente", values);
}
module.exports = {
    getAllDoctors: getAllDoctors,
    getAllPatients: getAllPatients,
    getAllDates:getAllDates,
    setDate: setDate,
    existPatient:existPatient,
    createPatient:createPatient
};
