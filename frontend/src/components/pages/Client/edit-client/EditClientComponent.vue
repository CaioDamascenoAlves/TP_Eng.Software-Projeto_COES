<template>
	<div class="container">
	  <div class="card">
		<div class="card-header">
		  <h3>Update Client</h3>
		</div>
		<div class="card-body">
		  <form v-on:submit.prevent="updateFormClient()">
  
			<!--INÍCIO DO BLOCO: Client Name-->
			<div class="form-group">
			  <label class="font-weight-bold">Client Name</label>
			  <input
				type="text"
				id="name"
				name="name"
				class="form-control"
				v-model="clientForm.name"
			  >
			</div>
			<!--FIM DO BLOCO: Client Name-->
  
			<!--INÍCIO DO BLOCO: Adress-->
			<div class="form-group">
			  <label class="font-weight-bold">Adress</label>
			  <input
				type="text"
				id="adress"
				name="adress"
				class="form-control"
				v-model="clientForm.adress"
			  >
			</div>
			<!--FIM DO BLOCO: Adress-->
  
			<!--INÍCIO DO BLOCO: CPF-->
			<div class="form-group">
			  <label class="font-weight-bold">Cpf | Cnpj</label>
			  <input
				type="number"
				id="cpf_cnpj"
				name="cpf_cnpj"
				class="form-control"
				v-model="clientForm.cpf_cnpj"
			  >
			</div>
			<!--FIM DO BLOCO: CPF-->
			<div class="form-group">
			  <button type="submit" class="btn btn-primary">
				<font-awesome-icon :icon="['fas', 'user-edit']"/> Update
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </template>
  
  <script src="./EditClient.js"></script>
  
  <style src="" scoped></style>
s  