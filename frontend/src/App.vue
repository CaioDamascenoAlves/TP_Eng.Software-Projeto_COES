<template>
	
	
    <!--Container Main end-->
	<div id="app">
		
	  <!-- INÍCIO NAVBAR -->
	  <nav class="navbar navbar-expand-sm fs-4">
		<img id="logo" src="../../../assets/img/Logo Temporário 2.png" alt="COES">
		<a class="navbar-brand order-md-first "></a>
		<ul class="navbar-nav mr-auto">
		  <li class="nav-item">
			<router-link class="nav-link " to="/">Home</router-link>
		  </li>
		  <li class="nav-item">
			<router-link class="nav-link" to="/sobre">Sobre Nós</router-link>
		  </li>
		  <li class="nav-item">
			<router-link class="nav-link" to="/atendimento">Atendimento</router-link>
		  </li>
		  <li class="nav-item">
			<router-link class="nav-link" to="/list-clients">Lista de Clientes</router-link>
		  </li>
		  <li class="nav-item">
			<router-link class="nav-link" to="/list-patients">Lista de Pacientes</router-link>
		  </li>
		</ul>
	  </nav>
	  <!-- FIM NAVBAR -->
	  
  
	  <div class="container-fluid" style="">
		<router-view></router-view>
	  </div>
	</div>
  </template>
  
<style scoped>

.navbar{
	background: linear-gradient(to left, #6A82FB, #Fc5c7D);
}
</style>