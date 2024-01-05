<template>
  <section class="introduction" id="introduction">
    <introductionBox/>
    <img src="@/assets/Perfil-Imagem.png" alt="" class="perfil" />
  </section>
</template>

<script>
import introductionBox from "../components/Introduction/introduction-box.vue";

export default{
  components: {
    introductionBox
  }
}
</script>

<style scoped>
.introduction {
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

.perfil {
  width: 20vw;
  margin-left: 2vw;
}

@media only screen and (max-width: 600px) {
  .introduction {
    border: 1px solid black;
    width: 100%;
    flex-direction: column;
    gap: 2vh;
    padding: 6vh 0 2vh 0;
  }

  .perfil {
    max-height: 40vh;
    max-width: 75vw;
    width: auto;
    margin: 0;
  }
}
</style>