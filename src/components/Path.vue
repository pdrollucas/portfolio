<template>
    <section class="path">
        <div class="imgs">
            <img src="../imgs/noto-v1_hatching-chick.svg" alt="">
            <div class="line"></div>
            <img src="../imgs/emojione_baby-chick.svg" alt="">
            <div class="line"></div>
            <img src="../imgs/twemoji_bird.svg" alt="">
        </div>
        <div class="texts">
            <div class="box">
                <h2>Cursos online</h2>
                <p>Em setembro de 2022 iniciei meus estudos em programação por cursos online.</p>
            </div>
            <div class="box">
                <h2>Faculdade</h2>
                <p>Em fevereiro de 2023 comecei a cursar Engenharia de Software na Católica de SC - Joinville. </p>
            </div>
            <div class="box">
                <h2>Estágio Vue.JS</h2>
                <p>Em  outubro de 2023 comecei a estagiar como Desenvolvedor Vue.JS para a empresa Dinamio - Joinville. </p>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
    .path{
        padding: 2vw 20vw 2vw 20vw;
        margin-top: 1vw;
    }

    .imgs{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 5vw;
        padding: 1vw;
        background-color: #91EAFF;
        border-radius: 100%;
    }
    
    .texts{
        display: flex;
        align-items: center;
    }
    
    .box{
        width: 20vw;
        height: 15vw;
        padding: 1vw 2vw;
        background-color: white;
        margin: 1vw 2vw;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    h2{
        margin-bottom: 0.5vw;
        text-align: center;
        font-size: 1.25vw;
    }

    p{
        text-align: justify;
        font-size: 1.2vw;
    }

    .line{
        width: 15vw;
        height: 0.35vw;
        background-color: #B967FF;
    }

    @media only screen and (max-width: 600px) {
        .path{
            margin-top: 2vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 2vw 10vw;
        }

        .imgs{
            flex-direction: column;
            gap: 56px;
        }

        img{
            width: 15vw;
        }

        .line{
            transform: rotate(90deg);
            height: 0.5vw;
            width: 12vh;
        }

        .texts{
            flex-direction: column;
        }

        .box{
            width: 100%;
            height: auto;
            padding: 8px;
            border-radius: 0 8px 8px 0;
        }

        h2, p{
            font-size: 16px;
        }
    }
</style>