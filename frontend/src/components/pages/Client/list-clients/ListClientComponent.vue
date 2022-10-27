<template>
	<div>
	  <h3 class="text-center">Lista de Clientes</h3>
	  <table class="table table-striped">
		<thead>
		  <tr>
			<th class="text-center">Nome</th>
			<th class="text-center">Endereço</th>
			<th class="text-center">Cpf | Cnpj</th>
			<th class="text-center">Ações</th>
		  </tr>
		</thead>
		<tbody class="text-center">
		  <tr v-for="client in clients" :key="client.client_id">
			<td>{{ client.name }}</td>
			<td>{{ client.adress }}</td>
			<td>{{ client.cpf_cnpj }}</td>
			<td>
			  <router-link
				:to="{ name: 'update', params: { id: client.client_id } }"
				class="btn btn-success">
				<font-awesome-icon :icon="['fas', 'user-edit']" /> Editar
			  </router-link>
			</td>
			<td>
			  <button @click="removeClient(client.client_id)" class="btn btn-danger">
				<font-awesome-icon :icon="['fas', 'trash']" /> Deletar
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
  </template>
  
  <script src="./ListClient.js"></script>
  
  <style src="" scoped></style>
  