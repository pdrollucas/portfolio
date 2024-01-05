<template>
  <section class="about" id="about">
    <h2>
      {{ $t("about.title.up") }} <br />
      {{ $t("about.title.down") }}
    </h2>
    <aboutBoxes />
  </section>
</template>

<script>
import aboutBoxes from "@/components/About/about-boxes.vue";

export default {
  components: {
    aboutBoxes,
  },
};
</script>

<style scoped>
.about {
  padding: 2vw 10vw 4vw;
}

h2 {
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

@media only screen and (max-width: 600px) {
  .about {
    padding: 4vw 10vw;
  }

  h2 {
    font-size: 16px;
    width: 20vw;
    padding: 1.25vw 2vw 1.25vw 1.25vw;
    margin-bottom: 16px;
  }
}
</style>