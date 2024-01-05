<template>
  <section class="path">
    <pathImgs />
    <pathTexts />
  </section>
</template>

<script>
import pathImgs from "../components/Path/path-imgs.vue";
import pathTexts from "../components/Path/path-texts.vue";

export default {
  components: {
    pathImgs,
    pathTexts,
  },
};
</script>

<style scoped>
.path {
  padding: 2vw 20vw 2vw 20vw;
  margin-top: 1vw;
}

@media only screen and (max-width: 600px) {
  .path {
    margin-top: 2vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2vw 10vw;
  }
}
</style>