<template>
    <section class="skills">
        <div>
            <h2>Experiências e <br> Habilidades.</h2>
            <p class="text-box">Foi graças a programação que me reencontrei e por esse motivo busco me aperfeiçoar constantemente. Tenho um apreço por desenvolvimento front-end e possuo curiosidade em tudo o que o cerca.</p>
        </div>
        <div class="skills-items">
            <div class="skill-item">
                <img src="../imgs/logos_javascript.svg" alt="">
                <div>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="skill-item">
                <img src="../imgs/logos_vue.svg" alt="">
                <div>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="skill-item">
                <img src="../imgs/logos_figma.svg" alt="">
                <div>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="skill-item">
                <img src="../imgs/logos_javascript.svg" alt="">
                <div>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>    
</template>

<script>

</script>

<style scoped>


.skills{
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 2vw 10vw;
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

.text-box{
    padding: 0.75vw 2vw 0.75vw 0.75vw;
    text-align: left;
    background-color: white;
    width: 25vw;
    border-radius: 8px;
    font-size: 1vw;
    text-align: justify;
}

    .skills-items{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2vw;
        gap: 0.5vw;
    }

    .skill-item{
        display: flex;
        align-items: center;
        justify-content: start;
        background-color: white;
        font-size: 1vw;
        border-radius: 1vw;
        padding: 0.25vw;
        width: 20vw;
    }

    .skill-item img{
        background-color: #f2f2f2;
        width: 25%;
        height: 60%;
        border-radius: 100%;
        padding: 0.5vw;
        display: flex;
        justify-content:flex-end;
        align-items: center;
    }

    .skill-item div{
        padding: 0.5vw 0.75vw;
    }

    .skill-item h3{
        margin-bottom: 0.25vw;
        font-size: 1vw;
    }

</style>