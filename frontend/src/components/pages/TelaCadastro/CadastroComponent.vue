<template>
<div>
    <div class="">
       
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Ficha de Cadastro</h1>
                    </div>
                </div>
				

                <div class="input-group">
					
                    <div class="input-box">
                        <label for="name">Nome do Cliente</label>
                        <input id="name" type="text" name="name" placeholder="Digite seu Nome" required>
                    </div>

                    <div class="input-box">
                        <label for="id">CPF / CNPJ do Cliente</label>
                        <input id="id" type="text" name="id" placeholder="Digite seu CPF ou CNPJ" required>
                    </div>
                    <div class="input-box">
                        <label for="Endereço">Endereço</label>
                        <input id="adress" type="text" name="adress" placeholder="Digite seu Endereço" required>
                    </div>

                    
                </div>

                <div class="continue-button">
                    <button><a href="#">SALVAR DADOS</a> </button>
                </div>

                <div class="continue-button">
                    <button><a href="#">CONFERIR E ALTERAR DADOS</a> </button>
                </div>

            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style src="@/components/pages/TelaCadastro/assets/css/style.css"">

</style>