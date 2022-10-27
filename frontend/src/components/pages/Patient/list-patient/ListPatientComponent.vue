<template>
	<div class="my-5">
	  <h3 class="text-center">Lista Pacientes</h3>
	  <table class="table table-striped">
		<thead>
		  <tr>
			<th class="text-center">Nome</th>
			<th class="text-center">Cpf</th>
			<th class="text-center">Endereço</th>
			<th class="text-center">Idade</th>
			<th class="text-center">Ações</th>
		  </tr>
		</thead>
		<tbody class="text-center">
		  <tr v-for="patient in patients" :key="patient.patient_id">
			<td>{{ patient.name }}</td>
			<td>{{ patient.cpf }}</td>
			<td>{{ patient.adress }}</td>
			<td>{{ patient.age }}</td>
			<td>
			  <router-link
				:to="{ name: 'update', params: { id: patient.patient_id } }"
				class="btn btn-success btn-sm" href="update">
				<font-awesome-icon :icon="['fas', 'user-edit']" /> Editar
			  </router-link>
			</td>
			<td>
			  <button @click="removePatient(patient.patient_id)" class="btn btn-danger btn-sm">
				<font-awesome-icon :icon="['fas', 'trash']" /> Detetar
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
  </template>
  
  <script src="./ListPatient.js"></script>
  
  <style src="" scoped></style>


