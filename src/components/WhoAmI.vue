<template>
    <section class="whoAmI">
        <h2>Quem eu <br> sou?</h2>
        <div class="boxes">
            <div class="box-principal">
                <h3>Eu sou uma pessoa!</h3>
                <p>Para além dos estudos de programação e design, gosto de aproveitar meu tempo livre para sair com amigos, ir para academia e ler bons livros. Em meu fone sempre está tocando algo. Sou fã de samba, mpb e funk. </p>
            </div>
            <div class="box-cards">
                <div class="card">
                    <img src="../imgs/beer.png" alt="">
                    <p>Sair com amigos</p>
                </div>
                <div class="card">
                    <img src="../imgs/gym.png" alt="">
                    <p>Academia</p>
                </div>
                <div class="card">
                    <img src="../imgs/book.png" alt="">
                    <p>Ler</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

</script>

<style scoped>
    .whoAmI{
        padding: 2vw 10vw 4vw;
    }

    h2{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        display: inline-block;
        padding: 0.75vw 2vw 0.75vw 0.75vw;
        text-align: left;
        background-color: white;
        margin-bottom: 1vw;
        font-size: 1.25vw;
        width: 11vw;
    }

    
    .boxes{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6vw;
    }
    
    .box-principal{
        width: 40%;
        text-align: center;
    }
    .box-principal h3{
        font-size: 1.1vw;
        padding: 1vw;
        background-color: #91EAFF;
        display: inline-block;
        border-top-left-radius: 1vw;
        border-top-right-radius: 1vw;
    }

    .box-principal p{
        font-size: 1vw;
        text-align: justify;
        border-radius: 1vw;
        background-color: white;
        padding: 1vw;
    }

    .box-cards{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1vw;
    }

    .card{
        display: flex;
        align-items: center;
        justify-content: start;
        background-color: white;
        font-size: 1vw;
        width: 16vw;
        border-radius: 8px;
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        padding: 0.5vw;
    }

    .card img{
        border-radius: 50%;
        padding: 0.25vw;
        background-color: #91EAFF;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4vw;
    }

    .card p{
        font-size: 1vw;
        background-color: white;
        padding: 0.5vw 0.5vw 0.5vw 1vw;
    }

</style>