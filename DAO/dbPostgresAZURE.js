const promise = require('bluebird');
const options = {
    promiseLib: promise
};
const pgp = require('pg-promise')(options);

const urlConnection = 'postgres://hectwor@recaudaciones:Admision1@recaudaciones.postgres.database.azure.com/soyjorgesac';

const cn = pgp(urlConnection);

module.exports={
    connection : cn
};
