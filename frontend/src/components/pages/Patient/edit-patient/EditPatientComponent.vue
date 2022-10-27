<template>
	<div class="container">
	  <div class="card">
		<div class="card-header">
		  <h3>Editar Paciente</h3>
		</div>
		<div class="card-body">
		  <form v-on:submit.prevent="updateFormPatient()">
  
			<!--INÍCIO DO BLOCO: Patient Name-->
			<div class="form-group">
			  <label class="font-weight-bold">Nome Paciente</label>
			  <input
				type="text"
				id="name"
				name="name"
				class="form-control"
				v-model="patientForm.name"
			  >
			</div>
			<!--FIM DO BLOCO: Patient Name-->

			<!--INÍCIO DO BLOCO: Adress-->
			<div class="form-group">
			  <label class="font-weight-bold">Endereço</label>
			  <input
				type="text"
				id="adress"
				name="adress"
				class="form-control"
				v-model="patientForm.adress"
			  >
			</div>
			<!--FIM DO BLOCO: Adress-->
  
			<!--INÍCIO DO BLOCO: Cpf-->
			<div class="form-group">
				<label class="font-weight-bold">Cpf</label>
				<input
				type="any"
				id="cpf"
				name="cpf"
				class="form-control"
				v-model="patientForm.cpf"
				>
			</div>
			<!--FIM DO BLOCO: Cpf-->

			<!--INÍCIO DO BLOCO: Age-->
			<div class="form-group">
			  <label class="font-weight-bold">Idade</label>
			  <input
				type="text"
				id="age"
				name="age"
				class="form-control"
				v-model="patientForm.age"
			  >
			</div>
			<!--FIM DO BLOCO: Age-->
  
			<div class="form-group my-2">
			  <button type="submit" class="btn btn-primary">
				<font-awesome-icon :icon="['fas', 'user-edit']"/> Editar
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </template>
  
  <script src="./EditPatient.js"></script>
  
  <style src="" scoped></style>