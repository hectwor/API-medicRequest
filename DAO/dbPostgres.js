const promise = require('bluebird');
const options = {
    promiseLib: promise
};
const pgp = require('pg-promise')(options);

const urlConnection = 'postgres://postgres:1234@localhost/SoyJorgeSAC';

const cn = pgp(urlConnection);

module.exports={
  connection : cn
};
