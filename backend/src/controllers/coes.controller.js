const db = require("../config/database");

exports.createClient = async (req, res) => {
	const { name, adress, cpf_cnpj } = req.body;
	try {
		const { rows } = await db.query(
			"INSERT INTO cliente (name, adress, cpf_cnpj) VALUES ($1, $2, $3)" ,
			[name, adress, cpf_cnpj]
		);
		res.status(201).send({
			message: "Cliente fisico adicionado com êxito",
			body: {
				cliente: { name, adress, cpf_cnpj},
			},
		});	
	} catch (error) {
		console.error('createPF', error);
		res.status(500).send({
			message: "Ocorreu um erro."
		});
	}
};

exports.listAllClients = async (req, res) => {
	try {
		const { rows } = await db.query(`
			SELECT name, adress, cpf_cnpj
			FROM cliente ORDER BY id desc
		`);
		res.status(200).send(rows);
	} catch (error) {
		console.error('listAllClient', error);
		res.status(500).send({
			message: "Ocorreu um erro ao listar os clientes fisicos."
		});
	}
 };
 exports.findClientById = async (req, res) => {
	const { id } = req.params;
	try {
		const { rows } = await db.query(`
			SELECT id, name, cpf_cnpj, adress
			FROM cliente
			WHERE id = $1`,
		[id]
		);
		if (!rows.length) {
			throw 'cliente_not_found';
		  }
		  res.status(200).send(rows[0]);
	} catch (error) {
		  console.error('findClientById', error);
		  if (error == 'cliente_not_found') {
			res.status(404).send({
			  message: "cliente not found."
			});
		  } else {
			res.status(500).send({
			  message: "Ocorreu um erro."
			});
		}
	}
 };

exports.updateClientById = async (req, res) => {
	const { id } = req.params;
	try {
	  const { name, cpf_cnpj, adress, id } = req.body;
	  const { rows } = await db.query(`
	  	UPDATE 	pessoa_fisica 
		SET 	name = $1, 
				cpf_cnpj = $2, 
				adress = $3, 
		WHERE 	id = $4`,
		[name, cpf_cnpj, adress, id]
	  );
	  res.status(200).send({ message: "Client Updated Successfully!" });
	} catch (error) {
	  console.error('updateClientaById', error);
	  res.status(500).send({
		message: "Ocorreu um erro."
	  });
	}
};

exports.deleteClientById = async (req, res) => {
	const { id } = req.params;
	try {
	  await db.query("DELETE FROM cliente WHERE id = $1", [id]);
	  res.status(200).send({ message: "Client deleted successfully!" });
	} catch (error) {
	  console.error('deleteClientById', error);
	  res.status(500).send({
		message: "Ocorreu um erro."
	  });
	}
};

  
exports.createPatient = async (req, res) => {
	const {age, name , cpf, adress} = req.body;

	try{
		const { rows } = await db.query(
			"INSERT INTO paciente (age, name , cpf, adress) VALUES ($1, $2, $3, $4) ",
			[age, name , cpf, adress]
		);
		res.status(201).send({
			message: "patient has been successfully registered",
			body: {
				cliente: { age, name , cpf, adress},
			},
		});
	}catch (error){
		console.error('createPatient', error);
		res.status(500).send({
			message: "Ocorreu um erro."
		});
	}
};

exports.listAllPatients = async (req, res) => {
	try{
		const { rows } = await db.query(`
			SELECT *
			FROM paciente
		`);
		res.status(200).send(rows);
	} catch(error) {
		console.error('listAllPatients', error);
		res.status(500).send({
			message: "Ocorreu um erro ao listar os clientes fisicos."
		});
	}
};

exports.findPatientById = async (req, res) => {
	const { id } = req.params;
	try{
		const { rows } = await db.query(`
			SELECT 	*
			FROM 	paciente
			WHERE 	patient_id = $1`,
			[id]
			);
			if(!rows.length){
				throw 'patient_not_found';
			}
			res.status(200).send(rows[0]);
	} catch (error) {
		console.error('findPatientById', error);
		if(error == 'patient_not_found'){
			res.status(404).send({
				message: "Patient not found."
			});
		} else {
			res.status(500).send({
				message: "Ocorreu um erro."
			});
		}
	}
};

exports.updatePatientById = async (req, res) => {
	const { id } = req.params;
	try{
		const {name, cpf, adress, age} = req.body;
		const { rows } = await db.query(`
			UPDATE 	paciente
			SET 	name = $1,
					cpf = $2,
					adress = $3,
					age = $4
			WHERE 	patient_id = $5`,
			[name, cpf, adress, age, id]
		);
		res.status(200).send({ message: "Patient Update Successfully!" });
	} catch(error){
		console.error('updatePatientById', error);
		res.status(500).send({ 
			message: "Ocorreu um erro."
		});
	}
};

exports.deletPatientById = async (req, res) => {
	const { id } = req.params;
	try {
		await db.query(`DELETE FROM paciente WHERE patient_id = $1`, [id]);
		res.status(200).send({
			message: "Employye delet successfully!"
		})
	} catch (error) {
		console.error('deletePatientById', error);
		res.status(500).send({
			message: "Ocorreu um erro."
		});
	}
};