const mysql = require('mysql2/promise');

let pool;

async function initializePool() {
    try {
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
        console.log('Conexão realizada com sucesso!');
    } catch (err) {
        console.error('Erro ao iniciar pool:', err.message);
        throw err;
    }
}

async function getDbConnect() {
    if (!pool) {
        await initializePool();
    }
    return pool;
}

async function executeQuery(sql, params = []) {
    try {
        const connection = await getDbConnect();
        const [rows] = await connection.execute(sql, params);
        return rows;
    } catch (err) {
        console.error('Erro ao executar query:', err.message);
        throw err;
    }
}

module.exports = {
    initializePool,
    getDbConnect,
    executeQuery,
};




// const mysql = require('mysql2/promise');


// async function connect() {
//     try {
//         const connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USERNAME,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//         });
//         console.log('Conexão estabelecida com sucesso!');
//         return connection;
//     } catch (err) {
//         console.error('Erro ao conectar ao MySQL:', err.message);
//         throw err;
//     }
// }



// module.exports = { connect };
