const pg = require('pg');

//utilizar as variáveis de ambiente (enviroment) - segunrança
var pool = new pg.Pool({ 
    "user": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "port": process.env.PG_PORT
});

exports.pool = pool;

//configurar essas variáveis de ambiente no arquivo nodemon.json