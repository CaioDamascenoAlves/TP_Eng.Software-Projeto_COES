<template>
	<div class="container">
	  <div class="card my-5">
		<div class="card-header">
		  <h3>Cadastro de Clientes</h3>
		</div>
		<div class="card-body">
		  <form v-on:submit.prevent="handleSubmitForm()">
			<!-- INÍCIO BLOCO: client Name -->
			<div class="form-group">
			  <label class="font-weight-bold">Nome</label>
			  <input
				type="text"
				id="name"
				name="name"
				class="form-control"
				placeholder="Type Your Name"
				v-model="clientForm.name"
				:class="{
				  'is-invalid': isSubmitted && $v.clientForm.name.$error,
				}"
			  />
			  <div
				v-if="isSubmitted && !$v.clientForm.name.required"
				class="invalid-feedback"
			  >
				'Client Name' field is required!
			  </div>
			</div>
			<!-- FIM BLOCO: client Name -->
  
			<!-- INÍCIO BLOCO: Adress -->
			<div class="form-group">
			  <label class="font-weight-bold">Endereço</label>
			  <input
				type="text"
				id="adress"
				name="adress"
				class="form-control"
				placeholder="Type Your Adress"
				v-model="clientForm.adress"
				:class="{
				  'is-invalid': isSubmitted && $v.clientForm.adress.$error,
				}"
			  />
			  <div
				v-if="isSubmitted && !$v.clientForm.adress.required"
				class="invalid-feedback"
			  >
				'Adress' field is required!
			  </div>
			</div>
			<!-- FIM BLOCO: Adress -->
  
			<!-- INÍCIO BLOCO: cpf_cnpj -->
			<div class="form-group">
			  <label class="font-weight-bold">Cpf | Cnpj</label>
			  <input
				type="number"
				id="cpf_cnpj"
				name="cpf_cnpj"
				class="form-control"
				placeholder="Type Your Cpf_Cnpj"
				v-model="clientForm.cpf_cnpj"
				:class="{
				  'is-invalid': isSubmitted && $v.clientForm.cpf_cnpj.$error,
				}"
			  />
			  <div
				v-if="isSubmitted && !$v.clientForm.cpf_cnpj.required"
				class="invalid-feedback"
			  >
				'Cpf_Cnpj' field is required!
			  </div>
			</div>
			<!-- FIM BLOCO:Cpf_Cnpj -->
			<div class="form-group">
			  <button @click="submitNewClient" class="btn btn-warning my-2">
				<font-awesome-icon :icon="['fas', 'user-plus']" /> Cliente
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </template>
  
  <script src="./CreateClient.js"></script>
  
  <style src="" scoped></style>
  