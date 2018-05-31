const queries = require('../src/queries');
function getAll(req, res, next) {

  queries.SelectQuery(req, res, next);
}

module.exports = {
  getAll: getAll
};