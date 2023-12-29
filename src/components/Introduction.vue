<template>
    <section class="introduction">
        <div class="box">
            <div class="box-text">
                <h2>Olá!</h2>
                <p>Meu nome é Pedro Lucas. <br> Sou desenvolvedor front-end e UI/UX designer :)</p>
            </div>
            <div class="box-links">
                <button class="btn-cv">Baixar CV</button>
                <button><img src="../imgs/linkedin.svg" alt=""></button>
                <button><img src="../imgs/github.svg" alt=""></button>
            </div>
        </div>
        <img src="../imgs/Perfil-Imagem.png" alt="" class="perfil">
        
    </section>    
</template>

<script>

</script>

<style scoped>
    .introduction{
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: #CBFFE6; */
        background-color: white;
        padding: 2vw 0;
        border: 3px solid black;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        padding-top: 5vw;
    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 2vw;
    }

    .perfil{
        width: 20vw;
        margin-left: 2vw;
    }

    .box-text{
        border: 0.2vw solid black;
        border-radius: 8px;
        padding: 1vw;
        font-size: 1.5vw;
        width: 20vw;
        background-color: #91EAFF;
        margin-bottom: 1vw;
    }

    button{
        background-color: #C3BAFF;
        box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.25), 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
        border: 0.1vw solid black;
    }

    .box-links{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    
    .box-links button{
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25vw 1vw;
        margin: 0 0.5vw;
        width: 15%;
    }
    .box-links button:first-child{
        border-radius: 16px;
        padding: 0.75vw 0.5vw;
        font-weight: bold;
        width: 50%;
        font-size: 1vw;
    }

    .box-links button img{
        width: 2vw;
        border-radius: 50%;
    }

    @media only screen and (max-width: 600px){
     .introduction{
        border: 1px solid black;
        width: 100%;
        flex-direction: column;
        gap: 2vh;
        padding: 6vh 0 2vh 0;
     }  

     .box{
        order: 1;
        margin: 0;
     }
     
     .perfil{
        max-height: 40vh;
        max-width: 75vw;
        width: auto;
        margin: 0;
     }

     .box-text{
        padding: 2vw;
        font-size: 4vw;
        width: 70%;
        background-color: #91EAFF;
        margin-bottom: 1vh;
    }

    .box-links button{
        border-radius: 100%;
        padding: 8px;
        margin: 0 0.5vw;
    }
    .box-links button:first-child{
        border-radius: 16px;
        padding: 0.75vw;
        font-weight: bold;
        font-size: 3vw;
    }

    .box-links button img{
        width: 100%;
        border-radius: 50%;
    }
    }
</style>