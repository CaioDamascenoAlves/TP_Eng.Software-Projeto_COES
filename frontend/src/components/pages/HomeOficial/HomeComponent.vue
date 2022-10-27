<template>
<div class="container-fluid">
	<div class="">
    <section>
        <div class="circle"></div>
        <div class="content">
            <div class="text">
                <h2>Comece a escutar a geração<span>DESDE CEDO</span></h2>
                <p>Com a COES, a inteligência emocional será o suporte para melhorar e desenvolver o cognitivo de crianças de 5 a 9 anos com  métodos inovadores e revolucionários.</p>
                <a href="/create-clients">CADASTRAR-SE COM A COES</a>
            </div>
        </div>
        
        <div class="boxImg">
            <img src="@/components/pages/HomeOficial/img/rocket.png" alt="" class="img4">
        </div>
    </section>
</div>
</div>
</template>
<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.circle{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: whitesmoke;
    opacity: 0.3;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
    clip-path: circle(50% at bottom right);
}

section{
    position: absolute;
    width: 100%;
    min-height: 100vh;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*background-image:url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGFic3RyYWN0JTIwYmx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);*/
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}

.content{
    position:absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content .text{
    position: absolute;
    max-width: 500px;
    margin-right: 20px;
}

.content .text h2{
    color: black;
    font-size: 3em;
    margin-bottom: 5px;
    line-height: em;
    font-weight: bold;
}

.content .text h2 span{
    font-size: 1.4em;
    color: #322059;
}

.content .text p{
    color: black;
    font-weight: bold;
}

.content .text a{
    display: inline-block;
    margin-top: 55px;
    padding: 15px 75px;
    background: #2a5159;
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
    background: #322059;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition:  0.3s ease-in-out;
}

.icons li a:hover{
    background: #a7d0d9;
    transform: translateY(-10px);
}

.icons li a img{
    filter: invert(1);
    transform: scale(0.5);
}

.boxImg{
    position: absolute;
    right: 0;
    bottom: -40px;
}

.boxImg .img4{
    transform: rotate(-15deg);
    width: 720px;   
}
</style>