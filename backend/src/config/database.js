const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) =>{
	console.log('Erro inexperado do lado do cliente', err)
	process.exit(-1);
});

pool.on('connect', () => {
	console.log('Base de Dados Conectada com sucesso!');
});

module.exports = {
	query: (text, params) => pool.query(text, params)
};