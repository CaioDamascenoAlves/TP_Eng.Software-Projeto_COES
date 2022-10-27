<template>
<div >
    <div class="container">
        <div class="container"></div>
        <div class="content">
            <div class="text">
                <h2>Atendimento em todo<br><span>O Brasil</span></h2>
                <p>Atendimento Presencial para a região do Médio Piracicaba em Minas Gerais e as demais localidades utilizamos atendimento Remoto.</p>
                <a href="#">SAIBA MAIS SOBRE A COES</a>
            </div>
			<div>
			<li class="mb-2"><a href="#"><img src="@/components/pages/Atendimento/img/facebook.png" alt=""></a></li>
            <li class="my-2"><a href="#"><img src="@/components/pages/Atendimento/img/Linkedin.png" alt=""></a></li>
            <li class="my-2"><a href="#"><img src="@/components/pages/Atendimento/img/whatsapp.png" alt=""></a></li>
            <li class="my-2"><a href="#"><img src="@/components/pages/Atendimento/img/instagram.png" alt=""></a></li>
		</div>
            
        </div>
        <div class="boxImg">
            <img src="@/components/pages/Atendimento/img/emojis.png" alt="" class="img4">
        </div>
		
    </div>
	
</div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.content{
    position:relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content .text{
    position: relative;
    max-width: 600px;
    margin-right: 20px;
}

.content .text h2{
    color: black;
    font-size: 3em;
    margin-bottom: 5px;
    line-height: 3em;
    font-weight: bold;
}

.content .text h2 span{
    font-size: 3.5em;
    color: #595023;
}

.content .text p{
    color: black;
    font-weight: bold;
}

.content .text a{
    display: inline-block;
    margin-top: 55px;
    padding: 15px 75px;
    background: #595023;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
}

.content .text a:hover{
    transform: translateY(-10px);
}

.icons{
    position: absolute;
    bottom: 40px;
    left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icons li{
    list-style: none;
}

.icons li a{
    display: inline-block;
    margin-left: 30px;
    background: #595023;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition:  0.3s ease-in-out;
}

.icons li a:hover{
    background: #f2e6a7;
    transform: translateY(-10px);
}

.icons li a img{
    filter: invert(1);
    transform: scale(0.5);
}

.boxImg{
    position: absolute;
    right: 500px;
    bottom: -50px;
	top: 220px;
}

.boxImg .img4{
    transform: rotate(-15deg);
    max-width: 400px  
}
</style>