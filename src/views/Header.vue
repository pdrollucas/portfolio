<template>
  <section class="header">
    <img src="@/assets/Frame 1.svg" alt="" class="logo" @click="scrollToSection('introduction')"/>
    <headerTexts/>
    <headerLangs/>
  </section>
</template>

<script>
import headerTexts from '../components/Header/header-texts.vue';
import headerLangs from '../components/Header/header-langs.vue';

export default {
  components: {
    headerTexts,
    headerLangs
  },
  methods: {
    scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        const offset = -45;
        window.scrollTo({
          top: targetElement.offsetTop + offset,
          behavior: "smooth",
        });
      }
    },
  },
};

</script>

<style scoped>
.header {
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25vw 10vw;
  background-color: white;
  color: black;
  font-size: 18px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.25),
    1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
}

.logo {
  width: 4vw;
}

@media only screen and (max-width: 600px) {
  .header {
    padding: 0.25vw 0;
    font-size: 16px;
    height: 5vh;
    justify-content: space-around;
    width: 100vw;
  }

  .logo {
    width: 24px;
  }
}
</style>