<template>
  <section class="skills" id="skills">
    <skillsText />
    <skillsItems />
  </section>
</template>

<script>
import skillsText from "../components/Skills/skills-text.vue";
import skillsItems from "../components/Skills/skills-items.vue";

export default {
  components: {
    skillsText,
    skillsItems,
  },
};
</script>

<style scoped>
.skills {
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 2vw 10vw;
}

@media only screen and (max-width: 600px) {
  .skills {
    display: grid;
    margin-top: 16px;
  }
}
</style>