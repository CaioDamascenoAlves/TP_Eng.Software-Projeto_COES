<template>
	<div class="container-sm ">
	  <div class="card my-5">
		<div class="card-header">
		  <h3>Adiciona Paciente</h3>
		</div>
		<div class="card-body">
		  <form v-on:submit.prevent="handleSubmitForm()">
			<!-- INÍCIO BLOCO: Patient Name -->
			<div class="form-group">
			  <label class="font-weight-bold">Nome</label>
			  <input
				type="text"
				id="name"
				name="name"
				class="form-control"
				placeholder="Type Your Name"
				v-model="patientForm.name"
				:class="{
				  'is-invalid': isSubmitted && $v.patientForm.name.$error,
				}"
			  />
			  <div
				v-if="isSubmitted && !$v.patientForm.name.required"
				class="invalid-feedback"
			  >
				'Patient Name' field is required!
			  </div>
			</div>
			<!-- FIM BLOCO: Patient Name -->
			<!-- INÍCIO BLOCO: Cpf -->
			<div class="form-group">
				<label class="font-weight-bold">Cpf</label>
				<input
				type="any"
				id="cpf"
				name="cpf"
				class="form-control"
				placeholder="Type Your Cpf"
				v-model="patientForm.cpf"
				:class="{
				  'is-invalid': isSubmitted && $v.patientForm.cpf.$error,
				}"
			  />
			  <div
			  v-if="isSubmitted && !$v.patientForm.cpf.required"
			  class="invalid-feedback"
			  >
			  'CPF' field is required!
			</div>
		</div>
		<!-- FIM BLOCO: CPF -->
			<!-- INÍCIO BLOCO: Adress -->
			<div class="form-group">
				<label class="font-weight-bold">Endereço</label>
				<input
				type="text"
				id="adress"
				name="adress"
				class="form-control"
				placeholder="Type Your adress"
				v-model="patientForm.adress"
				:class="{
				  'is-invalid': isSubmitted && $v.patientForm.adress.$error,
				}"
			  />
			  <div
			  v-if="isSubmitted && !$v.patientForm.adress.required"
			  class="invalid-feedback"
			  >
			  'Adress' field is required!
			</div>
		</div>
		<!-- FIM BLOCO: Adress -->

		<!-- INÍCIO BLOCO: Age -->
		<div class="form-group">
		  <label class="font-weight-bold">Idade</label>
		  <input
			type="text"
			id="age"
			name="age"
			class="form-control"
			placeholder="Type Your Age"
			v-model="patientForm.age"
			:class="{
			  'is-invalid': isSubmitted && $v.patientForm.age.$error,
			}"
		  />
		  <div
			v-if="isSubmitted && !$v.patientForm.age.required"
			class="invalid-feedback"
		  >
			'Age' field is required!
		  </div>
		</div>
		<!-- FIM BLOCO: Age -->
		<div class="form-group my-2">
			  <button @click="submitNewPatient" class="btn btn-warning">
				<font-awesome-icon :icon="['fas', 'user-plus']" /> Patient
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </template>
  
  <script src="./CreatePatient.js"></script>
  
<style src="" scoped>
.card-header{
	color: white;
	background: #8f51b3;
}
</style>
  