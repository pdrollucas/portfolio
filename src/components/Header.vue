<template>
  <section class="header">
    <img src="../imgs/Frame 1.svg" alt="" class="logo" @click="scrollToSection('introduction')"/>
    <div class="header-items">
      <a @click="scrollToSection('skills')">Experiência</a>
      <a @click="scrollToSection('projects')">Projetos</a>
      <a @click="scrollToSection('about')">Sobre</a>
    </div>
    <div class="header-items">
      <button><img src="../imgs/flag-brasil.png" alt="" /></button>
      <button><img src="../imgs/flag-usa.png" alt="" /></button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        const offset = -45
        window.scrollTo({
          top: targetElement.offsetTop + offset,
          behavior: 'smooth',
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
  /* background-color: #91EAFF; */
  background-color: white;
  color: black;
  /* font-size: 1.2vw; */
  font-size: 18px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.25),
    1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
}

a, img{
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease;
}

a:hover, img:hover{
  opacity: 0.5;
}

a:active, img:active{
  opacity: 1;
}

a,
button {
  margin: 0 0.5vw;
  color: black;
  text-decoration: none;
}

.header-items:last-child {
  display: flex;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

button img {
  width: 100%;
  height: 5vh;
}

button:last-child {
  margin: 0;
}

.logo {
  width: 4vw;
}

@media only screen and (max-width: 600px) {
  .header {
    padding: 0.25vw 0;
    /* font-size: 3vw; */
    font-size: 16px;
    height: 5vh;
    justify-content: space-around;
    width: 100vw;
  }

  .logo {
    width: 24px;
  }

  a,
  button {
    margin: 0 1vw;
  }

  button img {
    width: 24px;
    height: 24px;
  }
}
</style>