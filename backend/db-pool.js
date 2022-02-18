
const Pool = require('pg').Pool
const pool = new Pool({

    user: process.env.POSTGRES_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.PORT,
});

export default pool;
