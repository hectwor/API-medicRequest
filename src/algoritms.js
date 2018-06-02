const queries = require('../src/queries');
function getAll(req, res, next) {

  queries.SelectQuery(req, res, next, "medico", "");
}

function setDate(req, res, next){
  let jsonR = req.body;
  console.log(jsonR);
  let  values = "('"+
      jsonR.fecha+"', '"+
      jsonR.hora+"', "+
      jsonR.id_medico+", "+
      jsonR.id_paciente+")";

  queries.InsertQueryCita(req, res, next, "cita", values);
}

function existPatient(req, res, next){
  let dni = req.params.dniPatient;
    queries.SelectQuery(req, res, next, "paciente", "dni_paciente = '"+dni+"'");
}
function createPatient(req, res, next){
  let jsonR = req.body;
  let  values = "( default, '"+
      jsonR.numero_seguro_social+"', '"+
      jsonR.nombre+"', '"+
      jsonR.apellido+"', '"+
      jsonR.domicilio+"', '"+
      jsonR.provincia+"', '"+
      jsonR.telefono+"', '"+
      jsonR.numero_historial_clinico+"', '"+
      jsonR.observaciones+"', '"+
      jsonR.dni+"')";

    queries.InsertQueryCita(req, res, next, "paciente", values);
}
module.exports = {
  getAll: getAll,
    setDate: setDate,
    existPatient:existPatient,
    createPatient:createPatient
};