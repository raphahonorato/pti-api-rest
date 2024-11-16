const mysql = require('mysql2/promise');


async function connect() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('Conexão estabelecida com sucesso!');
        return connection;
    } catch (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
        throw err;
    }
}

module.exports = { connect };
