<template>
  <div>
    <a @click="scrollToSection('skills')">{{ $t("header.skills") }}</a>
    <a @click="scrollToSection('projects')">{{ $t("header.projects") }}</a>
    <a @click="scrollToSection('about')">{{ $t("header.about") }}</a>
  </div>
</template>

<script>
export default {
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
a {
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease;
}

a:hover {
  opacity: 0.5;
}

a:active {
  opacity: 1;
}

a {
  margin: 0 0.5vw;
  color: black;
  text-decoration: none;
}
</style>